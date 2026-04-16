> **Note: This is a Gemini-adapted fork.**
> The original "Career-Ops" system was created by **Santiago Fernández de Valderrama ([santifer.io](https://santifer.io))**. All credit for the framework, prompts, and pipeline design goes to him. You can find the original repository here: [santifer/career-ops](https://github.com/santifer/career-ops).
# Gemini Career-Ops

[English](README.md) | [EspaÃ±ol](README.es.md) | [PortuguÃªs (Brasil)](README.pt-BR.md) | [í•œêµ­ì–´](README.ko-KR.md) | [æ—¥æœ¬èªž](README.ja.md) | [Ð ÑƒÑÑÐºÐ¸Ð¹](README.ru.md) | [ç¹é«”ä¸­æ–‡](README.zh-TW.md)

<p align="center">
  <a href="https://x.com/santifer"><img src="docs/hero-banner.jpg" alt="Career-Ops â€” Multi-Agent Job Search System" width="800"></a>
</p>

<p align="center">
  <em>Passei meses me candidatando do jeito difÃ­cil. EntÃ£o eu criei o sistema que eu queria ter.</em><br>
  Empresas usam IA para filtrar candidatos. <strong>Eu dei aos candidatos IA para <em>escolher</em> empresas.</strong><br>
  <em>Agora Ã© open source.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white" alt="Gemini Agent">
  <img src="https://img.shields.io/badge/OpenCode-111827?style=flat&logo=terminal&logoColor=white" alt="OpenCode">
  <img src="https://img.shields.io/badge/Codex_(soon)-6B7280?style=flat&logo=openai&logoColor=white" alt="Codex">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT">
  <a href="https://discord.gg/8pRpHETxa4"><img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Discord"></a>
  <br>
  <img src="https://img.shields.io/badge/EN-blue?style=flat" alt="EN">
  <img src="https://img.shields.io/badge/ES-red?style=flat" alt="ES">
  <img src="https://img.shields.io/badge/DE-grey?style=flat" alt="DE">
  <img src="https://img.shields.io/badge/FR-blue?style=flat" alt="FR">
  <img src="https://img.shields.io/badge/PT--BR-green?style=flat" alt="PT-BR">
</p>

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops Demo" width="800">
</p>

<p align="center"><strong>740+ vagas avaliadas Â· 100+ CVs personalizados Â· 1 vaga dos sonhos conquistada</strong></p>

<p align="center"><a href="https://discord.gg/8pRpHETxa4"><img src="https://img.shields.io/badge/Join_the_community-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a></p>

## O que Ã© isso

Career-Ops transforma qualquer CLI de cÃ³digo com IA em uma central completa de busca de emprego. Em vez de acompanhar candidaturas manualmente em planilha, vocÃª tem um pipeline com IA que:

- **Avalia vagas** com um sistema estruturado de pontuaÃ§Ã£o A-F (10 dimensÃµes com pesos)
- **Gera PDFs personalizados** -- CVs otimizados para ATS, ajustados por descriÃ§Ã£o de vaga
- **Escaneia portais** automaticamente (Greenhouse, Ashby, Lever, pÃ¡ginas de empresas)
- **Processa em lote** -- avalia 10+ vagas em paralelo com subagentes
- **Rastreia tudo** em uma Ãºnica fonte de verdade com verificaÃ§Ãµes de integridade

> **Importante: isso NÃƒO Ã© uma ferramenta de disparo em massa.** Career-ops Ã© um filtro -- ajuda vocÃª a encontrar as poucas vagas que realmente valem seu tempo entre centenas. O sistema recomenda fortemente nÃ£o se candidatar a nada com nota abaixo de 4.0/5. Seu tempo Ã© valioso, e o do recrutador tambÃ©m. Sempre revise antes de enviar.

Career-ops Ã© agentic: Gemini Agent navega pÃ¡ginas de carreira com Playwright, avalia aderÃªncia comparando seu CV com a descriÃ§Ã£o da vaga (nÃ£o por simples correspondÃªncia de palavras-chave) e adapta seu currÃ­culo para cada vaga.

> **Aviso: as primeiras avaliaÃ§Ãµes nÃ£o vÃ£o ser Ã³timas.** O sistema ainda nÃ£o conhece vocÃª. DÃª contexto -- seu CV, sua trajetÃ³ria profissional, suas provas de resultado, suas preferÃªncias, no que vocÃª Ã© bom e o que quer evitar. Quanto mais vocÃª alimenta, melhor ele fica. Pense nisso como o onboarding de um novo recrutador: na primeira semana ele precisa te conhecer, depois se torna indispensÃ¡vel.

ConstruÃ­do por alguÃ©m que usou isso para avaliar 740+ vagas, gerar 100+ CVs personalizados e conquistar uma posiÃ§Ã£o de Head of Applied AI. [Leia o estudo de caso completo](https://santifer.io/career-ops-system).

## Funcionalidades

| Funcionalidade | DescriÃ§Ã£o |
|---------|-------------|
| **Auto-Pipeline** | Cole uma URL e receba avaliaÃ§Ã£o completa + PDF + entrada no tracker |
| **AvaliaÃ§Ã£o em 6 blocos** | Resumo da vaga, aderÃªncia ao CV, estratÃ©gia de senioridade, pesquisa de compensaÃ§Ã£o, personalizaÃ§Ã£o, preparaÃ§Ã£o para entrevista (STAR+R) |
| **Banco de histÃ³rias de entrevista** | Acumula histÃ³rias STAR+Reflection ao longo das avaliaÃ§Ãµes -- 5-10 histÃ³rias principais que respondem qualquer pergunta comportamental |
| **Scripts de negociaÃ§Ã£o** | Frameworks para negociaÃ§Ã£o salarial, resposta a desconto geogrÃ¡fico e alavanca com ofertas concorrentes |
| **GeraÃ§Ã£o de PDF ATS** | CVs com injeÃ§Ã£o de palavras-chave usando design com Space Grotesk + DM Sans |
| **Scanner de portais** | 45+ empresas prÃ©-configuradas (Anthropic, OpenAI, ElevenLabs, Retool, n8n...) + consultas customizadas em Ashby, Greenhouse, Lever e Wellfound |
| **Processamento em lote** | AvaliaÃ§Ã£o paralela com workers `npm run gemini-ops --` |
| **Dashboard TUI** | Interface no terminal para navegar, filtrar e ordenar seu pipeline |
| **Humano no loop** | A IA avalia e recomenda, vocÃª decide e age. O sistema nunca envia candidatura automaticamente -- a decisÃ£o final Ã© sempre sua |
| **Integridade do pipeline** | Merge automatizado, deduplicaÃ§Ã£o, normalizaÃ§Ã£o de status e health checks |

## InÃ­cio rÃ¡pido

```bash
# 1. Clone e instale
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # NecessÃ¡rio para geraÃ§Ã£o de PDF

# 2. Verifique o setup
npm run doctor                     # Valida todos os prÃ©-requisitos

# 3. Configure
cp config/profile.example.yml config/profile.yml  # Edite com seus dados
cp templates/portals.example.yml portals.yml       # Personalize as empresas

# 4. Adicione seu CV
# Crie cv.md na raiz do projeto com seu CV em markdown

# 5. Personalize com Claude
claude   # Abra o Gemini Agent neste diretÃ³rio

# Depois, peÃ§a ao Claude para adaptar o sistema para vocÃª:
# "Mude os arquÃ©tipos para vagas de engenharia backend"
# "Traduza os modos para portuguÃªs"
# "Adicione estas 5 empresas ao portals.yml"
# "Atualize meu perfil com este CV que vou colar"

# 6. Comece a usar
# Cole a URL de uma vaga ou rode /career-ops
```

> **O sistema foi projetado para ser customizado pelo prÃ³prio Claude.** Modos, arquÃ©tipos, pesos de pontuaÃ§Ã£o, scripts de negociaÃ§Ã£o -- Ã© sÃ³ pedir para ele alterar. Ele lÃª os mesmos arquivos que usa, entÃ£o sabe exatamente o que editar.

Veja [docs/SETUP.md](docs/SETUP.md) para o guia completo de configuraÃ§Ã£o.

## Uso

Career-ops Ã© um Ãºnico comando slash com mÃºltiplos modos:

```
/career-ops                â†’ Mostrar todos os comandos disponÃ­veis
/career-ops {cole um JD}   â†’ Auto-pipeline completo (avaliar + PDF + tracker)
/career-ops scan           â†’ Escanear portais por novas vagas
/career-ops pdf            â†’ Gerar CV otimizado para ATS
/career-ops batch          â†’ Avaliar mÃºltiplas vagas em lote
/career-ops tracker        â†’ Ver status das candidaturas
/career-ops apply          â†’ Preencher formulÃ¡rios de candidatura com IA
/career-ops pipeline       â†’ Processar URLs pendentes
/career-ops contacto       â†’ Mensagem de outreach no LinkedIn
/career-ops deep           â†’ Pesquisa aprofundada da empresa
/career-ops training       â†’ Avaliar um curso/certificaÃ§Ã£o
/career-ops project        â†’ Avaliar um projeto de portfÃ³lio
```

Ou apenas cole uma URL ou descriÃ§Ã£o de vaga diretamente -- career-ops detecta automaticamente e roda o pipeline completo.

## Como funciona

```
VocÃª cola a URL ou descriÃ§Ã£o da vaga
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  DetecÃ§Ã£o de     â”‚  Classifica: LLMOps / Agentic / PM / SA / FDE / Transformation
â”‚  ArquÃ©tipo       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  AvaliaÃ§Ã£o A-F   â”‚  AderÃªncia, gaps, pesquisa de compensaÃ§Ã£o, histÃ³rias STAR
â”‚  (lÃª cv.md)      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
    â”Œâ”€â”€â”€â”€â”¼â”€â”€â”€â”€â”
    â–¼    â–¼    â–¼
 Report  PDF  Tracker
  .md   .pdf   .tsv
```

## Portais prÃ©-configurados

O scanner jÃ¡ vem com **45+ empresas** prontas para escanear e **19 consultas de busca** nos principais job boards. Copie `templates/portals.example.yml` para `portals.yml` e adicione as suas:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
**Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
**AI Platforms:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
**Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
**Enterprise:** Salesforce, Twilio, Gong, Dialpad
**LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
**Automation:** n8n, Zapier, Make.com
**European:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**Job boards pesquisados:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront

## Dashboard TUI

O dashboard de terminal integrado permite navegar visualmente pelo seu pipeline:

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard --path ..
```

Recursos: 6 abas de filtro, 4 modos de ordenaÃ§Ã£o, visualizaÃ§Ã£o agrupada/plana, prÃ©vias com carregamento sob demanda e alteraÃ§Ãµes de status inline.

## Estrutura do projeto

```
career-ops/
â”œâ”€â”€ CLAUDE.md                    # InstruÃ§Ãµes para o agente
â”œâ”€â”€ cv.md                        # Seu CV (crie este arquivo)
â”œâ”€â”€ article-digest.md            # Seus proof points (opcional)
â”œâ”€â”€ config/
â”‚   â””â”€â”€ profile.example.yml      # Template para seu perfil
â”œâ”€â”€ modes/                       # 14 modos de skill
â”‚   â”œâ”€â”€ _shared.md               # Contexto compartilhado (personalize)
â”‚   â”œâ”€â”€ oferta.md                # AvaliaÃ§Ã£o individual
â”‚   â”œâ”€â”€ pdf.md                   # GeraÃ§Ã£o de PDF
â”‚   â”œâ”€â”€ scan.md                  # Scanner de portais
â”‚   â”œâ”€â”€ batch.md                 # Processamento em lote
â”‚   â””â”€â”€ ...
â”œâ”€â”€ templates/
â”‚   â”œâ”€â”€ cv-template.html         # Template de CV otimizado para ATS
â”‚   â”œâ”€â”€ portals.example.yml      # Template de configuraÃ§Ã£o do scanner
â”‚   â””â”€â”€ states.yml               # Status canÃ´nicos
â”œâ”€â”€ batch/
â”‚   â”œâ”€â”€ batch-prompt.md          # Prompt autocontido para workers
â”‚   â””â”€â”€ batch-runner.sh          # Script orquestrador
â”œâ”€â”€ dashboard/                   # Visualizador de pipeline em Go TUI
â”œâ”€â”€ data/                        # Seus dados de rastreamento (gitignored)
â”œâ”€â”€ reports/                     # RelatÃ³rios de avaliaÃ§Ã£o (gitignored)
â”œâ”€â”€ output/                      # PDFs gerados (gitignored)
â”œâ”€â”€ fonts/                       # Space Grotesk + DM Sans
â”œâ”€â”€ docs/                        # Setup, customizaÃ§Ã£o, arquitetura
â””â”€â”€ examples/                    # CV de exemplo, relatÃ³rio e proof points
```

## Stack de tecnologia

![Gemini Agent](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Bubble Tea](https://img.shields.io/badge/Bubble_Tea-FF75B5?style=flat&logo=go&logoColor=white)

- **Agente**: Gemini Agent com skills e modos customizados
- **PDF**: Playwright/Puppeteer + template HTML
- **Scanner**: Playwright + Greenhouse API + WebSearch
- **Dashboard**: Go + Bubble Tea + Lipgloss (tema Catppuccin Mocha)
- **Dados**: Tabelas em Markdown + configuraÃ§Ã£o YAML + arquivos TSV de lote

## TambÃ©m open source

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- O site de portfÃ³lio (santifer.io) com chatbot de IA, dashboard de LLMOps e estudos de caso. Se vocÃª precisa de um portfÃ³lio para acompanhar sua busca por vagas, faÃ§a um fork e adapte para vocÃª.

## Sobre o autor

Sou o Santiago -- Head of Applied AI, ex-fundador (criei e vendi uma empresa que ainda opera com meu nome). Eu construÃ­ o career-ops para gerenciar minha prÃ³pria busca de emprego. Funcionou: usei o sistema para conquistar meu cargo atual.

Meu portfÃ³lio e outros projetos open source â†’ [santifer.io](https://santifer.io)

â˜• [Me pague um cafÃ©](https://buymeacoffee.com/santifer) se o career-ops ajudou na sua busca de emprego.

## Star History

<a href="https://www.star-history.com/?repos=santifer%2Fcareer-ops&type=timeline&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
 </picture>
</a>

## Aviso legal

**career-ops Ã© uma ferramenta local e open source â€” NÃƒO Ã© um serviÃ§o hospedado.** Ao usar este software, vocÃª reconhece que:

1. **VocÃª controla seus dados.** Seu CV, informaÃ§Ãµes de contato e dados pessoais ficam na sua mÃ¡quina e sÃ£o enviados diretamente para o provedor de IA que vocÃª escolher (Anthropic, OpenAI etc.). NÃ³s nÃ£o coletamos, armazenamos nem temos acesso aos seus dados.
2. **VocÃª controla a IA.** Os prompts padrÃ£o instruem a IA a nÃ£o enviar candidaturas automaticamente, mas modelos de IA podem se comportar de forma imprevisÃ­vel. Se vocÃª modificar os prompts ou usar modelos diferentes, faz isso por sua conta e risco. **Sempre revise o conteÃºdo gerado por IA antes de enviar.**
3. **VocÃª cumpre os ToS de terceiros.** VocÃª deve usar esta ferramenta em conformidade com os Termos de ServiÃ§o dos portais de carreira com os quais interage (Greenhouse, Lever, Workday, LinkedIn etc.). NÃ£o use esta ferramenta para spam de empregadores nem para sobrecarregar sistemas ATS.
4. **Sem garantias.** As avaliaÃ§Ãµes sÃ£o recomendaÃ§Ãµes, nÃ£o verdades absolutas. Modelos de IA podem alucinar habilidades ou experiÃªncias. Os autores nÃ£o se responsabilizam por resultados profissionais, candidaturas rejeitadas, restriÃ§Ãµes de conta ou qualquer outra consequÃªncia.

Veja [LEGAL_DISCLAIMER.md](LEGAL_DISCLAIMER.md) para o aviso completo. Este software Ã© fornecido sob a [LicenÃ§a MIT](LICENSE) "como estÃ¡", sem garantia de qualquer tipo.

## LicenÃ§a

MIT

## Vamos nos conectar

[![Website](https://img.shields.io/badge/santifer.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://santifer.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santifer)
[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/santifer)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/8pRpHETxa4)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hi@santifer.io)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/santifer)

