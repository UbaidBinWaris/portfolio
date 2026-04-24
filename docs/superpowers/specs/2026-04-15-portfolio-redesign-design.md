# Portfolio Redesign — Design Specification
**Date:** 2026-04-15  
**Project:** uabidbinwaris.dev  
**Approach:** System Terminal (Approach A)  
**Status:** Approved for implementation

---

## Overview

Complete UI/UX redesign of Ubaid Bin Waris's portfolio. The design theme is "**System Terminal**" — the portfolio feels like a developer's operating environment, not a typical website. Each section uses a different layout and interaction pattern to maintain interest and reinforce the backend/system-builder identity.

### Core Constraints
- **Colors:** Keep existing palette (#0A1930, #63B8B2, #0f2744, #112240, #233554)
- **Font:** Source Code Pro monospace — keep as global default
- **Content:** Same information as existing site + LinkedIn
- **Framework:** Next.js (JavaScript), Tailwind CSS v4, Framer Motion, react-icons
- **No new dependencies** beyond what's already installed (react-terminal is already in package.json)

### Sections Removed
Blog, FAQ, Reviews, Services — dropped for focus and identity coherence.

### Sections Kept / Added
Hero, About, Skills (new), Terminal Section (new), Projects, Experience, Contact, Footer

---

## 1. Global Design Language

### Color System
```
Background:    #0A1930   (deep navy — primary canvas)
Card:          #0f2744   (elevated surfaces)
Card alt:      #112240   (alternate card tone)
Border:        #1a3a5c   (subtle dividers)
Border alt:    #233554   (alternate border)
Accent:        #63B8B2   (teal — primary brand, used sparingly)
Text primary:  #ccd6f6   (near-white)
Text sec:      #8892b0   (slate)
Text muted:    #4a5568   (gray-600)
Online green:  #4ade80   (green-400)
```

### Typography
- Font: `Source Code Pro` (monospace) — global default, not just for code blocks
- Headings: `font-bold tracking-wide` (not tracking-tight — monospace needs breathing room)
- Body: `14px–15px`, `text-gray-300`
- Section labels: `font-mono text-sm text-[#63B8B2]` prefixed with index (e.g. `01. section_name`)

### Motion Philosophy
- Entrance: `opacity 0→1`, `y: 20→0`, `duration: 0.4s`
- Stagger between siblings: `0.06s`
- Terminal typing: `40ms per character`
- Scroll trigger: `once: true`, at `80% viewport`
- **RULE:** No bounce, no spring physics on scroll. 3D effects only on explicit hover (projects).
- **RULE:** Max 250ms for micro-interactions. Max 400ms for section entrances.

### Cursor
Keep existing custom SVG cursor from globals.css — unchanged.

### Scrollbar
Keep existing teal scrollbar (#63B8B2 on #0A1930 track) — unchanged.

---

## 2. Navbar

### Behavior States

**State 1 — At top (scrollY ≤ 80)**
- Fully transparent, invisible
- No elements visible — pure immersion on first load

**State 2 — Scrolled (scrollY > 80)**
- Top navbar fades OUT (`opacity: 0`, `pointer-events: none`)
- Floating trigger button fades IN — `fixed top-6 right-6 z-50`

### Floating Trigger Button
```
Size:       32×32px
Shape:      rounded-md (not circle)
Background: bg-[#0f2744]
Border:     border border-[#63B8B2]/40
Icon:       RxHamburgerMenu from react-icons/rx
Hover:      border-[#63B8B2], shadow-[0_0_12px_rgba(99,184,178,0.3)]
Transition: 200ms
```

### Right-Side Panel
```
Width:      280px desktop / 85vw mobile
Position:   fixed top-0 right-0 h-full z-50
Background: bg-[#0a1930]
Left edge:  border-l border-[#233554]
```

**Animation:** `x: 280 → 0`, `duration: 0.35s`, `ease: [0.22, 1, 0.36, 1]`

**Overlay:** `bg-black/60 backdrop-blur-sm` — click to dismiss

**Panel content:**
```
> ~/ubaid                      ← teal, small, font-mono, top padding
──────────────────────
0. home
1. about
2. skills
3. projects
4. experience
5. contact
──────────────────────
[ Resume ↗ ]                   ← outlined teal button, opens /resume.pdf
```

Nav links: `text-gray-400 hover:text-[#63B8B2] transition-colors`, index prefix in teal

Close trigger: overlay click OR `×` button in panel top-right

---

## 3. Hero Section

### Background
- Remove background video (too heavy, not on-brand for terminal theme)
- Replace with: subtle CSS grid pattern (same as Contact section's grid) at `opacity-[0.04]`
- One large radial teal glow: `absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#63B8B2]/5 blur-[120px]`

### Layout
Full viewport height (`min-h-screen`), flex column centered, `max-w-3xl mx-auto px-6`

### Boot Sequence (Phase 1)
Lines appear one by one with typing animation, 40ms/char:
```
> initializing ubaid.dev...              ← text-gray-600, instant (no typing)
> loading profile data...                ← text-gray-600
> status: ONLINE ●                       ← green-400 dot, green text for "ONLINE"
>
> $ whoami
  Ubaid Bin Waris
  Backend Engineer · AI Automation · System Builder
  Location: Islamabad, Pakistan
>
> Available for new projects ▋           ← teal text, blinking cursor
```

Implementation: array of lines, each with `delay` config. Use `setTimeout` cascade, not CSS animation.

### After Boot (Phase 2, +300ms after last line)
- Large name: `text-5xl md:text-7xl font-bold tracking-widest text-white` — fades in with `opacity 0→1, y: 20→0`
- Subtitle: `Backend Engineer · AI Automation · Full Stack` — `text-[#63B8B2] text-lg tracking-wide`
- CTA row (appears 200ms after name):
  - Primary: `[ View Projects ]` — `bg-[#63B8B2] text-[#0A1930] font-bold px-6 py-2.5`
  - Secondary: `[ Resume ↗ ]` — `border border-[#63B8B2] text-[#63B8B2] px-6 py-2.5`

### Profile Image
- Small, circular, `w-20 h-20` (80px)
- `border-2 border-[#63B8B2]/50`
- Positioned top-right corner of the terminal block
- Not the focal point — supporting element only

### Scroll Indicator
- `↓ scroll` text in gray-500, centered, bottom of section
- Subtle bounce animation (CSS, not Framer Motion)
- Fades in last, after boot sequence completes

---

## 4. About Section

### Layout
Two columns on desktop (`grid-cols-1 lg:grid-cols-2 gap-12`), stacked on mobile.

### Left — README Card
Mock code editor card with:
- Top bar: `bg-[#0f2744]` with `README.md` tab + three dots (•••)
- Line numbers on left in gray-600 (`1`, `2`, `3`…)
- Content uses markdown-like styling:
  - `# heading` → teal
  - `**bold**` → white
  - Normal text → gray-300
  - Inline code → `bg-[#1a3a5c] px-1 rounded text-[#63B8B2]`

**Content:**
```markdown
# about_me.md

Hi, I'm **Ubaid Bin Waris**
Backend-focused Full Stack Engineer from Islamabad, PK.

I build **systems**, not just websites. My work spans
REST APIs, server infrastructure, AI automation
pipelines, and production deployments.

## background
Started with C++ and Data Structures.
Moved into web → APIs → DevOps → AI automation.

## philosophy
Quality first. Full-stack mindset. Performance and
security by default. Real-world impact over demos.

## fun_fact
Long-time Linux enthusiast:
Ubuntu → Fedora → Zorin → **Arch** (btw) 🐧

## currently_at
> GixiAI — Full Stack Dev + AI Features
> Status: ACTIVE ●
```

### Right — Stats + Philosophy
**Stats grid** (2×2, same content as existing achievements):
```
┌─────────┐  ┌─────────┐
│   3+    │  │   20+   │
│  Years  │  │Projects │
└─────────┘  └─────────┘
┌─────────┐  ┌─────────┐
│   10+   │  │  Prod   │
│Clients  │  │ Deployed│
└─────────┘  └─────────┘
```
Each: `bg-[#0f2744] border border-[#1a3a5c] p-6 text-center hover:border-[#63B8B2] transition-colors`

**Number counter animation:** Count from 0 to target on scroll entry (using Framer Motion `useMotionValue` + `animate`).

**Philosophy list** (below stats):
5 bullet points — `✓` in teal, key phrase in white bold, rest in gray-300. Same content as existing.

**Hire CTA** (below philosophy):
```
[ Hire on Upwork ]   [ Hire on Fiverr ]
```

### Animation
- Left col: `x: -50 → 0`, on scroll
- Right col: `x: 50 → 0`, on scroll
- Stats cards: `scale: 0.9 → 1`, staggered 0.06s

---

## 5. Skills Section

### Concept
Skills rendered as a system process view — inspired by `htop`/`ps aux`. Visually distinct from typical progress bar layouts.

### Layout
Full-width section, `max-w-5xl mx-auto`

### Category Headers
```
┌── FRONTEND ──────────────────────────────────────┐
│  React.js / Next.js   [████████████████░░]  95%  │
│  TypeScript           [█████████████░░░░░]  85%  │
│  Tailwind CSS         [████████████████░░]  95%  │
└──────────────────────────────────────────────────┘

┌── BACKEND ───────────────────────────────────────┐
│  Node.js / Express    [███████████████░░░]  90%  │
│  REST APIs / GraphQL  [████████████████░░]  95%  │
│  MongoDB / SQL        [███████████████░░░]  90%  │
└──────────────────────────────────────────────────┘

┌── INFRASTRUCTURE ────────────────────────────────┐
│  Linux & DevOps       [██████████████░░░░]  88%  │
│  Docker / PM2         [██████████████░░░░]  87%  │
│  AWS / Hetzner        [█████████████░░░░░]  85%  │
│  Server Config        [███████████████░░░]  90%  │
└──────────────────────────────────────────────────┘
```

**Bar implementation:** Div-based, fills with `width` animation on scroll entry. NOT CSS `progress` element — custom div with `bg-[#63B8B2]` fill on `bg-[#1a3a5c]` track.

**Progress bar format:** Fixed-width monospace chars — 20 block characters, filled = `█`, empty = `░`

**Percentage:** `text-[#63B8B2] text-xs font-mono` right-aligned

**Level badge:** Small inline badge — `Advanced` in green-400/10 bg, `Intermediate` in amber-400/10 bg

### Tech Tag Cloud
Below the bars — secondary tech:
```
  <Docker>  <PM2>  <n8n>  <Git>  <Nginx>  <Linux>  <AWS>
  <Hetzner>  <Hostinger>  <C++>  <Redis>  <GSAP>
```
Each tag: `border border-[#1a3a5c] text-[#63B8B2] text-xs font-mono px-2 py-1 rounded-sm hover:border-[#63B8B2]`

### Animation
Each row slides in from left, staggered 60ms. Bar width animates from 0% to target% on row entry.

---

## 6. Terminal Section (Interactive Feature)

### Placement
Between Skills and Projects — standalone full-width section, `min-h-[400px]`.

### Layout
```
Section heading:  > try_the_terminal          ← teal, font-mono
Subtext:          // type a command below      ← gray-500, italic-style

[Terminal Window]
┌────────────────────────────────────────────┐
│ ● ● ●   ubaid@portfolio:~$                 │  ← top bar
├────────────────────────────────────────────┤
│                                            │
│  Welcome! Type 'help' to get started.     │
│                                            │
│  ubaid@portfolio:~$ _                     │  ← active prompt
└────────────────────────────────────────────┘
```

### Terminal Commands (Static Responses)
| Command | Response |
|---|---|
| `help` | Lists all available commands with descriptions |
| `whoami` | Name, role, location, availability (green ONLINE dot) |
| `ls projects` | Numbered list of featured projects with tech stacks |
| `cat about.txt` | Short bio (3–4 sentences) |
| `cat skills.txt` | Skills grouped: Frontend / Backend / Infrastructure |
| `ping contact` | Email + social links with response times |
| `./hire_me.sh` | "Executing... redirecting to contact form..." then smooth scrolls to #contact |
| `clear` | Clears terminal output |
| `uname -a` | Fun system info: "ubaid-portfolio Next.js 16 x86_64 GNU/Linux" |
| `echo $STACK` | "React · Next.js · Node.js · MongoDB · Docker · Linux" |

**Unknown command:** `bash: [command]: command not found. Type 'help' for available commands.`

### Implementation
Use `react-terminal` package (already installed). Apply custom CSS overrides to match color palette:
- Background: `#0A1930`
- Prompt color: `#63B8B2`
- Text: `#ccd6f6`
- Top bar: `#0f2744` with colored dots

---

## 7. Projects Section

### Concept
"Deployment cards" — each project is a live server status panel.

### Section Header
```
03. featured_deployments ─────────────────────────────────────
A showcase of systems built and shipped to production.
```

### Card Design
Keep the existing 3D tilt-on-hover (Framer Motion). Restyle the card content:

```
┌────────────────────────────────────┐
│ ● LIVE                    [↗] [⌥]  │  ← status + links
│                                    │
│ Project Name                       │  ← text-2xl font-bold text-white
│ /stack/next.js · /stack/node       │  ← teal, font-mono, text-xs
│ ─────────────────────────────────  │
│                                    │
│        [project image]             │  ← h-36, rounded
│                                    │
│ ─────────────────────────────────  │
│ Short description here.            │  ← gray-400, text-sm, line-clamp-3
└────────────────────────────────────┘
```

**Status dot:**
- `● LIVE` → `text-green-400` with `animate-pulse` on the dot
- `○ ARCHIVED` → `text-gray-500`

**Tech stack:** Rendered as file paths → `text-[#63B8B2] font-mono text-xs`

**Keep:** 3D `rotateX/rotateY` on mouse move, spotlight radial gradient hover, stagger entrance animation.

**Change:** Card background from `bg-[#112240]/80` → keep same. Replace `Layers` icon header with status dot. Replace bottom tech list with file-path style.

### Layout
- Desktop: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Keep existing `perspective-2000` wrapper

---

## 8. Experience Section

### Concept
Vertical git commit log — each role is a commit entry.

### Layout
Single column, left-aligned, max-width `max-w-3xl mx-auto`

### Visual Structure
```
● a1f3b2c — GixiAI ─────────────────── Aug 2025 → Present
│            Full Stack Developer
│            Design and develop full-stack web apps with
│            AI-powered features. Collaborate with
│            cross-functional teams...
│
● 7d3e891 — HH Tech Hub ─────────────── Jun 2025 → Jul 2025
│            Web Developer
│            ...
│
● 2f9b012 — BluCentric ─────────────── Feb 2025 → May 2025
│            Full Stack Developer
│            ...
│
○ a4c830f — Higher Education Commission ─ Jun 2023 → Aug 2023
             Intern
             ...
```

**Implementation details:**
- Vertical line: `border-l-2 border-[#1a3a5c] ml-[7px]` (left padding on content)
- Commit dot: `w-3.5 h-3.5 rounded-full bg-[#63B8B2] border-2 border-[#0A1930]` (current), `bg-[#1a3a5c]` (past)
- Commit hash: `text-[#63B8B2] text-xs font-mono opacity-50` (faked hash strings from `experienceData`)
- Company name: `text-white font-semibold`
- Duration: `text-gray-500 text-xs ml-auto`
- Role title: `text-gray-300 text-sm`
- Description: `text-gray-500 text-sm leading-relaxed`

**Remove GSAP entirely** from Experience — replace with Framer Motion:
- Each entry: `x: -30 → 0, opacity: 0 → 1` on scroll
- Stagger: 0.1s per entry

### Fake Commit Hashes
Generate deterministic fake hashes per experience entry and store in `experienceData.js`:
```js
{ id: 1, hash: "a1f3b2c", ... }
```

---

## 9. Contact Section

**Minimal changes only** — the existing Contact component already has strong terminal identity.

### Changes:
1. Replace emoji in any remaining places with `react-icons` equivalents
2. Ensure all `<input>` elements have associated `<label>` elements (accessibility)
3. Section heading change: keep `INITIALIZE_CONNECTION` but prefix: `05. INITIALIZE_CONNECTION`
4. Keep `TRANSMISSION_PROTOCOL`, `ACTIVE_NODES`, terminal-language throughout
5. Keep `SYSTEM_NOTE` footer block

---

## 10. Footer

### Design
Minimal terminal-style footer. Single line or two lines.

```
ubaid@portfolio:~$ echo "© 2026 Ubaid Bin Waris · Built with Next.js"
> © 2026 Ubaid Bin Waris · Built with Next.js
```

Or simpler:
```
> © 2026 Ubaid Bin Waris. All rights reserved.
  Built with Next.js + Tailwind CSS
```

**Styling:** `bg-[#050e1a]` (slightly darker than main bg), `border-t border-[#1a3a5c]`, `py-8`, `font-mono text-xs text-gray-600`, centered.

**Social icons row:** Small, gray-600, hover teal. GitHub, LinkedIn, Upwork, Fiverr, Discord.

---

## 11. Scroll Animation Strategy

| Section | Type | Direction | Duration | Stagger |
|---|---|---|---|---|
| About (left) | opacity+x | from-left | 0.5s | — |
| About (right) | opacity+x | from-right | 0.5s | — |
| About stats | opacity+scale | center | 0.4s | 0.06s |
| Skills rows | opacity+x | from-left | 0.4s | 0.05s |
| Skills bars | width | 0→target | 0.8s | 0.08s |
| Terminal | opacity | fade | 0.4s | — |
| Projects | opacity+y | from-bottom | 0.5s | 0.08s |
| Experience | opacity+x | from-left | 0.4s | 0.1s |
| Contact form | opacity+x | from-left | 0.5s | — |
| Contact socials | opacity+x | from-right | 0.5s | — |

All scroll triggers: `viewport: { once: true, margin: "-80px" }`

---

## 12. File Changes Summary

### Files to REWRITE (full replacement):
- `app/components/Navbar.js`
- `app/components/Hero.js`
- `app/components/About.js`
- `app/components/Experience.js`
- `app/components/Footer.js`

### Files to CREATE (new):
- `app/components/Skills.js`
- `app/components/TerminalSection.js`
- `app/data/terminalCommands.js`

### Files to RESTYLE (keep logic, update visuals):
- `app/components/ProjectSection.js`
- `app/components/Contact.js` (minor tweaks only)

### Files to DELETE:
- `app/components/BlogSection.js`
- `app/components/FAQSection.js`
- `app/components/ReviewSection.js`
- `app/components/Services.js`
- `app/data/blogPosts.js`
- `app/data/faqData.js`

### Files to UPDATE:
- `app/page.js` — remove deleted section imports, add Skills + TerminalSection
- `app/globals.css` — minor additions for terminal-section CSS overrides

---

## 13. Decisions Made (for reference)

| Decision | Choice | Reason |
|---|---|---|
| Sections to keep | Hero, About, Skills, Projects, Experience, Contact | User's brief explicitly lists these 6 |
| Terminal responses | Static predefined | react-terminal already installed; AI-powered would need API + new architecture |
| Navbar scroll behavior | Top nav hides → floating trigger appears | User brief: "transform into right-side slide menu" |
| GSAP removal from Experience | Yes, replace with Framer Motion | GSAP pinned scroll is complex and can cause scroll issues; Framer Motion is already used everywhere |
| Background video | Remove from Hero | Terminal theme + heavy download cost; CSS grid + glow is lighter and more on-brand |
| Approach | System Terminal (A) | Matches "system builder" identity; evolves existing terminal language already in codebase |
