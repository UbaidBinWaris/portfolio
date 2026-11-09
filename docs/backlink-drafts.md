# Backlink drafts (copy and submit by hand)

Companion to [backlinks.md](backlinks.md). Numbers below were checked against the
proxy_browser and qa_STT READMEs on 9 Nov 2026.

**Community posts (sections 3 and 4) are fact outlines.** HN, Reddit and the n8n forum ban
AI-written posts, so rewrite those in your own words. Directory and list entries
(sections 1 and 2) are short factual lines and can be used as written.

---

## 0. Brand kit

| Field | Value |
|---|---|
| Name | Ubaid Bin Waris |
| Website | https://ubaidbinwaris.com |
| Email | ubaidwaris34@gmail.com |
| Location | Islamabad, Pakistan (UTC+5), remote worldwide |

**Headline (75 characters)**
> Full-stack and AI engineer (Next.js, Node.js, voice AI) · ubaidbinwaris.com

**Bio (157 characters)**
> Full-stack and AI engineer in Islamabad, working remotely. I build Next.js apps, Node.js backends, voice AI and automation. Case studies at ubaidbinwaris.com

**About (542 characters)**
> I'm Ubaid Bin Waris, a full-stack and AI engineer in Islamabad, Pakistan, working remotely with clients worldwide. I build web products with Next.js, React and TypeScript, and backends with Node.js, NestJS, Spring Boot and FastAPI on PostgreSQL. On the AI side I ship voice agents, LLM and RAG features, and n8n automations, deployed on Linux, Docker and AWS. Recent work includes an AI voice receptionist platform and a local GPU sales-call transcription system. Case studies, write-ups and contact details are on my site, ubaidbinwaris.com.

Anchor text: use your name or the project name. Never a keyword like "best developer Pakistan".

---

## 1. Proxy QA Browser: lists and directories

Lead with QA on your own forms, not with proxies.

