# Backlink plan for ubaidbinwaris.com

Researched 9 Nov 2026 by checking each venue's own rules, its GitHub activity and,
where possible, the live `rel` attribute on its links. Client sites are intentionally
excluded. Ready-to-submit text for every item is in
[backlink-drafts.md](backlink-drafts.md).

## Submit these yourself, by hand

Several venues reject automated or AI-written submissions. HN, r/LocalLLaMA (it runs an AI
detector), r/webdev, r/opensource, r/n8n, Ministry of Testing and awesome-selfhosted ban
them outright. SaaSHub requires a person to submit, and some awesome lists run bot checks.
So the drafts are **fact sheets**: every number in them was checked against your READMEs,
but rewrite community posts in your own words before posting.

## Fix these first (they block the best opportunities)

| # | Fix | Why | Status |
|---|---|---|---|
| 1 | **qa_STT: add a `LICENSE` file (MIT).** README and package.json already say MIT, but GitHub sees no license | Unblocks awesome-diarization, Awesome-Ollama, awesome-open-source-alternatives, PyCoder's Weekly, r/opensource and Show HN credibility | ☑ done 9 Nov |
| 2 | **qa_STT: switch the default diarizer to `nvidia/diar_streaming_sortformer_4spk-v2`** (CC-BY-4.0), or document the current one | `diar_sortformer_4spk-v1` (used in `server/pipeline/diarize.py`) is **CC-BY-NC-4.0, non-commercial**. A sales tool will be read as commercial use. Verified on Hugging Face | ☐ |
| 3 | qa_STT: description, homepage (case study), topics, real clone URL in the README instead of `<repository-url>`, a dashboard screenshot | Every list and newsletter reads these first | ☑ all but the screenshot |
| 4 | **Scrap Exchange: refresh the homepage rates.** The live homepage says "Scrap rate today Pakistan … guide ranges, **April 2026**" | Journalists and Google both see stale "today" prices. This is the main hook for Pakistani media | ☐ |
| 5 | Send me the full text of both LinkedIn articles and the "AI Coding Agents" publish date | The articles section is built but hidden until it has text. Syndication can't start without it | ☐ |

## How links count (verified)

- **Followed links pass ranking value.** Verified followed: dev.to article-body links,
  the awesome-pakistani directory, one header link on a Glama listing, and Stack Overflow
  profiles **at 2,000+ reputation** (nofollow below that).
- **Nofollow links bring visitors and discovery, not ranking.** That covers GitHub README
  links, AlternativeTo, SaaSHub, OpenAlternative, DevHunt, Hashnode, Medium, Peerlist,
  daily.dev, Hugging Face and Gravatar. Still worthwhile: people click them, and Google
  finds your pages through them.
- Newsletters and lists mostly link your **GitHub repo or project subdomain**. Those pages
  already link back to ubaidbinwaris.com, so the value flows through.

## Already in progress (do not duplicate)

| PR | Status |
|---|---|
| awesome-testing #292 | **Merged 19 Oct**, live under "UI & End-to-End Testing" |
| awesome-regression-testing #126 | Open, mergeable. The maintainer merges in batches; wait |
| awesome-playwright #236 | Open. At risk: the maintainer recently closed similar PRs as "too new". If closed, resubmit after real traction |
| awesome-mcp-servers #16177 | Open, blocked by the `missing-glama` label. Fix: list on Glama first (below), then add the score badge |

## 1. Lists and directories

**Proxy QA Browser** (lead every description with QA on your own forms, not proxies;
proxy-first wording reads as a scraping tool)

| Venue | Link | Note | Status |
|---|---|---|---|
| Glama MCP directory | One followed link | Do first: unblocks awesome-mcp-servers #16177 | ☐ |
| open-source-mac-os-apps (51k★) | nofollow | Actively merging; qualifies now. Edit `applications.json` | ☐ |
| AlternativeTo | nofollow | Alternative to BrowserStack, Sauce Labs, LambdaTest | ☐ |
| SaaSHub | nofollow | Must be submitted by a person; list competitors or it sinks in the queue | ☐ |
| OpenAlternative | nofollow | Curated; most testing entries have more stars | ☐ |
| mcpservers.org (free plan) | Unverified | Free plan only; skip the paid dofollow upgrade | ☐ |
| DevHunt (free week) | nofollow | Free weeks are limited | ☐ |
| awesome-electron | nofollow | **Later:** needs 100+ stars (repo has 1) | ☐ |

**Sales Call Intelligence** (all after fixes 1 to 3)

| Venue | Note | Status |
|---|---|---|
| awesome-diarization (1.9k★) | Best fit. Merges within about a day; small projects accepted | ☐ |
| Awesome-Ollama | License required; run their lint script | ☐ |
| LLMRepos (awesome-local-llms) | Issue form; recent suggestions all accepted | ☐ |
| NVIDIA NeMo Speech Discussions, "Show and tell" | Exactly the Parakeet/Sortformer audience | ☐ |
| Ollama README, Community Integrations (186k★) | Very high value, low odds (about 98 similar PRs open) | ☐ |
| awesome-open-source-alternatives | As an open-source Gong/Chorus alternative | ☐ |
| awesome-generative-ai, DISCOVERIES.md | Slow review; only venue that allows linking the case study | ☐ |

