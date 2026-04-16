> **Note: This is a Gemini-adapted fork.**
> The original "Career-Ops" system was created by **Santiago Fernández de Valderrama ([santifer.io](https://santifer.io))**. All credit for the framework, prompts, and pipeline design goes to him. You can find the original repository here: [santifer/career-ops](https://github.com/santifer/career-ops).
# Gemini Career-Ops

[English](README.md) | [EspaÃ±ol](README.es.md) | [PortuguÃªs (Brasil)](README.pt-BR.md) | [í•œêµ­ì–´](README.ko-KR.md) | [æ—¥æœ¬èªž](README.ja.md) | [Ð ÑƒÑÑÐºÐ¸Ð¹](README.ru.md) | [ç¹é«”ä¸­æ–‡](README.zh-TW.md)

<p align="center">
  <a href="https://x.com/santifer"><img src="docs/hero-banner.jpg" alt="Career-Ops â€” å¤šä»£ç†æ±‚è·ç³»çµ±" width="800"></a>
</p>

<p align="center">
  <em>æˆ‘èŠ±äº†å¥½å¹¾å€‹æœˆç”¨æœ€è²»åŠ›çš„æ–¹å¼æ‰¾å·¥ä½œã€‚æ‰€ä»¥æˆ‘æ‰“é€ äº†ä¸€å€‹ç•¶åˆå°±å¸Œæœ›èƒ½æ“æœ‰çš„ç³»çµ±ã€‚</em><br>
  ä¼æ¥­ç”¨ AI ç¯©é¸å€™é¸äººã€‚<strong>æˆ‘æŠŠ AI äº¤çµ¦å€™é¸äººï¼Œè®“ä»–å€‘ä¾†<em>æŒ‘é¸</em>ä¼æ¥­ã€‚</strong><br>
  <em>ç¾åœ¨ï¼Œå®ƒé–‹æºäº†ã€‚</em>
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
  <img src="https://img.shields.io/badge/KO-white?style=flat" alt="KO">
  <img src="https://img.shields.io/badge/JA-red?style=flat" alt="JA">
  <img src="https://img.shields.io/badge/ZH--TW-blue?style=flat" alt="ZH-TW">
</p>

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops ç¤ºç¯„" width="800">
</p>

<p align="center"><strong>è©•ä¼°è¶…éŽ 740 ä»½è·ç¼º Â· ç”Ÿæˆè¶…éŽ 100 ä»½å€‹äººåŒ–å±¥æ­· Â· æˆåŠŸç²å¾—ç†æƒ³è·ä½</strong></p>

<p align="center"><a href="https://discord.gg/8pRpHETxa4"><img src="https://img.shields.io/badge/åŠ å…¥ç¤¾ç¾¤-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a></p>

## é€™æ˜¯ä»€éº¼

Career-Ops èƒ½å°‡ä»»ä½• AI ç¨‹å¼ç¢¼ CLI è½‰åŒ–ç‚ºå®Œæ•´çš„æ±‚è·æŒ‡æ®ä¸­å¿ƒã€‚ä¸å†éœ€è¦æ‰‹å‹•ç”¨è©¦ç®—è¡¨è¿½è¹¤æ‡‰å¾µç´€éŒ„ï¼Œè€Œæ˜¯ç²å¾—ä¸€å€‹ AI é©…å‹•çš„ç®¡é“ï¼Œèƒ½å¤ ï¼š

- **è©•ä¼°è·ç¼º** â€” çµæ§‹åŒ–çš„ A-F è©•åˆ†ç³»çµ±ï¼ˆ10 å€‹åŠ æ¬Šè©•ä¼°ç¶­åº¦ï¼‰
- **ç”Ÿæˆå®¢è£½åŒ– PDF** â€” é‡å°æ¯ä»½è·ç¼ºæè¿°é€²è¡Œ ATS æœ€ä½³åŒ–çš„å±¥æ­·
- **è‡ªå‹•æŽƒææ±‚è·å¹³å°**ï¼ˆGreenhouseã€Ashbyã€Leverã€ä¼æ¥­é é¢ï¼‰
- **æ‰¹æ¬¡è™•ç†** â€” é€éŽå­ä»£ç†ä¸¦è¡Œè©•ä¼° 10 ä»½ä»¥ä¸Šçš„è·ç¼º
- **é›†ä¸­ç®¡ç†ä¸€åˆ‡** â€” å–®ä¸€è³‡æ–™ä¾†æºï¼Œé™„å®Œæ•´æ€§æª¢æŸ¥

> **é‡è¦ï¼šé€™ä¸æ˜¯å»£æ’’ç¶²çš„å·¥å…·ã€‚** career-ops æ˜¯ä¸€å€‹ç¯©é¸å™¨ â€” å®ƒå¹«åŠ©ä½ å¾žæ•¸ç™¾ä»½è·ç¼ºä¸­æ‰¾å‡ºçœŸæ­£å€¼å¾—æŠ•å…¥çš„å°‘æ•¸æ©Ÿæœƒã€‚æœ¬ç³»çµ±å¼·çƒˆå»ºè­°ä¸è¦æ‡‰å¾µè©•åˆ†ä½Žæ–¼ 4.0/5 çš„è·ç¼ºã€‚ä½ çš„æ™‚é–“å¾ˆå¯¶è²´ï¼Œæ‹›å‹Ÿäººå“¡çš„æ™‚é–“ä¹Ÿæ˜¯ã€‚é€å‡ºå‰å‹™å¿…ä»”ç´°å¯©é–±ã€‚

career-ops å…·æœ‰ä»£ç†èƒ½åŠ›ï¼šGemini Agent é€éŽ Playwright ç€è¦½æ±‚è·é é¢ï¼Œè—‰ç”±æŽ¨ç†ä½ çš„å±¥æ­·èˆ‡è·ç¼ºæè¿°çš„å¥‘åˆåº¦ï¼ˆè€Œéžé—œéµå­—æ¯”å°ï¼‰é€²è¡Œè©•ä¼°ï¼Œä¸¦é‡å°æ¯ä»½è·ç¼ºèª¿æ•´ä½ çš„å±¥æ­·ã€‚

> **æ³¨æ„ï¼šæœ€åˆå¹¾æ¬¡è©•ä¼°çš„å“è³ªå¯èƒ½ä¸ç›¡ç†æƒ³ã€‚** å› ç‚ºç³»çµ±é‚„ä¸äº†è§£ä½ ã€‚è«‹æä¾›æ›´å¤šèƒŒæ™¯è³‡è¨Š â€” ä½ çš„å±¥æ­·ã€è·æ¶¯æ•…äº‹ã€æˆå°±ä½è­‰ã€å€‹äººåå¥½ã€ä½ çš„å°ˆé•·ä»¥åŠå¸Œæœ›é¿å…çš„äº‹æƒ…ã€‚ä½ é¤µçµ¦å®ƒçš„è³‡è¨Šè¶Šå¤šï¼Œå®ƒå°±è¶Šæº–ç¢ºã€‚æŠŠå®ƒç•¶ä½œæ‹›å‹Ÿæ–°äººçš„æ‹›å‹Ÿé¡§å•ï¼šç¬¬ä¸€é€±éœ€è¦å­¸ç¿’èªè­˜ä½ ï¼Œä¹‹å¾Œå°±æœƒæˆç‚ºä¸å¯æˆ–ç¼ºçš„å¤¥ä¼´ã€‚

é€™å€‹ç³»çµ±ç”±ä¸€ä½è¦ªèº«ä½¿ç”¨å®ƒè©•ä¼°è¶…éŽ 740 ä»½è·ç¼ºã€ç”Ÿæˆè¶…éŽ 100 ä»½å®¢è£½åŒ–å±¥æ­·ã€ä¸¦æˆåŠŸç²å¾— Head of Applied AI è·ä½çš„äººæ‰€æ‰“é€ ã€‚[é–±è®€å®Œæ•´æ¡ˆä¾‹ç ”ç©¶](https://santifer.io/career-ops-system)ã€‚

## åŠŸèƒ½ç‰¹è‰²

| åŠŸèƒ½ | èªªæ˜Ž |
|------|------|
| **è‡ªå‹•ç®¡é“** | è²¼ä¸Š URLï¼Œè‡ªå‹•å®Œæˆè©•ä¼° + PDF + è¿½è¹¤ç´€éŒ„ |
| **6 å€å¡Šè©•ä¼°** | è·ä½æ‘˜è¦ã€å±¥æ­·åŒ¹é…ã€è·ç´šç­–ç•¥ã€è–ªé…¬èª¿æŸ¥ã€å€‹äººåŒ–ã€é¢è©¦æº–å‚™ï¼ˆSTAR+Rï¼‰|
| **é¢è©¦æ•…äº‹åº«** | è·¨è©•ä¼°ç´¯ç© STAR+Reflection æ•…äº‹ â€” èƒ½å›žç­”ä»»ä½•è¡Œç‚ºé¢è©¦å•é¡Œçš„ 5-10 å€‹æ ¸å¿ƒæ•…äº‹ |
| **è–ªè³‡è«‡åˆ¤è…³æœ¬** | è–ªè³‡è«‡åˆ¤æ¡†æž¶ã€åœ°å€è–ªè³‡æŠ˜æ‰£åé§è©±è¡“ã€ç«¶çˆ­ Offer é‹ç”¨ç­–ç•¥ |
| **ATS PDF ç”Ÿæˆ** | æ³¨å…¥é—œéµå­—çš„å±¥æ­·ï¼ŒæŽ¡ç”¨ Space Grotesk + DM Sans è¨­è¨ˆ |
| **å¹³å°æŽƒæå™¨** | é è¨­è¶…éŽ 45 å®¶ä¼æ¥­ï¼ˆAnthropicã€OpenAIã€ElevenLabsã€Retoolã€n8n...ï¼‰+ è·¨ Ashbyã€Greenhouseã€Leverã€Wellfound çš„è‡ªè¨‚æŸ¥è©¢ |
| **æ‰¹æ¬¡è™•ç†** | ä½¿ç”¨ `npm run gemini-ops --` å·¥ä½œå™¨ä¸¦è¡Œè©•ä¼° |
| **å„€è¡¨æ¿ TUI** | åœ¨çµ‚ç«¯æ©Ÿ UI ä¸­ç€è¦½ã€ç¯©é¸åŠæŽ’åºä½ çš„æ±‚è·ç®¡é“ |
| **äººæ©Ÿå”ä½œ** | AI è² è²¬è©•ä¼°èˆ‡å»ºè­°ï¼Œä½ è² è²¬æ±ºç­–èˆ‡è¡Œå‹•ã€‚ç³»çµ±çµ•ä¸è‡ªå‹•é€å‡ºæ‡‰å¾µ â€” æœ€çµ‚æ±ºå®šæ°¸é åœ¨ä½ æ‰‹ä¸Š |
| **ç®¡é“å®Œæ•´æ€§** | è‡ªå‹•åˆä½µã€åŽ»é‡ã€ç‹€æ…‹æ­£è¦åŒ–ã€å¥åº·æª¢æŸ¥ |

## å¿«é€Ÿé–‹å§‹

```bash
# 1. è¤‡è£½ä¸¦å®‰è£
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # PDF ç”Ÿæˆæ‰€éœ€

# 2. æª¢æŸ¥è¨­å®š
npm run doctor                     # é©—è­‰æ‰€æœ‰å¿…è¦æ¢ä»¶

# 3. è¨­å®šæª”
cp config/profile.example.yml config/profile.yml  # å¡«å…¥ä½ çš„å€‹äººè³‡è¨Š
cp templates/portals.example.yml portals.yml       # è‡ªè¨‚ç›®æ¨™ä¼æ¥­

# 4. åŠ å…¥ä½ çš„å±¥æ­·
# åœ¨å°ˆæ¡ˆæ ¹ç›®éŒ„å»ºç«‹ cv.mdï¼Œä»¥ Markdown æ ¼å¼æ’°å¯«ä½ çš„å±¥æ­·

# 5. é€éŽ Claude å€‹äººåŒ–è¨­å®š
claude   # åœ¨æ­¤ç›®éŒ„é–‹å•Ÿ Gemini Agent

# ç„¶å¾Œè«‹ Claude å¹«ä½ èª¿æ•´ç³»çµ±ï¼š
# ã€ŒæŠŠè·ä½é¡žåž‹æ”¹æˆå¾Œç«¯å·¥ç¨‹å¸«ç›¸é—œè·ç¼ºã€
# ã€ŒæŠŠæ¨¡å¼ç¿»è­¯æˆç¹é«”ä¸­æ–‡ã€
# ã€ŒæŠŠé€™ 5 å®¶å…¬å¸åŠ å…¥ portals.ymlã€
# ã€Œç”¨æˆ‘è²¼çš„é€™ä»½å±¥æ­·æ›´æ–°æˆ‘çš„å€‹äººæª”æ¡ˆã€

# 6. é–‹å§‹ä½¿ç”¨
# è²¼ä¸Šè·ç¼º URL æˆ–åŸ·è¡Œ /career-ops
```

> **é€™å€‹ç³»çµ±è¨­è¨ˆä¸Šå°±æ˜¯è®“ Claude ä¾†å®¢è£½åŒ–çš„ã€‚** æ¨¡å¼ã€è·ä½é¡žåž‹ã€è©•åˆ†æ¬Šé‡ã€è«‡åˆ¤è…³æœ¬ â€” ç›´æŽ¥å‘Šè¨´ Claude è¦ä¿®æ”¹ä»€éº¼ï¼Œå®ƒå°±æœƒå‹•æ‰‹ã€‚Claude è®€å–çš„æ˜¯å®ƒè‡ªå·±ä½¿ç”¨çš„ç›¸åŒæª”æ¡ˆï¼Œæ‰€ä»¥å®ƒç¢ºåˆ‡çŸ¥é“è¦ç·¨è¼¯å“ªè£¡ã€‚

å®Œæ•´è¨­å®šæŒ‡å—è«‹åƒé–± [docs/SETUP.md](docs/SETUP.md)ã€‚

## ä½¿ç”¨æ–¹å¼

career-ops æ˜¯ä¸€å€‹å…·æœ‰å¤šç¨®æ¨¡å¼çš„å–®ä¸€æ–œç·šæŒ‡ä»¤ï¼š

```
/career-ops                â†’ é¡¯ç¤ºæ‰€æœ‰å¯ç”¨æŒ‡ä»¤
/career-ops {è²¼ä¸Šè·ç¼ºæè¿°}  â†’ å®Œæ•´è‡ªå‹•ç®¡é“ï¼ˆè©•ä¼° + PDF + è¿½è¹¤ï¼‰
/career-ops scan           â†’ æŽƒæå¹³å°å°‹æ‰¾æ–°è·ç¼º
/career-ops pdf            â†’ ç”Ÿæˆ ATS æœ€ä½³åŒ–å±¥æ­·
/career-ops batch          â†’ æ‰¹æ¬¡è©•ä¼°å¤šä»½è·ç¼º
/career-ops tracker        â†’ æŸ¥çœ‹æ‡‰å¾µç‹€æ…‹
/career-ops apply          â†’ AI å”åŠ©å¡«å¯«æ‡‰å¾µè¡¨å–®
/career-ops pipeline       â†’ è™•ç†å¾…è¾¦ URL
/career-ops contacto       â†’ LinkedIn å¤–å¯„è¨Šæ¯
/career-ops deep           â†’ æ·±åº¦å…¬å¸ç ”ç©¶
/career-ops training       â†’ è©•ä¼°èª²ç¨‹/è­‰ç…§
/career-ops project        â†’ è©•ä¼°ä½œå“é›†å°ˆæ¡ˆ
```

æˆ–è€…ç›´æŽ¥è²¼ä¸Šè·ç¼º URL æˆ–æè¿° â€” career-ops æœƒè‡ªå‹•åµæ¸¬ä¸¦åŸ·è¡Œå®Œæ•´ç®¡é“ã€‚

## é‹ä½œåŽŸç†

```
è²¼ä¸Šè·ç¼º URL æˆ–æè¿°
        â”‚
        â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  è·ä½é¡žåž‹        â”‚  åˆ†é¡žï¼šLLMOps / Agentic / PM / SA / FDE / Transformation
â”‚  åµæ¸¬            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  A-F è©•ä¼°        â”‚  åŒ¹é…åº¦ã€ç¼ºå£ã€è–ªé…¬èª¿æŸ¥ã€STAR æ•…äº‹
â”‚  ï¼ˆè®€å– cv.mdï¼‰  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
    â”Œâ”€â”€â”€â”€â”¼â”€â”€â”€â”€â”
    â–¼    â–¼    â–¼
  å ±å‘Š  PDF  è¿½è¹¤
  .md  .pdf  .tsv
```

## é è¨­æŽƒæå¹³å°

æŽƒæå™¨é è¨­äº†è¶…éŽ **45 å®¶ä¼æ¥­**åŠè·¨ä¸»è¦æ±‚è·æ¿çš„ **19 å€‹æœå°‹æŸ¥è©¢**ã€‚å°‡ `templates/portals.example.yml` è¤‡è£½ç‚º `portals.yml` ä¸¦è‡ªè¡Œæ–°å¢žï¼š

**AI å¯¦é©—å®¤ï¼š** Anthropicã€OpenAIã€Mistralã€Cohereã€LangChainã€Pinecone
**èªžéŸ³ AIï¼š** ElevenLabsã€PolyAIã€Parloaã€Hume AIã€Deepgramã€Vapiã€Bland AI
**AI å¹³å°ï¼š** Retoolã€Airtableã€Vercelã€Temporalã€Gleanã€Arize AI
**å®¢æœä¸­å¿ƒï¼š** Adaã€LivePersonã€Sierraã€Decagonã€Talkdeskã€Genesys
**ä¼æ¥­ç´šï¼š** Salesforceã€Twilioã€Gongã€Dialpad
**LLMOpsï¼š** Langfuseã€Weights & Biasesã€Lindyã€Cognigyã€Speechmatics
**è‡ªå‹•åŒ–ï¼š** n8nã€Zapierã€Make.com
**æ­æ´²ï¼š** Factorialã€Attioã€Tinybirdã€Clarity AIã€Travelperk

**æœå°‹çš„æ±‚è·å¹³å°ï¼š** Ashbyã€Greenhouseã€Leverã€Wellfoundã€Workableã€RemoteFront

## å„€è¡¨æ¿ TUI

å…§å»ºçš„çµ‚ç«¯æ©Ÿå„€è¡¨æ¿è®“ä½ ä»¥è¦–è¦ºåŒ–æ–¹å¼ç€è¦½æ±‚è·ç®¡é“ï¼š

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard --path ..
```

åŠŸèƒ½ï¼š6 å€‹ç¯©é¸åˆ†é ã€4 ç¨®æŽ’åºæ¨¡å¼ã€åˆ†çµ„/å¹³é‹ªæª¢è¦–ã€å»¶é²è¼‰å…¥é è¦½ã€å…§åµŒç‹€æ…‹ä¿®æ”¹ã€‚

## å°ˆæ¡ˆçµæ§‹

```
career-ops/
â”œâ”€â”€ CLAUDE.md                    # ä»£ç†æŒ‡ä»¤
â”œâ”€â”€ cv.md                        # ä½ çš„å±¥æ­·ï¼ˆéœ€è‡ªè¡Œå»ºç«‹ï¼‰
â”œâ”€â”€ article-digest.md            # ä½ çš„æˆå°±ä½è­‰ï¼ˆé¸å¡«ï¼‰
â”œâ”€â”€ config/
â”‚   â””â”€â”€ profile.example.yml      # å€‹äººæª”æ¡ˆç¯„æœ¬
â”œâ”€â”€ modes/                       # 14 å€‹æŠ€èƒ½æ¨¡å¼
â”‚   â”œâ”€â”€ _shared.md               # å…±ç”¨æƒ…å¢ƒï¼ˆåœ¨æ­¤è‡ªè¨‚ï¼‰
â”‚   â”œâ”€â”€ oferta.md                # å–®ä¸€è·ç¼ºè©•ä¼°
â”‚   â”œâ”€â”€ pdf.md                   # PDF ç”Ÿæˆ
â”‚   â”œâ”€â”€ scan.md                  # å¹³å°æŽƒæå™¨
â”‚   â”œâ”€â”€ batch.md                 # æ‰¹æ¬¡è™•ç†
â”‚   â””â”€â”€ ...
â”œâ”€â”€ templates/
â”‚   â”œâ”€â”€ cv-template.html         # ATS æœ€ä½³åŒ–å±¥æ­·ç¯„æœ¬
â”‚   â”œâ”€â”€ portals.example.yml      # æŽƒæå™¨è¨­å®šç¯„æœ¬
â”‚   â””â”€â”€ states.yml               # æ¨™æº–ç‹€æ…‹æ¸…å–®
â”œâ”€â”€ batch/
â”‚   â”œâ”€â”€ batch-prompt.md          # è‡ªåŒ…å«å·¥ä½œå™¨æç¤º
â”‚   â””â”€â”€ batch-runner.sh          # å”èª¿å™¨è…³æœ¬
â”œâ”€â”€ dashboard/                   # Go TUI ç®¡é“æª¢è¦–å™¨
â”œâ”€â”€ data/                        # ä½ çš„è¿½è¹¤è³‡æ–™ï¼ˆå·² gitignoreï¼‰
â”œâ”€â”€ reports/                     # è©•ä¼°å ±å‘Šï¼ˆå·² gitignoreï¼‰
â”œâ”€â”€ output/                      # ç”Ÿæˆçš„ PDFï¼ˆå·² gitignoreï¼‰
â”œâ”€â”€ fonts/                       # Space Grotesk + DM Sans
â”œâ”€â”€ docs/                        # è¨­å®šã€è‡ªè¨‚åŒ–ã€æž¶æ§‹èªªæ˜Ž
â””â”€â”€ examples/                    # ç¯„ä¾‹å±¥æ­·ã€å ±å‘Šã€æˆå°±ä½è­‰
```

## æŠ€è¡“å †ç–Š

![Gemini Agent](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Bubble Tea](https://img.shields.io/badge/Bubble_Tea-FF75B5?style=flat&logo=go&logoColor=white)

- **ä»£ç†**ï¼šGemini Agentï¼Œé™„è‡ªè¨‚æŠ€èƒ½èˆ‡æ¨¡å¼
- **PDF**ï¼šPlaywright/Puppeteer + HTML ç¯„æœ¬
- **æŽƒæå™¨**ï¼šPlaywright + Greenhouse API + WebSearch
- **å„€è¡¨æ¿**ï¼šGo + Bubble Tea + Lipglossï¼ˆCatppuccin Mocha ä¸»é¡Œï¼‰
- **è³‡æ–™**ï¼šMarkdown è¡¨æ ¼ + YAML è¨­å®š + TSV æ‰¹æ¬¡æª”æ¡ˆ

## åŒæ¨£é–‹æº

- **[cv-santiago](https://github.com/santifer/cv-santiago)** â€” ä½œè€…çš„ä½œå“é›†ç¶²ç«™ï¼ˆsantifer.ioï¼‰ï¼ŒåŒ…å« AI èŠå¤©æ©Ÿå™¨äººã€LLMOps å„€è¡¨æ¿èˆ‡æ¡ˆä¾‹ç ”ç©¶ã€‚å¦‚æžœä½ éœ€è¦ä¸€å€‹åœ¨æ±‚è·éŽç¨‹ä¸­å±•ç¤ºçš„ä½œå“é›†ï¼Œå¯ä»¥ fork å®ƒä¸¦æ”¹é€ æˆä½ è‡ªå·±çš„ã€‚

## é—œæ–¼ä½œè€…

æˆ‘æ˜¯ Santiago â€” Head of Applied AIï¼Œå‰å‰µæ¥­è€…ï¼ˆå‰µå»ºä¸¦å‡ºå”®äº†ä¸€å®¶è‡³ä»Šä»ä»¥æˆ‘åå­—ç‡Ÿé‹çš„å…¬å¸ï¼‰ã€‚æˆ‘æ‰“é€  career-ops æ˜¯ç‚ºäº†ç®¡ç†è‡ªå·±çš„æ±‚è·éŽç¨‹ï¼Œä¸¦æˆåŠŸç”¨å®ƒæ‰¾åˆ°äº†ç¾åœ¨é€™ä»½å·¥ä½œã€‚

å€‹äººä½œå“é›†èˆ‡å…¶ä»–é–‹æºå°ˆæ¡ˆ â†’ [santifer.io](https://santifer.io)

â˜• å¦‚æžœ career-ops å°ä½ çš„æ±‚è·æœ‰æ‰€å¹«åŠ©ï¼Œæ­¡è¿Ž[è«‹æˆ‘å–æ¯å’–å•¡](https://buymeacoffee.com/santifer)ã€‚

## Star æ­·å²

<a href="https://www.star-history.com/?repos=santifer%2Fcareer-ops&type=timeline&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
 </picture>
</a>

## å…è²¬è²æ˜Ž

**career-ops æ˜¯ä¸€å€‹æœ¬åœ°ç«¯é–‹æºå·¥å…· â€” ä¸¦éžè¨—ç®¡æœå‹™ã€‚** ä½¿ç”¨æœ¬è»Ÿé«”å³è¡¨ç¤ºä½ ç¢ºèªï¼š

1. **ä½ æŽŒæŽ§è‡ªå·±çš„è³‡æ–™ã€‚** ä½ çš„å±¥æ­·ã€è¯çµ¡è³‡è¨Šå’Œå€‹äººè³‡æ–™åƒ…å„²å­˜æ–¼ä½ çš„è£ç½®ä¸Šï¼Œä¸¦ç›´æŽ¥å‚³é€è‡³ä½ æ‰€é¸æ“‡çš„ AI æœå‹™ä¾›æ‡‰å•†ï¼ˆAnthropicã€OpenAI ç­‰ï¼‰ã€‚æˆ‘å€‘ä¸æœƒæ”¶é›†ã€å„²å­˜æˆ–å­˜å–ä½ çš„ä»»ä½•è³‡æ–™ã€‚
2. **ä½ æŽŒæŽ§ AIã€‚** é è¨­æç¤ºè©žå·²æŒ‡ç¤º AI ä¸è¦è‡ªå‹•é€å‡ºæ‡‰å¾µï¼Œä½† AI æ¨¡åž‹çš„è¡Œç‚ºå¯èƒ½ç„¡æ³•é æ¸¬ã€‚å¦‚æžœä½ ä¿®æ”¹æç¤ºè©žæˆ–ä½¿ç”¨ä¸åŒçš„æ¨¡åž‹ï¼Œé¢¨éšªç”±ä½ è‡ªè¡Œæ‰¿æ“”ã€‚**é€å‡ºå‰å‹™å¿…ç¢ºèª AI ç”Ÿæˆå…§å®¹çš„æ­£ç¢ºæ€§ã€‚**
3. **ä½ é ˆéµå®ˆç¬¬ä¸‰æ–¹æœå‹™æ¢æ¬¾ã€‚** ä½ å¿…é ˆä¾æ“šä½ æ‰€æ“ä½œçš„æ±‚è·å¹³å°ï¼ˆGreenhouseã€Leverã€Workdayã€LinkedIn ç­‰ï¼‰çš„æœå‹™æ¢æ¬¾ä½¿ç”¨æœ¬å·¥å…·ã€‚è«‹å‹¿ä½¿ç”¨æœ¬å·¥å…·å‘é›‡ä¸»ç™¼é€åžƒåœ¾è¨Šæ¯æˆ–å° ATS ç³»çµ±é€ æˆéŽå¤šè² æ“”ã€‚
4. **ä¸æä¾›ä»»ä½•ä¿è­‰ã€‚** è©•ä¼°çµæžœåƒ…ç‚ºå»ºè­°ï¼Œä¸¦éžäº‹å¯¦ã€‚AI æ¨¡åž‹å¯èƒ½æœƒç”¢ç”Ÿå¹»è¦ºï¼ŒéŒ¯èª¤æè¿°æŠ€èƒ½æˆ–ç¶“æ­·ã€‚ä½œè€…å°æ–¼ä»»ä½•å°±æ¥­çµæžœã€æ‡‰å¾µè¢«æ‹’ã€å¸³è™Ÿé™åˆ¶æˆ–å…¶ä»–å¾Œæžœæ¦‚ä¸è² è²¬ã€‚

è©³ç´°å…§å®¹è«‹åƒé–± [LEGAL_DISCLAIMER.md](LEGAL_DISCLAIMER.md)ã€‚æœ¬è»Ÿé«”ä¾ [MIT æŽˆæ¬Šæ¢æ¬¾](LICENSE) ä»¥ã€Œç¾ç‹€ã€æä¾›ï¼Œä¸é™„å¸¶ä»»ä½•å½¢å¼çš„ä¿è­‰ã€‚

## è²¢ç»è€…

<a href="https://github.com/santifer/career-ops/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=santifer/career-ops" />
</a>

ä½¿ç”¨ career-ops æ‰¾åˆ°å·¥ä½œäº†å—Žï¼Ÿ[åˆ†äº«ä½ çš„æ•…äº‹ï¼](https://github.com/santifer/career-ops/issues/new?template=i-got-hired.yml)

## æŽˆæ¬Šæ¢æ¬¾

MIT

## è¯çµ¡æˆ‘

[![Website](https://img.shields.io/badge/santifer.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://santifer.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santifer)
[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/santifer)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/8pRpHETxa4)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hi@santifer.io)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/santifer)