### Glama (do first)
Submit `https://github.com/UbaidBinWaris/proxy_browser` at glama.ai/mcp/servers. Glama
needs a Dockerfile; this one follows `docs/MCP-SERVER.md` (the server exits unless
`QA_MCP_ALLOWED_ORIGINS` is set, and the image's default entrypoint is the CLI):
```dockerfile
FROM ghcr.io/ubaidbinwaris/proxy-qa-runner:2.1.0
ENV QA_MCP_ALLOWED_ORIGINS=https://example.com
ENTRYPOINT ["node", "/opt/proxy-qa-runner/out/main/qa-mcp.js"]
```
Description: `Run geo- and device-aware QA checks with Chromium, Firefox and WebKit on origins you allowlist. Stdio only, local, Apache-2.0.`

### awesome-mcp-servers #16177 (after Glama)
Edit your existing line under "Browser Automation". Use the Glama path Glama assigns:
```
- [UbaidBinWaris/proxy_browser](https://github.com/UbaidBinWaris/proxy_browser) [![UbaidBinWaris/proxy_browser MCP server](https://glama.ai/mcp/servers/UbaidBinWaris/proxy_browser/badges/score.svg)](https://glama.ai/mcp/servers/UbaidBinWaris/proxy_browser) 📇 🏠 🍎 🪟 🐧 - Run geo- and device-aware QA checks on origins you allowlist, with Chromium, Firefox and WebKit.
```

### open-source-mac-os-apps (new PR)
Append to `applications.json` (not README.md). Fill in the PR template checklist and write
a body of at least 5 characters, or their Danger check fails.
```json
{
    "short_description": "Desktop QA browser for testing your own website forms across browsers, 226 device presets and US locations, with recorded scenario matrices and saved run evidence.",
    "categories": ["web-development"],
    "repo_url": "https://github.com/UbaidBinWaris/proxy_browser",
    "title": "Proxy QA Browser",
    "icon_url": "https://raw.githubusercontent.com/UbaidBinWaris/proxy_browser/main/build/icons/icon.png",
    "screenshots": [
        "https://raw.githubusercontent.com/UbaidBinWaris/proxy_browser/main/docs/site/images/launch.webp",
        "https://raw.githubusercontent.com/UbaidBinWaris/proxy_browser/main/docs/site/images/qa-results-720.webp"
    ],
    "official_site": "https://proxybrowser.ubaidbinwaris.com",
    "languages": ["typescript"]
}
```

### AlternativeTo ("Suggest new application", verified email)
- **Official website:** https://proxybrowser.ubaidbinwaris.com
- **Creator website:** https://ubaidbinwaris.com
- **License:** Free, Open Source (Apache-2.0) · **Platforms:** Windows, Mac, Linux
- **Tagline:** Test your own website forms across browsers, devices and US locations.
- **Alternative to:** BrowserStack, Sauce Labs, LambdaTest (listed there as "TestMu AI")
- **Tags:** cross-browser-testing, form-testing, device-emulation, playwright, qa-testing
- **Description (reuse on SaaSHub and DevHunt):**
  > Proxy QA Browser is a free, open-source desktop app for testing website forms you own or are contracted to test. Pick a browser (bundled Chromium, Firefox or WebKit, or an installed Chrome, Edge, Brave or Opera), one of 226 phone, tablet and desktop presets, and a US state, city or ZIP through your own proxy plan. The exit IP is checked against the requested location before the window opens. Record a scenario once and run it across browser, device and location matrices. Every run keeps a screenshot, network requests, the HTTP response and any form IDs as evidence. Accessibility and performance checks, encrypted local credential storage and isolated browser profiles are included.

Don't advertise from your AlternativeTo user profile; their FAQ says that gets accounts blocked.

### SaaSHub (saashub.com/services/submit)
- **Tagline:** Free, open-source desktop app for testing your own web forms by location, device and browser.
- **Categories:** Automated Testing, Cross Browser Testing, QA (pick the closest)
- **Competitors (required for queue priority):** BrowserStack, Sauce Labs, LambdaTest, LT Browser
- Verify with an @ubaidbinwaris.com email if you have one, for priority.

### OpenAlternative (sign in first)
- **Tagline:** Test your own web forms across browsers, devices and US locations
- **Repository:** https://github.com/UbaidBinWaris/proxy_browser
- **Alternative to:** BrowserStack, Sauce Labs, LambdaTest · **Category:** Testing & Quality Assurance

### mcpservers.org (free plan only)
- **Category:** Development · **Remote:** unchecked
- **Short description:** Local MCP server that runs device- and location-aware QA checks with Chromium, Firefox and WebKit, limited to origins you allowlist.

### awesome-electron (only after 100 stars)
Section "Apps > Open Source > Other", at the bottom. Rules: don't mention Electron, don't start with "A", end with a period.
```
- [Proxy QA Browser](https://github.com/UbaidBinWaris/proxy_browser) - Test your own web forms across browsers, devices and US locations, with recorded scenarios and run evidence.
```

---

## 2. Sales Call Intelligence: lists (after the LICENSE fix)

**Repo description:** `Local, GPU-accelerated sales call intelligence: Parakeet TDT v3 transcription, Sortformer speaker diarization, talk metrics and Qwen3 QA scorecards via Ollama. No cloud APIs.`
**Homepage:** `https://ubaidbinwaris.com/work/sales-call-intelligence`
**Topics:** `speech-to-text speaker-diarization conversation-intelligence call-analytics ollama nvidia-nemo parakeet local-llm fastapi self-hosted`

### awesome-diarization (best fit)
`## Software` > `### Other software` table, last row. PR title: `Add Sales Call Intelligence to Other software`
```
| [Sales Call Intelligence](https://github.com/UbaidBinWaris/qa_STT) ![GitHub stars](https://img.shields.io/github/stars/UbaidBinWaris/qa_STT?style=social) | Python & JavaScript | Self-hosted sales call analysis on one NVIDIA GPU: Parakeet TDT v3 transcription with word timestamps, Sortformer diarization with word-to-speaker alignment, talk ratio and interruption metrics, and LLM QA scorecards. |
```

### Awesome-Ollama
`## Automation` table, alphabetically between Reply Better AI and VoxFlow. Then run
`python scripts/lint.py README.md --fix`. One entry per PR; don't mention Ollama in the
description; fill in the PR template.
```
| [Sales Call Intelligence](https://github.com/UbaidBinWaris/qa_STT) | Sales call transcription with speaker diarization, talk metrics and LLM QA scorecards | Source | MIT |
```

### LLMRepos (issue: "Suggest a missing repo")
- **Title:** `Suggest repo: UbaidBinWaris/qa_STT`
- **Why:** Fully local conversation intelligence for sales call recordings: Parakeet TDT v3 speech-to-text, Sortformer diarization, talk metrics and Qwen3 8B QA scorecards through Ollama. Audio never leaves the machine; about 16x real-time end-to-end on one RTX 5070 Ti.
- **Category:** Applications / productivity · **Connection:** I am the author.

### Ollama README, Community Integrations
`## Community Integrations` > `### Productivity & Apps`, after TagSpaces. One-line diff.
PR title: `README: add Sales Call Intelligence to community integrations`. Body: MIT license,
QA runs on Ollama with qwen3:8b, you are the author.
```
- [Sales Call Intelligence](https://github.com/UbaidBinWaris/qa_STT) - Local sales call transcription, diarization, and QA scoring
```

### awesome-open-source-alternatives
`## Marketing and Sales`, new subsection between "Common Room / Pocus" and "Linktree", plus
the Contents line `  - [Gong / Chorus](#gong--chorus)`. Say in the PR that you wrote it.
```
### [Gong](https://www.gong.io) / [Chorus](https://www.chorus.ai)
- [Sales Call Intelligence](https://github.com/UbaidBinWaris/qa_STT) - Local call transcription, diarization and QA scorecards. Needs an NVIDIA GPU.
```

### NVIDIA NeMo Speech Discussions, "Show and tell"
- **Title:** Sales Call Intelligence: local call QA built on Parakeet TDT v3 and Sortformer
- **Opening:** Open-source (MIT) pipeline that runs Parakeet TDT v3 with word timestamps and Sortformer diarization, aligns words to speakers, then scores calls with a local LLM. About 38x real-time transcription and 16x real-time end-to-end on one RTX 5070 Ti. Repo: https://github.com/UbaidBinWaris/qa_STT. Write-up: https://ubaidbinwaris.com/work/sales-call-intelligence

### awesome-generative-ai, DISCOVERIES.md
`## Text` > `### Meeting assistants`, at the bottom:
```
- [Sales Call Intelligence](https://ubaidbinwaris.com/work/sales-call-intelligence) - Local GPU pipeline that transcribes, diarizes and QA-scores sales call recordings without cloud APIs. [#opensource](https://github.com/UbaidBinWaris/qa_STT)
```

### awesome-pakistani (you)
Read github.com/usman2x/awesome-pakistani CONTRIBUTING first and follow its entry format;
your open-source work (Proxy QA Browser, Sales Call Intelligence) is the qualifying criterion.

---

## 3. Community launches (fact outlines: rewrite in your own words)

### Show HN (Sales Call Intelligence, after the LICENSE fix)
- **Title:** `Show HN: Sales call transcription, diarization and QA scoring on one local GPU`
- **URL:** https://github.com/UbaidBinWaris/qa_STT
- **First comment, points to cover:**
  - Why: QA every call without sending recordings to a cloud API.
  - Stack: Parakeet TDT v3 (ASR), Sortformer (diarization), Qwen3 8B via Ollama (scorecard), FastAPI with a background worker.
  - One ASR pass over the whole call, then each word goes to the speaker turn it overlaps most (per-segment ASR was slower and clipped words at turn boundaries).
  - Silence is kept: stripping it broke timestamps for click-to-seek and highlighting; dead air became a metric.
  - Two workers beat one (36.0 s vs 48.9 s on a 4-file batch); three were slower from lock contention.
  - About 16x real-time end to end (108 min of audio in 6.6 min); peak VRAM 12.6 GB during QA.
  - Needs Linux, an NVIDIA GPU (8 GB minimum) and Ollama. Link the case study.

### r/LocalLLaMA (Showcase flair; disclose you built it)
- **Title idea:** Fully local sales call QA on one RTX 5070 Ti: Parakeet TDT v3 + Sortformer + Qwen3 8B, ~16x real-time end to end
- **Points:** ffmpeg to 16 kHz mono, Parakeet over the full call with word timings, Sortformer 4spk turns, word-to-speaker alignment, talk and pause metrics, Qwen3 8B producing a schema-validated JSON scorecard with quoted evidence. VRAM: 3.3 GB idle with speech models loaded, 4.25 GB flat over 18 jobs, 12.6 GB peak with Qwen3 loaded. Calls over four minutes are transcribed in overlapping windows. End with a real question, e.g. which scorecard model you'd use at this VRAM budget.

### r/webdev Showoff Saturday (Proxy QA Browser)
- **Title idea:** Electron + Playwright desktop app for testing your own forms across browsers, devices and US locations
- **Points:** Playwright drives bundled engines and detects installed Chrome/Edge/Brave/Opera; each run gets an isolated profile and one of 226 presets. The exit IP is checked against the requested location before the window opens, and sticky sessions are re-checked every 20 s. A headless CLI and a stdio MCP server share the runtime, limited to allowlisted origins. axe-core accessibility checks. The Linux AppImage bundles WebKit's libraries (glibc 2.38+). Only for sites you own or are contracted to test. Ask for feedback on the recorder and matrix UX.

### Product Hunt (Proxy QA Browser)
- **Name:** Proxy QA Browser · **Tagline (58 chars):** Test your own web forms by US location, device and browser
- **Link:** https://proxybrowser.ubaidbinwaris.com · Open source: yes (repo link) · Pricing: Free
- **Description (under 500 chars):** Free, open-source (Apache-2.0) desktop app for QA on forms you own. Launch real Chromium, Firefox, WebKit or installed Chrome, Edge, Brave and Opera with 226 device presets, through your own proxy plan by US state, city or ZIP. The exit IP is verified before the window opens. Record scenarios, run browser x device x location matrices, and keep screenshots, network and HTTP evidence per run. Windows, Linux, macOS.
- **Maker comment points:** why you built it (losing track of which IP/device/browser produced which result), bring-your-own proxy plan (DataImpulse built in), for sites you own, ask for feedback on the matrix runner. Set your profile website to ubaidbinwaris.com first. Never ask for upvotes.

### n8n Community, "Built with n8n" (video automations)
- **Title idea:** Telegram voice note to finished short video: ElevenLabs transcription, SRT, Drive media and FFmpeg over SSH
- **Points:** the two pipelines (voice note to video; Sheets/Drive batch shorts), state that the workflow JSON isn't public but you'll answer node-level questions, **your real reason** for rendering over SSH, **one real thing that broke** and how you fixed it, links to both case studies, disclosure.

---

## 4. Editorial pitches

### TechJuice (editors@techjuice.pk); reuse for ProPakistani's "News Tip" form
**Send only after the Scrap Exchange homepage rates are current.**

Subject: Tip: Islamabad developer launches free scrap marketplace with AI photo pricing

> Hi TechJuice team,
>
> I'm Ubaid Bin Waris, a developer in Islamabad. I built Scrap Exchange (https://scrapex.ubaidbinwaris.com), so I'm writing as its builder.
>
> It is a free scrap marketplace for Pakistan on Android and the web. A seller photographs copper, loha, plastic or e-waste, gets an AI price estimate per kg, then receives offers from nearby kabarias, dealers and recyclers and arranges pickup. The platform never holds money; buyers pay sellers directly.
>
> It also publishes scrap-rate pages for Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar and Multan, which get Google search traffic from people checking prices.
>
> [One real traction figure: listings, sellers or monthly search clicks.]
>
> I can share screenshots, a demo or numbers.
>
> Ubaid Bin Waris
> https://ubaidbinwaris.com | ubaidwaris34@gmail.com

### Node Weekly / JavaScript Weekly (editor@cooperpress.com)
Subject: Tool suggestion for Node Weekly / JavaScript Weekly: Proxy QA Browser (Apache-2.0)

> Hello,
>
> A suggestion for Code & Tools, from the tool's author (me).
>
> Proxy QA Browser is a free, Apache-2.0 desktop app built on Electron and Playwright for testing your own website forms the way different visitors meet them. You choose a US location (state, city or ZIP), one of 226 device presets and a browser, record scenarios and export evidence reports. It runs on Windows, Linux and macOS. v2.1.0 shipped on 29 October.
>
> Repo: https://github.com/UbaidBinWaris/proxy_browser
> Site: https://proxybrowser.ubaidbinwaris.com
>
> Thanks for considering it.
>
> Ubaid Bin Waris, Islamabad
> https://ubaidbinwaris.com

### Software Testing Weekly (tally.so/r/5BW4vN)
- **Title:** Proxy QA Browser 2.1: open-source app for testing forms by US location, device and browser
- **URL:** https://github.com/UbaidBinWaris/proxy_browser
- **Note:** A free, Apache-2.0 desktop app (Electron and Playwright) for QA of your own site's forms. Pick a US state, city or ZIP, one of 226 device presets and a browser; record scenarios and export evidence reports for bug tickets. Runs on Windows, Linux and macOS. v2.1.0 was released on 29 October 2026. There is no paid tier. Submitted by the author, Ubaid Bin Waris.

### PyCoder's Weekly (pycoders.com/submit, after the LICENSE fix)
- **Title:** Sales Call Intelligence: local GPU transcription, diarization and LLM QA for call recordings
- **URL:** https://github.com/UbaidBinWaris/qa_STT
- **Note:** A self-hosted Python pipeline that turns sales call recordings into speaker-attributed transcripts with word-level timestamps, conversation analytics and an LLM quality-assurance scorecard. It uses NVIDIA Parakeet TDT v3 for speech recognition, Sortformer for diarization and Qwen3 8B through Ollama, with no cloud APIs and no customer data leaving the machine. On one RTX 5070 Ti it transcribes at about 38x real time, with about 16x sustained end-to-end throughput. Submitted by the author, Ubaid Bin Waris (https://ubaidbinwaris.com).

---

## 5. Profile fields

| Platform | Field | Paste |
|---|---|---|
| LinkedIn | Contact info, Website | Type "Portfolio", https://ubaidbinwaris.com |
| LinkedIn | Each Project, Project URL | Its case study, e.g. https://ubaidbinwaris.com/work/sales-call-intelligence |
| dev.to, Peerlist, daily.dev, Hashnode, Hugging Face, Product Hunt | Website + bio | Website above; bio from section 0 |
| Stack Overflow | Website | https://ubaidbinwaris.com (followed once you reach 2,000 reputation) |
