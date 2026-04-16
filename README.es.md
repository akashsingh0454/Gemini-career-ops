> **Note: This is a Gemini-adapted fork.**
> The original "Career-Ops" system was created by **Santiago Fernández de Valderrama ([santifer.io](https://santifer.io))**. All credit for the framework, prompts, and pipeline design goes to him. You can find the original repository here: [santifer/career-ops](https://github.com/santifer/career-ops).
# Gemini Career-Ops

[English](README.md) | [EspaÃ±ol](README.es.md) | [PortuguÃªs (Brasil)](README.pt-BR.md) | [í•œêµ­ì–´](README.ko-KR.md) | [æ—¥æœ¬èªž](README.ja.md) | [Ð ÑƒÑÑÐºÐ¸Ð¹](README.ru.md) | [ç¹é«”ä¸­æ–‡](README.zh-TW.md)

<p align="center">
  <a href="https://x.com/santifer"><img src="docs/hero-banner.jpg" alt="Career-Ops â€” Sistema Multi-Agente de Busqueda de Empleo" width="800"></a>
</p>

<p align="center">
  <em>Meses mandando CVs al vacio. Asi que me construi el sistema que echaba en falta.</em><br>
  Las empresas usan IA para descartarte. <strong>Yo le di a los candidatos IA para <em>elegirlas</em>.</strong><br>
  <em>Ahora es open source.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white" alt="Gemini Agent">
  <img src="https://img.shields.io/badge/OpenCode-111827?style=flat&logo=terminal&logoColor=white" alt="OpenCode">
  <img src="https://img.shields.io/badge/Codex_(pronto)-6B7280?style=flat&logo=openai&logoColor=white" alt="Codex">
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
  <img src="https://img.shields.io/badge/JA-red?style=flat" alt="JA">
</p>

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops Demo" width="800">
</p>

<p align="center"><strong>740+ ofertas evaluadas Â· 100+ CVs personalizados Â· 1 trabajo soÃ±ado conseguido</strong></p>

<p align="center"><a href="https://discord.gg/8pRpHETxa4"><img src="https://img.shields.io/badge/Unete_a_la_comunidad-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a></p>

## Que es esto

Career-Ops convierte cualquier CLI de IA en un centro de mando de busqueda de empleo. En vez de trackear aplicaciones en un spreadsheet, tienes un pipeline AI que:

- **Evalua ofertas** con scoring estructurado A-F (10 dimensiones ponderadas)
- **Genera PDFs personalizados** -- CVs ATS-optimizados por oferta
- **Escanea portales** automaticamente (Greenhouse, Ashby, Lever, webs de empresas)
- **Procesa en batch** -- evalua 10+ ofertas en paralelo con sub-agentes
- **Trackea todo** en una fuente de verdad unica con checks de integridad

> **Importante: Esto NO es para spamear empresas.** Career-ops es un filtro -- te ayuda a encontrar las pocas ofertas que merecen tu tiempo entre cientos. El sistema recomienda encarecidamente no aplicar a nada por debajo de 4.0/5. Tu tiempo es valioso, y el del recruiter tambien. Siempre revisa antes de enviar.

> **Aviso: las primeras evaluaciones no seran buenas.** El sistema no te conoce todavia. Dale contexto -- tu CV, tu historia profesional, tus proof points, tus preferencias, en que eres bueno, que quieres evitar. Cuanto mas lo nutras, mejor filtra. Piensa en ello como hacer onboarding a un recruiter nuevo: la primera semana necesita conocerte, luego se vuelve invaluable.

Construido por alguien que lo uso para evaluar 740+ ofertas, generar 100+ CVs personalizados, y conseguir un rol de Head of Applied AI. [Lee el case study completo](https://santifer.io/career-ops).

## Features

| Feature | Descripcion |
|---------|-------------|
| **Auto-Pipeline** | Pega una URL, obtiene evaluacion + PDF + entrada en tracker |
| **Evaluacion A-F** | Resumen del rol, match con CV, estrategia de nivel, research de comp, personalizacion, prep de entrevista (STAR+R) |
| **Banco de historias** | Acumula historias STAR+Reflexion entre evaluaciones -- 5-10 historias maestras que responden cualquier pregunta behavioral |
| **Scripts de negociacion** | Frameworks de negociacion salarial, pushback de descuentos geograficos, leverage de ofertas competidoras |
| **PDFs ATS** | CVs con keywords inyectados, diseÃ±o Space Grotesk + DM Sans |
| **Scanner de portales** | 45+ empresas pre-configuradas (Anthropic, OpenAI, ElevenLabs, Retool, n8n...) + queries en Ashby, Greenhouse, Lever, Wellfound |
| **Batch** | Evaluacion en paralelo con workers `npm run gemini-ops --` |
| **Dashboard TUI** | Terminal UI para navegar, filtrar y ordenar tu pipeline |
| **Human-in-the-Loop** | La IA evalua y recomienda, tu decides y actuas. El sistema nunca envia una aplicacion -- tu siempre tienes la ultima palabra |
| **Integridad de pipeline** | Merge automatico, dedup, normalizacion de estados, health checks |

## Inicio rapido

```bash
# 1. Clonar e instalar
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # Necesario para generar PDFs

# 2. Verificar setup
npm run doctor                     # Valida todos los prerequisitos

# 3. Configurar
cp config/profile.example.yml config/profile.yml  # Editar con tus datos
cp templates/portals.example.yml portals.yml       # Personalizar empresas

# 4. AÃ±adir tu CV
# Crear cv.md en la raiz del proyecto con tu CV en markdown

# 5. Personalizar con Claude
claude   # Abrir Gemini Agent en este directorio

# Pidele a Claude que adapte el sistema a ti:
# "Cambia los arquetipos a roles de backend"
# "Traduce los modes a ingles"
# "AÃ±ade estas empresas a portals.yml"
# "Actualiza mi perfil con este CV que te pego"

# 6. Usar
# Pega una URL de oferta o ejecuta /career-ops
```

> **El sistema esta diseÃ±ado para que Claude lo personalice.** Modes, arquetipos, scoring, scripts de negociacion -- solo pidelo. Claude lee los mismos archivos que usa, asi que sabe exactamente que editar.

Guia completa en [docs/SETUP.md](docs/SETUP.md).

## Uso

Career-ops es un unico slash command con multiples modos:

```
/career-ops                â†’ Mostrar todos los comandos
/career-ops {pega un JD}   â†’ Pipeline completo (evaluar + PDF + tracker)
/career-ops scan           â†’ Escanear portales
/career-ops pdf            â†’ Generar CV ATS-optimizado
/career-ops batch          â†’ Evaluar ofertas en batch
/career-ops tracker        â†’ Ver estado de aplicaciones
/career-ops apply          â†’ Rellenar formularios con IA
/career-ops pipeline       â†’ Procesar URLs pendientes
/career-ops contacto       â†’ Mensaje LinkedIn outreach
/career-ops deep           â†’ Research profundo de empresa
```

O simplemente pega una URL o descripcion de oferta -- career-ops la detecta y ejecuta el pipeline completo.

## Como funciona

```
Pegas una URL o descripcion de oferta
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Deteccion de    â”‚  Clasifica: LLMOps / Agentic / PM / SA / FDE / Transformation
â”‚  Arquetipo       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Evaluacion A-F  â”‚  Match, gaps, comp research, historias STAR
â”‚  (lee cv.md)     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
    â”Œâ”€â”€â”€â”€â”¼â”€â”€â”€â”€â”
    â–¼    â–¼    â–¼
 Report  PDF  Tracker
  .md   .pdf   .tsv
```

## Portales incluidos

El scanner viene con **45+ empresas** pre-configuradas y **19 queries** en los principales portales de empleo. Copia `templates/portals.example.yml` a `portals.yml` y aÃ±ade las tuyas:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
**Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
**Plataformas AI:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
**Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
**Enterprise:** Salesforce, Twilio, Gong, Dialpad
**LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
**Automatizacion:** n8n, Zapier, Make.com
**Europa:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**Portales de empleo:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront

## Dashboard TUI

El dashboard integrado en terminal te permite navegar tu pipeline visualmente:

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard --path ..
```

Features: 6 pestaÃ±as de filtro, 4 modos de ordenacion, vista agrupada/plana, previews lazy-loaded, cambios de estado inline.

## Estructura del proyecto

```
career-ops/
â”œâ”€â”€ CLAUDE.md                    # Instrucciones del agente
â”œâ”€â”€ cv.md                        # Tu CV (crealo tu)
â”œâ”€â”€ article-digest.md            # Tus proof points (opcional)
â”œâ”€â”€ config/
â”‚   â””â”€â”€ profile.example.yml      # Template para tu perfil
â”œâ”€â”€ modes/                       # 14 modos
â”‚   â”œâ”€â”€ _shared.md               # Contexto compartido (personalizable)
â”‚   â”œâ”€â”€ oferta.md                # Evaluacion individual
â”‚   â”œâ”€â”€ pdf.md                   # Generacion de PDF
â”‚   â”œâ”€â”€ scan.md                  # Scanner de portales
â”‚   â”œâ”€â”€ batch.md                 # Procesamiento batch
â”‚   â””â”€â”€ ...
â”œâ”€â”€ templates/
â”‚   â”œâ”€â”€ cv-template.html         # Template de CV ATS-optimizado
â”‚   â”œâ”€â”€ portals.example.yml      # Config del scanner
â”‚   â””â”€â”€ states.yml               # Estados canonicos
â”œâ”€â”€ batch/
â”‚   â”œâ”€â”€ batch-prompt.md          # Prompt autocontenido del worker
â”‚   â””â”€â”€ batch-runner.sh          # Script orquestador
â”œâ”€â”€ dashboard/                   # Visor de pipeline en Go TUI
â”œâ”€â”€ data/                        # Tus datos de tracking (gitignored)
â”œâ”€â”€ reports/                     # Reports de evaluacion (gitignored)
â”œâ”€â”€ output/                      # PDFs generados (gitignored)
â”œâ”€â”€ fonts/                       # Space Grotesk + DM Sans
â”œâ”€â”€ docs/                        # Setup, personalizacion, arquitectura
â””â”€â”€ examples/                    # CV de ejemplo, report, proof points
```

## Tech Stack

![Gemini Agent](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Bubble Tea](https://img.shields.io/badge/Bubble_Tea-FF75B5?style=flat&logo=go&logoColor=white)

- **Agente**: Gemini Agent con skills y modos personalizados
- **PDF**: Playwright/Puppeteer + template HTML
- **Scanner**: Playwright + Greenhouse API + WebSearch
- **Dashboard**: Go + Bubble Tea + Lipgloss (tema Catppuccin Mocha)
- **Datos**: Tablas Markdown + config YAML + ficheros TSV batch

## Sobre el autor

Soy Santiago -- Head of Applied AI, ex-fundador (monte y vendi un negocio que sigue funcionando con mi nombre). Construi career-ops para gestionar mi propia busqueda de empleo. Funciono: lo use para conseguir mi puesto actual.

Mi portfolio y otros proyectos open source â†’ [santifer.io](https://santifer.io)

â˜• [Invitame a un cafe](https://buymeacoffee.com/santifer) si career-ops te ayudo en tu busqueda.

## Documentacion

- [SETUP.md](docs/SETUP.md) -- Guia de instalacion
- [CUSTOMIZATION.md](docs/CUSTOMIZATION.md) -- Como personalizar
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) -- Como funciona el sistema

## Tambien Open Source

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- El portfolio (santifer.io) con chatbot IA, dashboard LLMOps y case studies. Si necesitas un portfolio para acompaÃ±ar tu busqueda de empleo, echale un vistazo.

## Star History

<a href="https://www.star-history.com/?repos=santifer%2Fcareer-ops&type=timeline&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
 </picture>
</a>

## Aviso legal

**career-ops es una herramienta local y open source â€” NO un servicio alojado.** Al usar este software, aceptas que:

1. **Tu controlas tus datos.** Tu CV, datos de contacto e informacion personal se quedan en tu maquina y se envian directamente al proveedor de IA que elijas (Anthropic, OpenAI, etc.). No recopilamos, almacenamos ni tenemos acceso a tus datos.
2. **Tu controlas la IA.** Los prompts por defecto instruyen a la IA a no enviar aplicaciones automaticamente, pero los modelos pueden comportarse de forma impredecible. Si modificas los prompts o usas otros modelos, lo haces bajo tu responsabilidad. **Revisa siempre el contenido generado antes de enviarlo.**
3. **Tu cumples con los terminos de terceros.** Debes usar esta herramienta de acuerdo con los Terminos de Servicio de los portales de empleo (Greenhouse, Lever, Workday, LinkedIn, etc.). No uses esta herramienta para spamear empresas.
4. **Sin garantias.** Las evaluaciones son recomendaciones, no verdad absoluta. Los modelos pueden inventar habilidades o experiencia. Los autores no son responsables de resultados laborales, candidaturas rechazadas, restricciones de cuenta ni ninguna otra consecuencia.

Ver [LEGAL_DISCLAIMER.md](LEGAL_DISCLAIMER.md) para mas detalles. Este software se proporciona bajo la [Licencia MIT](LICENSE) "tal cual", sin garantia de ningun tipo.

## Licencia

MIT

## Conecta

[![Website](https://img.shields.io/badge/santifer.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://santifer.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santifer)
[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/santifer)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/8pRpHETxa4)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hola@santifer.io)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/santifer)

