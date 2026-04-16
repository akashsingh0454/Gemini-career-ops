> **Note: This is a Gemini-adapted fork.**
> The original "Career-Ops" system was created by **Santiago Fernández de Valderrama ([santifer.io](https://santifer.io))**. All credit for the framework, prompts, and pipeline design goes to him. You can find the original repository here: [santifer/career-ops](https://github.com/santifer/career-ops).
# Gemini Career-Ops

[English](README.md) | [EspaÃ±ol](README.es.md) | [PortuguÃªs (Brasil)](README.pt-BR.md) | [í•œêµ­ì–´](README.ko-KR.md) | [æ—¥æœ¬èªž](README.ja.md) | [Ð ÑƒÑÑÐºÐ¸Ð¹](README.ru.md) | [ç¹é«”ä¸­æ–‡](README.zh-TW.md)

<p align="center">
  <a href="https://x.com/santifer"><img src="docs/hero-banner.jpg" alt="Career-Ops -- ë©€í‹° ì—ì´ì „íŠ¸ ì·¨ì—… ì‹œìŠ¤í…œ" width="800"></a>
</p>

<p align="center">
  <em>ìˆ˜ê°œì›”ê°„ì˜ ë¹„íš¨ìœ¨ì ì¸ ìˆ˜ë™ ì§€ì› ëì—, ì§ì ‘ êµ¬ì§ íŒŒì´í”„ë¼ì¸ ì‹œìŠ¤í…œì„ ì„¤ê³„í–ˆìŠµë‹ˆë‹¤.</em><br>
  ê¸°ì—…ì€ AIë¡œ ì§€ì›ìžë¥¼ ê±¸ëŸ¬ëƒ…ë‹ˆë‹¤. <strong>ì €ëŠ” ì§€ì›ìžì—ê²Œ AIë¥¼ ì¤˜ì„œ <em>ê¸°ì—…ì„ ê³ ë¥´ê²Œ</em> í–ˆìŠµë‹ˆë‹¤.</strong><br>
  <em>ì´ì œ ì˜¤í”ˆì†ŒìŠ¤ìž…ë‹ˆë‹¤.</em>
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
</p>

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops ë°ëª¨" width="800">
</p>

<p align="center"><strong>740ê°œ ì´ìƒì˜ ì±„ìš© ê³µê³  í‰ê°€ Â· 100ê°œ ì´ìƒì˜ ë§žì¶¤í˜• ì´ë ¥ì„œ ìƒì„± Â· ê¿ˆì˜ ì§ìž¥ 1ê³³ í•©ê²©</strong></p>

<p align="center"><a href="https://discord.gg/8pRpHETxa4"><img src="https://img.shields.io/badge/ì»¤ë®¤ë‹ˆí‹°_ì°¸ì—¬í•˜ê¸°-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a></p>

## ì´ê²Œ ë­”ê°€ìš”

Career-OpsëŠ” AI ì½”ë”© CLIë¥¼ ì·¨ì—… í™œë™ ì „ì²´ë¥¼ ê´€ë¦¬í•˜ëŠ” ì»¤ë§¨ë“œ ì„¼í„°ë¡œ ë°”ê¿”ì¤ë‹ˆë‹¤. ìŠ¤í”„ë ˆë“œì‹œíŠ¸ì—ì„œ ìˆ˜ë™ìœ¼ë¡œ ì§€ì› í˜„í™©ì„ ê´€ë¦¬í•˜ëŠ” ëŒ€ì‹ , AI íŒŒì´í”„ë¼ì¸ì´ ì•Œì•„ì„œ ì²˜ë¦¬í•©ë‹ˆë‹¤:

- **ê³µê³  í‰ê°€** -- êµ¬ì¡°í™”ëœ A-F ìŠ¤ì½”ì–´ë§ (10ê°œ ê°€ì¤‘ í‰ê°€ í•­ëª©)
- **ë§žì¶¤í˜• PDF ìƒì„±** -- JDë³„ë¡œ ìµœì í™”ëœ ATS ì´ë ¥ì„œ
- **í¬í„¸ ìžë™ ìŠ¤ìº”** -- Greenhouse, Ashby, Lever, ê¸°ì—… ì±„ìš© íŽ˜ì´ì§€
- **ì¼ê´„ ì²˜ë¦¬** -- ì„œë¸Œ ì—ì´ì „íŠ¸ë¡œ 10ê°œ ì´ìƒì˜ ê³µê³ ë¥¼ ë³‘ë ¬ í‰ê°€
- **í†µí•© ì¶”ì ** -- ë¬´ê²°ì„± ê²€ì‚¬ê°€ í¬í•¨ëœ ë‹¨ì¼ ë°ì´í„° ì†ŒìŠ¤

> **ì¤‘ìš”: ì´ ë„êµ¬ëŠ” ë¬´ì°¨ë³„ ì§€ì› ë„êµ¬ê°€ ì•„ë‹™ë‹ˆë‹¤.** Career-opsëŠ” í•„í„°ìž…ë‹ˆë‹¤ -- ìˆ˜ë°± ê°œì˜ ê³µê³  ì¤‘ ë‹¹ì‹ ì˜ ì‹œê°„ì„ íˆ¬ìží•  ê°€ì¹˜ê°€ ìžˆëŠ” ì†Œìˆ˜ì˜ ê³µê³ ë¥¼ ì°¾ì•„ì¤ë‹ˆë‹¤. 4.0/5 ë¯¸ë§Œì˜ ê³µê³ ì—ëŠ” ì§€ì›í•˜ì§€ ì•ŠëŠ” ê²ƒì„ ê°•ë ¥ížˆ ê¶Œìž¥í•©ë‹ˆë‹¤. ë‹¹ì‹ ì˜ ì‹œê°„ë„, ì±„ìš© ë‹´ë‹¹ìžì˜ ì‹œê°„ë„ ì†Œì¤‘í•©ë‹ˆë‹¤. ì œì¶œ ì „ì— í•­ìƒ ì§ì ‘ ê²€í† í•˜ì„¸ìš”.

Career-opsëŠ” ì—ì´ì „íŠ¸ ê¸°ë°˜ìœ¼ë¡œ ìž‘ë™í•©ë‹ˆë‹¤: Gemini Agentê°€ Playwrightë¡œ ì±„ìš© íŽ˜ì´ì§€ë¥¼ íƒìƒ‰í•˜ê³ , í‚¤ì›Œë“œ ë§¤ì¹­ì´ ì•„ë‹Œ ì´ë ¥ì„œì™€ JDë¥¼ ë¹„êµ ë¶„ì„í•˜ì—¬ ì í•©ë„ë¥¼ íŒë‹¨í•˜ê³ , ê³µê³ ë³„ë¡œ ì´ë ¥ì„œë¥¼ ë§žì¶¤ ìƒì„±í•©ë‹ˆë‹¤.

> **ì°¸ê³ : ì²˜ìŒ ëª‡ ë²ˆì˜ í‰ê°€ëŠ” ì •í™•í•˜ì§€ ì•Šì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.** ì‹œìŠ¤í…œì´ ì•„ì§ ë‹¹ì‹ ì„ ëª¨ë¥´ê¸° ë•Œë¬¸ìž…ë‹ˆë‹¤. ì´ë ¥ì„œ, ì»¤ë¦¬ì–´ ìŠ¤í† ë¦¬, ì£¼ìš” ì„±ê³¼, ì„ í˜¸ë„, ìž˜í•˜ëŠ” ê²ƒ, í”¼í•˜ê³  ì‹¶ì€ ê²ƒ ë“± ë§¥ë½ì„ ì•Œë ¤ì£¼ì„¸ìš”. ì •ë³´ë¥¼ ì¤„ìˆ˜ë¡ ë” ì •í™•í•´ì§‘ë‹ˆë‹¤. ìƒˆë¡œìš´ ë¦¬í¬ë£¨í„°ë¥¼ ì˜¨ë³´ë”©í•œë‹¤ê³  ìƒê°í•˜ì„¸ìš”: ì²« ì£¼ëŠ” ë‹¹ì‹ ì„ íŒŒì•…í•˜ëŠ” ì‹œê°„ì´ê³ , ê·¸ ì´í›„ë¶€í„° ì§„ê°€ë¥¼ ë°œíœ˜í•©ë‹ˆë‹¤.

740ê°œ ì´ìƒì˜ ì±„ìš© ê³µê³ ë¥¼ í‰ê°€í•˜ê³ , 100ê°œ ì´ìƒì˜ ë§žì¶¤ ì´ë ¥ì„œë¥¼ ìƒì„±í•˜ì—¬, Head of Applied AI í¬ì§€ì…˜ì— í•©ê²©í•œ ì‚¬ëžŒì´ ì§ì ‘ ë§Œë“¤ì—ˆìŠµë‹ˆë‹¤. [ì „ì²´ ì¼€ì´ìŠ¤ ìŠ¤í„°ë”” ì½ê¸°](https://santifer.io/career-ops-system).

## ì£¼ìš” ê¸°ëŠ¥

| ê¸°ëŠ¥ | ì„¤ëª… |
|------|------|
| **ìžë™ íŒŒì´í”„ë¼ì¸** | URL ìž…ë ¥ë§Œìœ¼ë¡œ [í‰ê°€ â†’ PDF ìƒì„± â†’ íŠ¸ëž˜ì»¤ ë“±ë¡] ì „ ê³¼ì • ìžë™í™” |
| **6ë‹¨ê³„ ì •ë°€ í‰ê°€** | ì§ë¬´ ìš”ì•½, ì´ë ¥ì„œ ë§¤ì¹˜, ë ˆë²¨ë§ ì „ëžµ, ì—°ë´‰ ë¦¬ì„œì¹˜, ê°œì¸í™”, ë©´ì ‘ ì¤€ë¹„ (STAR+R) |
| **ë©´ì ‘ ìŠ¤í† ë¦¬ ë±…í¬** | í‰ê°€ ë°ì´í„° ê¸°ë°˜ STAR+Reflection ìŠ¤í† ë¦¬ ì¶•ì  -- ì–´ë–¤ í–‰ë™ ë©´ì ‘ ì§ˆë¬¸ë„ ì»¤ë²„í•˜ëŠ” 5~10ê°œì˜ ë§ˆìŠ¤í„° ë‹µë³€ ìƒì„± |
| **í˜‘ìƒ ì „ëžµ ìŠ¤í¬ë¦½íŠ¸** | ì—°ë´‰ í˜‘ìƒ í”„ë ˆìž„ì›Œí¬, ê±°ì£¼ì§€ ê¸°ë°˜ ì—°ë´‰ ì°¨ë“±(Geographic Discount) ëŒ€ì‘ ë…¼ë¦¬, ê²½ìŸ ì˜¤í¼ í™œìš© ì „ëžµ |
| **ATS PDF ìƒì„±** | Space Grotesk + DM Sans ë””ìžì¸, í‚¤ì›Œë“œê°€ ì£¼ìž…ëœ ì´ë ¥ì„œ |
| **í¬í„¸ ìŠ¤ìºë„ˆ** | 45ê°œ ì´ìƒì˜ ê¸°ì—… ì‚¬ì „ ì„¤ì • (Anthropic, OpenAI, ElevenLabs, Retool, n8n ë“±) + Ashby, Greenhouse, Lever, Wellfound ì „ë°˜ì˜ ì»¤ìŠ¤í…€ ê²€ìƒ‰ |
| **ì¼ê´„ ì²˜ë¦¬** | `npm run gemini-ops --` ì›Œì»¤ë¡œ ë³‘ë ¬ í‰ê°€ |
| **Dashboard TUI** | í„°ë¯¸ë„ UIì—ì„œ íŒŒì´í”„ë¼ì¸ íƒìƒ‰, í•„í„°ë§, ì •ë ¬ |
| **Human-in-the-Loop** | AIê°€ í‰ê°€í•˜ê³  ì¶”ì²œí•˜ë©´, ë‹¹ì‹ ì´ íŒë‹¨í•˜ê³  í–‰ë™í•©ë‹ˆë‹¤. ì‹œìŠ¤í…œì€ ì ˆëŒ€ ì§€ì›ì„œë¥¼ ìžë™ ì œì¶œí•˜ì§€ ì•ŠìŠµë‹ˆë‹¤ -- ìµœì¢… ê²°ì •ì€ í•­ìƒ ë‹¹ì‹ ì˜ ëª« |
| **íŒŒì´í”„ë¼ì¸ ë¬´ê²°ì„±** | ìžë™ ë³‘í•©, ì¤‘ë³µ ì œê±°, ìƒíƒœ ì •ê·œí™”, í—¬ìŠ¤ ì²´í¬ |

## ë¹ ë¥¸ ì‹œìž‘

```bash
# 1. í´ë¡  ë° ì„¤ì¹˜
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # PDF ë Œë”ë§ì„ ìœ„í•œ ë¸Œë¼ìš°ì € ì—”ì§„ ì„¤ì¹˜

# 2. ì„¤ì • í™•ì¸
npm run doctor                     # ëª¨ë“  ì‚¬ì „ ìš”êµ¬ì‚¬í•­ ë° í™˜ê²½ ë³€ìˆ˜ ê²€ì¦

# 3. ì„¤ì •
cp config/profile.example.yml config/profile.yml  # ì‚¬ìš©ìž ì •ë³´ë¡œ ìˆ˜ì •
cp templates/portals.example.yml portals.yml       # ê¸°ì—… ëª©ë¡ ì»¤ìŠ¤í„°ë§ˆì´ì¦ˆ

# 4. ì´ë ¥ì„œ ì¶”ê°€
# í”„ë¡œì íŠ¸ ë£¨íŠ¸ì— 'cv.md' íŒŒì¼ì„ ìƒì„±í•˜ê³  ë§ˆí¬ë‹¤ìš´ìœ¼ë¡œ ì´ë ¥ì„œë¥¼ ìž‘ì„±í•˜ì„¸ìš”.

# 5. Claudeë¡œ ê°œì¸í™”
claude   # ì´ ë””ë ‰í† ë¦¬ì—ì„œ Gemini Agent ì‹¤í–‰

# Claudeì—ê²Œ ì‹œìŠ¤í…œì„ ë§žì¶¤ ì„¤ì •í•´ë‹¬ë¼ê³  ìš”ì²­:
# "Change the archetypes to backend engineering roles"
# "Translate the modes to English"
# "Add these 5 companies to portals.yml"
# "Update my profile with this CV I'm pasting"

# 6. ì‚¬ìš© ì‹œìž‘
# ì±„ìš© ê³µê³  URLì„ ë¶™ì—¬ë„£ê±°ë‚˜ /career-ops ì‹¤í–‰
```

> **ì´ ì‹œìŠ¤í…œì€ Claudeê°€ ì§ì ‘ ì»¤ìŠ¤í„°ë§ˆì´ì¦ˆí•˜ë„ë¡ ì„¤ê³„ë˜ì—ˆìŠµë‹ˆë‹¤.** ëª¨ë“œ, ì•„í‚¤íƒ€ìž…, ìŠ¤ì½”ì–´ë§ ê°€ì¤‘ì¹˜, í˜‘ìƒ ìŠ¤í¬ë¦½íŠ¸ -- ê·¸ëƒ¥ ìš”ì²­í•˜ì„¸ìš”. Claudeê°€ ì‚¬ìš©í•˜ëŠ” íŒŒì¼ì„ ì§ì ‘ ì½ê¸° ë•Œë¬¸ì—, ë¬´ì—‡ì„ ìˆ˜ì •í•´ì•¼ í•˜ëŠ”ì§€ ì •í™•ížˆ ì•Œê³  ìžˆìŠµë‹ˆë‹¤.

ìžì„¸í•œ ì„¤ì • ê°€ì´ë“œëŠ” [docs/SETUP.md](docs/SETUP.md)ë¥¼ ì°¸ê³ í•˜ì„¸ìš”.

## ì‚¬ìš©ë²•

Career-opsëŠ” ë‹¤ì–‘í•œ ëª¨ë“œë¥¼ ê°€ì§„ í•˜ë‚˜ì˜ ìŠ¬ëž˜ì‹œ ì»¤ë§¨ë“œìž…ë‹ˆë‹¤:

```
/career-ops                â†’ ì‚¬ìš© ê°€ëŠ¥í•œ ëª¨ë“  ëª…ë ¹ì–´ í‘œì‹œ
/career-ops {JD ë¶™ì—¬ë„£ê¸°}  â†’ ì „ì²´ ìžë™ íŒŒì´í”„ë¼ì¸ (í‰ê°€ + PDF + íŠ¸ëž˜ì»¤)
/career-ops scan           â†’ í¬í„¸ì—ì„œ ìƒˆ ê³µê³  ìŠ¤ìº”
/career-ops pdf            â†’ ATS ìµœì í™” ì´ë ¥ì„œ ìƒì„±
/career-ops batch          â†’ ì—¬ëŸ¬ ê³µê³  ì¼ê´„ í‰ê°€
/career-ops tracker        â†’ ì§€ì› í˜„í™© í™•ì¸
/career-ops apply          â†’ AIë¡œ ì§€ì›ì„œ ì–‘ì‹ ìž‘ì„±
/career-ops pipeline       â†’ ëŒ€ê¸° ì¤‘ì¸ URL ì²˜ë¦¬
/career-ops contacto       â†’ LinkedIn ì•„ì›ƒë¦¬ì¹˜ ë©”ì‹œì§€
/career-ops deep           â†’ ê¸°ì—… ì‹¬ì¸µ ë¦¬ì„œì¹˜
/career-ops training       â†’ êµìœ¡ ë° ìžê²©ì¦ ê°€ì¹˜ í‰ê°€
/career-ops project        â†’ í¬íŠ¸í´ë¦¬ì˜¤ í”„ë¡œì íŠ¸ í‰ê°€
```

ì±„ìš© ê³µê³  URLì´ë‚˜ ì„¤ëª…ì„ ë°”ë¡œ ë¶™ì—¬ë„£ì–´ë„ ë©ë‹ˆë‹¤ -- career-opsê°€ ìžë™ìœ¼ë¡œ ê°ì§€í•˜ì—¬ ì „ì²´ íŒŒì´í”„ë¼ì¸ì„ ì‹¤í–‰í•©ë‹ˆë‹¤.

## ìž‘ë™ ì›ë¦¬

```
ì±„ìš© ê³µê³  URL ë˜ëŠ” ì„¤ëª…ì„ ë¶™ì—¬ë„£ê¸°
          â”‚
          â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  ì•„í‚¤íƒ€ìž… ê°ì§€           â”‚  ì§ë¬´ íŽ˜ë¥´ì†Œë‚˜(Archetype) ë¶„ë¥˜: LLMOps / Agentic / PM / SA / FDE / Transformation
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  A-F í‰ê°€               â”‚  ì´ë ¥ì„œ ê¸°ë°˜ ë§¤ì¹­ë„ ë° ê°­ ë¶„ì„, ì—°ë´‰ ë¦¬ì„œì¹˜, STAR ìŠ¤í† ë¦¬
â”‚  (cv.md ì°¸ì¡°)           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
      â”Œâ”€â”€â”€â”€â”¼â”€â”€â”€â”€â”
      â–¼    â–¼    â–¼
   Report  PDF  Tracker
    .md   .pdf   .tsv
```

## ì‚¬ì „ ì„¤ì •ëœ í¬í„¸

ìŠ¤ìºë„ˆì—ëŠ” **45ê°œ ì´ìƒì˜ ê¸°ì—…**ê³¼ ì£¼ìš” ì±„ìš© ë³´ë“œì— ê±¸ì¹œ **19ê°œì˜ ê²€ìƒ‰ ì¿¼ë¦¬**ê°€ ì‚¬ì „ ì„¤ì •ë˜ì–´ ìžˆìŠµë‹ˆë‹¤. `templates/portals.example.yml`ì„ `portals.yml`ë¡œ ë³µì‚¬í•˜ê³  ì›í•˜ëŠ” ê¸°ì—…ì„ ì¶”ê°€í•˜ì„¸ìš”:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
**Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
**AI Platforms:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
**Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
**Enterprise:** Salesforce, Twilio, Gong, Dialpad
**LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
**Automation:** n8n, Zapier, Make.com
**European:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**ê²€ìƒ‰ ëŒ€ìƒ ì±„ìš© ë³´ë“œ:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront

## Dashboard TUI

ë‚´ìž¥ í„°ë¯¸ë„ ëŒ€ì‹œë³´ë“œë¡œ íŒŒì´í”„ë¼ì¸ì„ ì‹œê°ì ìœ¼ë¡œ íƒìƒ‰í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤:

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard --path ..
```

ê¸°ëŠ¥: 6ê°œì˜ í•„í„° íƒ­, 4ê°€ì§€ ì •ë ¬ ëª¨ë“œ, ê·¸ë£¹/í”Œëž« ë·°, ì§€ì—° ë¡œë”© ë¯¸ë¦¬ë³´ê¸°, ì¸ë¼ì¸ ìƒíƒœ ë³€ê²½.

## í”„ë¡œì íŠ¸ êµ¬ì¡°

```
career-ops/
â”œâ”€â”€ CLAUDE.md                    # ì—ì´ì „íŠ¸ ì§€ì‹œì‚¬í•­
â”œâ”€â”€ cv.md                        # ë‚´ ì´ë ¥ì„œ (ì§ì ‘ ìƒì„±)
â”œâ”€â”€ article-digest.md            # ì£¼ìš” ì„±ê³¼ ì •ë¦¬ (ì„ íƒ)
â”œâ”€â”€ config/
â”‚   â””â”€â”€ profile.example.yml      # í”„ë¡œí•„ í…œí”Œë¦¿
â”œâ”€â”€ modes/                       # 14ê°œ ìŠ¤í‚¬ ëª¨ë“œ
â”‚   â”œâ”€â”€ _shared.md               # ê³µìœ  ì»¨í…ìŠ¤íŠ¸ (ì»¤ìŠ¤í„°ë§ˆì´ì¦ˆ ê°€ëŠ¥)
â”‚   â”œâ”€â”€ oferta.md                # ê°œë³„ í‰ê°€
â”‚   â”œâ”€â”€ pdf.md                   # PDF ìƒì„±
â”‚   â”œâ”€â”€ scan.md                  # í¬í„¸ ìŠ¤ìºë„ˆ
â”‚   â”œâ”€â”€ batch.md                 # ì¼ê´„ ì²˜ë¦¬
â”‚   â””â”€â”€ ...
â”œâ”€â”€ templates/
â”‚   â”œâ”€â”€ cv-template.html         # ATS ìµœì í™” ì´ë ¥ì„œ í…œí”Œë¦¿
â”‚   â”œâ”€â”€ portals.example.yml      # ìŠ¤ìºë„ˆ ì„¤ì • í…œí”Œë¦¿
â”‚   â””â”€â”€ states.yml               # ì •ê·œ ìƒíƒœê°’
â”œâ”€â”€ batch/
â”‚   â”œâ”€â”€ batch-prompt.md          # ë…ë¦½í˜• ì›Œì»¤ í”„ë¡¬í”„íŠ¸(Self-contained)
â”‚   â””â”€â”€ batch-runner.sh          # ì˜¤ì¼€ìŠ¤íŠ¸ë ˆì´í„° ìŠ¤í¬ë¦½íŠ¸
â”œâ”€â”€ dashboard/                   # Go TUI íŒŒì´í”„ë¼ì¸ ë·°ì–´
â”œâ”€â”€ data/                        # íŠ¸ëž˜í‚¹ ë°ì´í„° (gitignored)
â”œâ”€â”€ reports/                     # í‰ê°€ ë¦¬í¬íŠ¸ (gitignored)
â”œâ”€â”€ output/                      # ìƒì„±ëœ PDF (gitignored)
â”œâ”€â”€ fonts/                       # Space Grotesk + DM Sans
â”œâ”€â”€ docs/                        # ì„¤ì •, ì»¤ìŠ¤í„°ë§ˆì´ì¦ˆ, ì•„í‚¤í…ì²˜
â””â”€â”€ examples/                    # ì˜ˆì‹œ ì´ë ¥ì„œ, ë¦¬í¬íŠ¸, ì„±ê³¼
```

## Tech Stack

![Gemini Agent](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Bubble Tea](https://img.shields.io/badge/Bubble_Tea-FF75B5?style=flat&logo=go&logoColor=white)

- **ì—ì´ì „íŠ¸**: Gemini Agent + ì»¤ìŠ¤í…€ ìŠ¤í‚¬ ë° ëª¨ë“œ
- **PDF**: Playwright/Puppeteer + HTML í…œí”Œë¦¿
- **ìŠ¤ìºë„ˆ**: Playwright + Greenhouse API + WebSearch
- **ëŒ€ì‹œë³´ë“œ**: Go + Bubble Tea + Lipgloss (Catppuccin Mocha í…Œë§ˆ)
- **ë°ì´í„°**: Markdown í…Œì´ë¸” + YAML ì„¤ì • + TSV ë°°ì¹˜ íŒŒì¼

## ê´€ë ¨ ì˜¤í”ˆì†ŒìŠ¤ í”„ë¡œì íŠ¸

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- í¬íŠ¸í´ë¦¬ì˜¤ ì›¹ì‚¬ì´íŠ¸ (santifer.io). AI ì±—ë´‡, LLMOps ëŒ€ì‹œë³´ë“œ, ì¼€ì´ìŠ¤ ìŠ¤í„°ë””ê°€ í¬í•¨ë˜ì–´ ìžˆìŠµë‹ˆë‹¤. ì·¨ì—… í™œë™ê³¼ í•¨ê»˜ í¬íŠ¸í´ë¦¬ì˜¤ê°€ í•„ìš”í•˜ë‹¤ë©´, í¬í¬í•´ì„œ ìžìœ ë¡­ê²Œ í™œìš©í•˜ì„¸ìš”.

## ì €ìž ì†Œê°œ

Santiagoìž…ë‹ˆë‹¤ -- Head of Applied AI, ì „ì§ ì°½ì—…ìž (ì§ì ‘ ì‚¬ì—…ì„ ë§Œë“¤ê³  ë§¤ê°í–ˆìœ¼ë©°, ì•„ì§ë„ ì œ ì´ë¦„ìœ¼ë¡œ ìš´ì˜ë˜ê³  ìžˆìŠµë‹ˆë‹¤). ì œ ì·¨ì—… í™œë™ì„ ê´€ë¦¬í•˜ê¸° ìœ„í•´ career-opsë¥¼ ë§Œë“¤ì—ˆìŠµë‹ˆë‹¤. íš¨ê³¼ê°€ ìžˆì—ˆìŠµë‹ˆë‹¤: ì´ ì‹œìŠ¤í…œìœ¼ë¡œ í˜„ìž¬ í¬ì§€ì…˜ì— í•©ê²©í–ˆìŠµë‹ˆë‹¤.

í¬íŠ¸í´ë¦¬ì˜¤ ë° ê¸°íƒ€ ì˜¤í”ˆì†ŒìŠ¤ í”„ë¡œì íŠ¸ â†’ [santifer.io](https://santifer.io)

â˜• career-opsê°€ ì·¨ì—… í™œë™ì— ë„ì›€ì´ ë˜ì—ˆë‹¤ë©´ [ì»¤í”¼ í•œ ìž” ì‚¬ì£¼ê¸°](https://buymeacoffee.com/santifer).

## Star History

<a href="https://www.star-history.com/?repos=santifer%2Fcareer-ops&type=timeline&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
   <img alt="Star History ì°¨íŠ¸" src="https://api.star-history.com/chart?repos=santifer/career-ops&type=timeline&legend=top-left" />
 </picture>
</a>

## ë©´ì±… ì¡°í•­

**career-opsëŠ” ë¡œì»¬ ì˜¤í”ˆì†ŒìŠ¤ ë„êµ¬ì´ë©°, ë³„ë„ì˜ í˜¸ìŠ¤íŒ… ì„œë¹„ìŠ¤ê°€ ì•„ë‹™ë‹ˆë‹¤.** ì´ ì†Œí”„íŠ¸ì›¨ì–´ë¥¼ ì‚¬ìš©í•¨ìœ¼ë¡œì¨ ë‹¤ìŒ ì‚¬í•­ì— ë™ì˜í•˜ëŠ” ê²ƒìœ¼ë¡œ ê°„ì£¼ë©ë‹ˆë‹¤:

1. **ë°ì´í„° ì£¼ê¶Œ:** ëª¨ë“  ë°ì´í„°ëŠ” ì‚¬ìš©ìžì˜ ë¡œì»¬ ë¨¸ì‹ ì— ë¨¸ë¬¼ë©°, ì„ íƒí•œ AI í”„ë¡œë°”ì´ë”ì™€ ì§ì ‘ í†µì‹ í•©ë‹ˆë‹¤. ì´ë ¥ì„œ, ì—°ë½ì²˜, ê°œì¸ì •ë³´ëŠ” ì‚¬ìš©ìžì˜ ì»´í“¨í„°ì— ì €ìž¥ë˜ë©°, ì„ íƒí•œ AI ì œê³µì‚¬ (Anthropic, OpenAI ë“±)ì—ê²Œë§Œ ì§ì ‘ ì „ì†¡ë©ë‹ˆë‹¤. ì €í¬ëŠ” ì–´ë–¤ ë°ì´í„°ë„ ìˆ˜ì§‘, ì €ìž¥, ì ‘ê·¼í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.
2. **AI ì œì–´ëŠ” ì‚¬ìš©ìž ì±…ìž„ìž…ë‹ˆë‹¤.** ê¸°ë³¸ í”„ë¡¬í”„íŠ¸ëŠ” AIê°€ ì§€ì›ì„œë¥¼ ìžë™ ì œì¶œí•˜ì§€ ì•Šë„ë¡ ì„¤ì •ë˜ì–´ ìžˆìœ¼ë‚˜, AI ëª¨ë¸ì€ ì˜ˆì¸¡ ë¶ˆê°€ëŠ¥í•˜ê²Œ ë™ìž‘í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. í”„ë¡¬í”„íŠ¸ë¥¼ ìˆ˜ì •í•˜ê±°ë‚˜ ë‹¤ë¥¸ ëª¨ë¸ì„ ì‚¬ìš©í•˜ëŠ” ê²½ìš° ì‚¬ìš©ìžì˜ ì±…ìž„ìž…ë‹ˆë‹¤. **ì œì¶œ ì „ì— í•­ìƒ AIê°€ ìƒì„±í•œ ì½˜í…ì¸ ì˜ ì •í™•ì„±ì„ í™•ì¸í•˜ì„¸ìš”.**
3. **ì•½ê´€ ì¤€ìˆ˜:** ì±„ìš© í¬í„¸(Greenhouse, Lever, Workday, LinkedIn ë“±)ì˜ ì´ìš©ì•½ê´€ì„ ë°˜ë“œì‹œ ì¤€ìˆ˜í•˜ì„¸ìš”. ë³¸ ë„êµ¬ë¥¼ ìŠ¤íŒ¸ ì „ì†¡ì´ë‚˜ ATS ì‹œìŠ¤í…œ ê³¼ë¶€í•˜ ìš©ë„ë¡œ ì‚¬ìš©í•˜ëŠ” ê²ƒì„ ê¸ˆì§€í•©ë‹ˆë‹¤.
4. **ë³´ì¦ì€ ì—†ìŠµë‹ˆë‹¤.** í‰ê°€ ê²°ê³¼ëŠ” ì¶”ì²œì´ì§€ ì‚¬ì‹¤ì´ ì•„ë‹™ë‹ˆë‹¤. AI ëª¨ë¸ì€ ìŠ¤í‚¬ì´ë‚˜ ê²½í—˜ì„ í—ˆìœ„ë¡œ ìƒì„±í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì €ìžëŠ” ì±„ìš© ê²°ê³¼, ê±°ì ˆëœ ì§€ì›, ê³„ì • ì œí•œ ë˜ëŠ” ê¸°íƒ€ ê²°ê³¼ì— ëŒ€í•´ ì±…ìž„ì§€ì§€ ì•ŠìŠµë‹ˆë‹¤.

ìžì„¸í•œ ë‚´ìš©ì€ [LEGAL_DISCLAIMER.md](LEGAL_DISCLAIMER.md)ë¥¼ ì°¸ê³ í•˜ì„¸ìš”. ì´ ì†Œí”„íŠ¸ì›¨ì–´ëŠ” [MIT ë¼ì´ì„ ìŠ¤](LICENSE)ì— ë”°ë¼ ì–´ë– í•œ ë³´ì¦ ì—†ì´ "ìžˆëŠ” ê·¸ëŒ€ë¡œ" ì œê³µë©ë‹ˆë‹¤.

## ë¼ì´ì„ ìŠ¤

MIT

## ì†Œí†µí•˜ê¸°

[![Website](https://img.shields.io/badge/santifer.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://santifer.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/santifer)
[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/santifer)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/8pRpHETxa4)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hi@santifer.io)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/santifer)

