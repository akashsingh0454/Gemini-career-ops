import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// 1. Initialize Gemini API Client
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GEMINI_API_KEY environment variable is missing.");
  console.error("Please add it to a .env file or export it.");
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey });

// 2. Parse arguments to determine mode
const args = process.argv.slice(2);
let modeCommand = args[0] || 'discovery';
let inputData = args.slice(1).join(' ');

const validModes = ['oferta', 'ofertas', 'contacto', 'deep', 'pdf', 'training', 'project', 'tracker', 'pipeline', 'apply', 'scan', 'batch', 'patterns', 'followup'];

let activeMode = 'oferta'; // Default active mode for auto-pipeline

if (validModes.includes(modeCommand)) {
    activeMode = modeCommand;
} else if (modeCommand !== 'discovery') {
    // Treat the first argument as input data for auto-pipeline
    activeMode = 'oferta'; // Auto-pipeline uses oferta + pdf essentially
    inputData = args.join(' ');
}

if (modeCommand === 'discovery' && !inputData) {
    console.log(`
career-ops (Gemini Edition) -- Command Center

Available commands:
  npx gemini-ops {JD}      → AUTO-PIPELINE: evaluate + report + PDF + tracker
  npx gemini-ops pipeline  → Process pending URLs from inbox
  npx gemini-ops oferta    → Evaluation only A-F
  npx gemini-ops ofertas   → Compare and rank
  npx gemini-ops scan      → Scan portals for new offers
  ... and more modes matching the modes/ folder

Usage: npx gemini-ops <command> [input...]
    `);
    process.exit(0);
}

console.log(`[Gemini-Ops] Initializing mode: ${activeMode}`);

// 3. Load Context Prompts
let systemInstruction = "You are the Career-Ops Agent. Your goal is to process the user's request based on the provided guidelines and modes.\n\n";

try {
  if (fs.existsSync('modes/_shared.md')) {
      const shared = fs.readFileSync('modes/_shared.md', 'utf-8');
      systemInstruction += `--- SHARED CONTEXT ---\n${shared}\n\n`;
  }
  const modeFile = `modes/${activeMode}.md`;
  if (fs.existsSync(modeFile)) {
      const modeData = fs.readFileSync(modeFile, 'utf-8');
      systemInstruction += `--- MODE SPECIFIC INSTRUCTIONS (${activeMode}) ---\n${modeData}\n\n`;
  } else {
      console.warn(`[Warning] Mode file ${modeFile} not found.`);
  }
} catch (e) {
  console.warn("Could not load all context files. Continuing with limited context...", e);
}

// 4. Implement Tools
const readFileDeclaration = {
    name: 'read_file',
    description: 'Read the contents of a local file in the project. Use this to read cv.md, reports, or configurations.',
    parameters: {
        type: Type.OBJECT,
        properties: { path: { type: Type.STRING, description: 'Relative path to the file.' } },
        required: ['path']
    }
};

const writeFileDeclaration = {
    name: 'write_file',
    description: 'Write string content to a local file. Use this to save reports to reports/ and update data/applications.md.',
    parameters: {
        type: Type.OBJECT,
        properties: { 
            path: { type: Type.STRING, description: 'Relative path to the file.' },
            content: { type: Type.STRING, description: 'Content to string.' }
        },
        required: ['path', 'content']
    }
};

const runCommandDeclaration = {
    name: 'run_command',
    description: 'Run a terminal command (e.g., node generate-pdf.mjs, playwright requests). Note: Be careful, this executes immediately.',
    parameters: {
        type: Type.OBJECT,
        properties: { command: { type: Type.STRING, description: 'Terminal command to execute.' } },
        required: ['command']
    }
};

// Tool Executor map
import { execSync } from 'child_process';
const executeTool = {
    read_file: (args) => {
        try { return fs.readFileSync(args.path, 'utf-8'); } catch (e) { return `Error reading file: ${e.message}`; }
    },
    write_file: (args) => {
        try { 
            const dir = path.dirname(args.path);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(args.path, args.content); 
            return `File successfully written to ${args.path}`; 
        } catch (e) { return `Error writing file: ${e.message}`; }
    },
    run_command: (args) => {
        try {
            console.log(`[Executing Command via Agent]: ${args.command}`);
            return execSync(args.command, { encoding: 'utf-8' });
        } catch (e) { return `Command failed: ${e.message}\nOutput: ${e.stdout}\nError: ${e.stderr}`; }
    }
};

// 5. Agentic Loop Function
async function startAgent() {
    console.log(`[Gemini-Ops] Conversing with Gemini 3.1 Pro...`);
    const history = [];

    // The initial prompt is what the user asked
    let prompt = inputData 
        ? `I have invoked the CLI with the following input or URL for the ${activeMode} mode:\n${inputData}\n\nPlease proceed with the entire pipeline described in the mode instructions.`
        : `I have invoked the ${activeMode} mode. Please begin executing the instructions for this mode.`;

    const chatSession = ai.chats.create({
        model: 'gemini-3.1-pro',
        config: {
            systemInstruction,
            temperature: 0.1,
            tools: [{ functionDeclarations: [readFileDeclaration, writeFileDeclaration, runCommandDeclaration] }]
        }
    });

    console.log(">> User:", inputData);
    let loopCount = 0;
    
    while (loopCount < 15) {
        loopCount++;
        const response = await chatSession.sendMessage({ message: prompt });
        
        let toolResponses = [];
        if (response.functionCalls && response.functionCalls.length > 0) {
            console.log(`[Gemini is reasoning - tools invoked: ${response.functionCalls.map(c => c.name).join(', ')}]`);
            for (const call of response.functionCalls) {
                const result = executeTool[call.name](call.args);
                toolResponses.push({
                    functionResponse: {
                        name: call.name,
                        response: { result }
                    }
                });
            }
            prompt = toolResponses; // Feed the tool results back into the next sendMessage
        } else {
            console.log(`\n===================\n[Gemini response]:\n${response.text}\n===================\n`);
            break; // Stop loop if no further tool calls
        }
    }
    
    if (loopCount >= 15) {
        console.warn("[Gemini-Ops] Exceeded max tool execution loops (15).");
    }
}

startAgent().catch(console.error);