**You**

| Venue | Link | Status |
|---|---|---|
| awesome-pakistani (github.com/usman2x/awesome-pakistani) | **Followed**, verified. Criterion: open-source work. Some PRs wait weeks | ☐ |

## 2. Community launches (rewrite in your own words)

Skip: r/QualityAssurance and r/softwaretesting (ban tool posts), r/n8n (requires public
workflow code), Lobsters (needs an invite, and new accounts can't self-promote for 70 days).

| When | Venue | Project | Status |
|---|---|---|---|
| After fixes 1 to 3 | Show HN | Sales Call Intelligence | ☐ |
| +2 days | r/LocalLLaMA (Showcase flair, disclose authorship) | Sales Call Intelligence | ☐ |
| Next Saturday | r/webdev "Showoff Saturday" | Proxy QA Browser | ☐ |
| Following Tuesday | Product Hunt (goes live 1:01 PM PKT) | Proxy QA Browser | ☐ |
| +2 days | n8n Community, "Built with n8n" | Video automations | ☐ |
| Week after | r/opensource (Promotional flair), r/ollama, Ministry of Testing feedback post | Proxy QA / Sales Call | ☐ |

Rules that apply everywhere: meet each subreddit's 9:1 rule with real comments first,
never post one project to two places on the same day, never ask for upvotes, and reply to
every comment. Show HN may be restricted for low-karma accounts; if it blocks you, email
hn@ycombinator.com.

## 3. Editorial (newsletters and media)

| Outlet | Pitch | When | Status |
|---|---|---|---|
| TechJuice (editors@techjuice.pk) | Scrap Exchange | After fix 4, with one real traction number | ☐ |
| ProPakistani (contact form, "News Tip") | Scrap Exchange | Same pitch, a few days later | ☐ |
| Node Weekly / JavaScript Weekly (editor@cooperpress.com) | Proxy QA Browser | Now | ☐ |
| Software Testing Weekly (tally.so/r/5BW4vN) | Proxy QA Browser | Now (prefers links under 2 weeks old; v2.1.0 shipped 29 Oct) or at the next release | ☐ |
| PyCoder's Weekly (pycoders.com/submit) | Sales Call Intelligence | After fix 1 | ☐ |
| Featured.com / HARO (free tier) | Expert answers: local LLMs, voice AI, Next.js | Ongoing, 15 min a day. Links your **main domain** directly | ☐ |
| Qwoted (free: 2 pitches a month) | Same | Ongoing | ☐ |
| Dawn Prism (prismatdawn@gmail.com) | Data-led feature on scrap prices across cities | Later, a bigger piece of work | ☐ |

Skipped: Console.dev (beta tools only), TLDR and Bytes (advertising only), the Next.js and
Electron showcases (closed), Changelog News (effectively inactive).

## 4. Profiles

| Platform | Where your link goes | Status |
|---|---|---|
| dev.to | Profile website plus links in syndicated articles (**followed**) | ☐ |
| Stack Overflow | Profile website (**followed at 2,000+ reputation**) | ☐ |
| Peerlist, daily.dev, Hashnode, Medium | Profile or article links (nofollow, discovery) | ☐ |
| Product Hunt maker profile | Website field (set before launching) | ☐ |
| Hugging Face | Profile homepage (useful for AI credibility) | ☐ |
| LinkedIn | Contact info: Website (Portfolio). Featured: portfolio plus 2 to 3 case studies. Each Project: its case study URL | ☐ |
| GitHub profile README | Replace with [github-profile-README.md](github-profile-README.md) | ☑ done 9 Nov |
| Upwork / Fiverr portfolio items | Link each to its case study | ☐ |
| Local: GDG Islamabad (event 23 Nov), AI Tinkerers Islamabad, DevOpsDays Islamabad | Speaker bios link your site | ☐ |

**Not for you:** Google Business Profile. Google requires in-person customer contact and
lists "online-only businesses" as ineligible, so a remote developer risks suspension.

## 5. Articles and syndication

1. Publish on ubaidbinwaris.com (the articles section and the `/feed.xml` RSS feed go live
   automatically once an article has text).
2. Search Console: URL Inspection, then "Request indexing". Wait until it says
   "URL is on Google".
3. **dev.to** (day 3 to 7): set `canonical_url` in front matter, or add `/feed.xml` under
   Dashboard, RSS Import Feeds, with "Mark the RSS source as canonical URL" ticked and
   "Replace self-referential links" unticked.
4. **Hashnode** (+2 days): post settings, "Are you republishing?", add the original URL.
5. **Medium** (+2 days): Stories, "Import a story" (sets the canonical and backdates it).
6. **LinkedIn**: no canonical support, so post a short excerpt that links to the article,
   never the full text.

Add "Originally published at ubaidbinwaris.com" with a link at the top of every copy.

## Never do

Buying links, paid "dofollow" upgrades, link exchanges, private blog networks, comment or
forum spam, keyword-stuffed anchors, bulk directory submissions. These are what Google's
link-spam rules penalise.

## Track progress monthly

Search Console, URL-prefix property for https://ubaidbinwaris.com/, then Links, then
"Top linking sites". New links take weeks to appear.
