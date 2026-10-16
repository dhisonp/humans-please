# Humans Please: context for the reviewing agent

This is a handoff for reviewing and lightly refining an existing page. The user wants deeper editorial judgment within the current scope. Read this alongside the review prompt below, then inspect the actual files. Previous claims about tone are subjective judgments, not validation.

## Purpose and original voice

Humans Please is a small website someone sends instead of explaining why forwarding an untouched AI response is annoying. The target is a person who copies a coworker or friend’s message into AI and pastes the answer back without reading, thinking, editing, or adding an opinion.

The original brief supplied these central lines:

> I want to talk to a person.
>
> For all you know, I may be the loneliest office worker on Earth, starved of human connection, so please don’t make it worse.
>
> I talk to Claude often enough every night before bed.
>
> When I message you, I would like to hear from you.

The recurring joke is **I ALSO HAVE CLAUDE**. The sender could ask the model directly; they contacted a particular person because they wanted that person’s contribution. Other supplied jokes include “You are contributing network latency,” “Thank you, middleware,” and “Please do not become human middleware.”

The requested voice is annoyed, grumbled, exhausted, sarcastic, funny, and affectionate. It should sound like someone endured this one too many times and finally made a webpage. The user also likes exaggerated advertising language, particularly **“Scientists say this is possible.”** Keep that joke. A little apparent laziness is intentional; unreadable or broken implementation is not.

## Decisions that supersede the initial aesthetic brief

The earliest brief mentioned GeoCities, WordArt, boxes, and Microsoft Word 2002. Later feedback explicitly simplified that direction. Do not restore those discarded treatments.

- Keep a plain page with a centered maximum content width, good readability, and working mobile layouts.
- Remove navigation/header chrome, numbered section labels, fancy section typography, window controls, decorative containers, shadows, badges, and stamps. The current main title and small functional headings remain; review their usefulness without adding a new hierarchy.
- Use only the current Times serif and default system monospace. The current CSS stacks are `"Times New Roman", Times, serif` and `Monaco, monospace`. Monaco was the user’s preferred first choice. No webfonts or additional type styles.
- Keep the serif sizing as the reference. Small UI text should remain readable, including on mobile.
- Use an ordinary bulleted list for “Signs you may be doing this.” No checkboxes or cards.
- Keep the content short. The last reduction went from approximately 711 to 370 words before the footer disclosure was added; this is context, not a required word count.
- Use **AI** in general instructions and workflows. Keep **Claude** in personal jokes such as “I also have Claude” and the bedtime confession.
- Preserve and emphasize **“IMPORTANT! a public service announcement, apparently.”** It is currently a centered red notice with `!!! IMPORTANT !!!` above the second line.
- Include concrete “Instead of…” / “Just say…” examples. The current examples concern scheduling and giving feedback on a deadline.
- Explicitly welcome imperfect English, typos, uncertainty, and ordinary short replies. The behavior being mocked is the absence of personal judgment; formal writing or language ability should not become the target.
- Keep the bad and human workflows, with their sarcastic verdicts. They are side by side on desktop and stacked on narrow screens.

## Latest request: affectionate irony

The user clarified the next task’s goal:

1. Review whether the page satisfies its intention.
2. Add a relevant touch of irony acknowledging that the page is itself vibe-coded, with love.

The previous agent already added this footer line:

> also vibe-coded, with love. irony included at no extra charge.

Review its wording and placement. Refine or retain it; do not add a second disclosure by accident. The joke should be a brief self-own. It should fit the page’s acceptance of thoughtful AI assistance.

## Current implementation

The project is plain HTML, CSS, and vanilla JavaScript. There is no React, dependency installation, bundler, or build step.

| File                   | Role                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `dist/index.html`      | All page copy and semantic markup                            |
| `dist/style.css`       | Typography, spacing, basic colors, and responsive workflows  |
| `dist/script.js`       | Copy-link interaction and selectable-address fallback        |
| `dist/favicon.svg`     | Small site icon                                              |
| `README.md`            | Local serving instructions                                   |
| `AGENTS.md`            | Repository instructions, refreshed from `~/.codex/AGENTS.md` |
| `.openai/hosting.json` | Existing Sites identity and static hosting configuration     |

Serve locally from the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`. All browser assets are local. The copy-link button strips the URL fragment, writes to the clipboard, and reveals a focused, selectable address if clipboard access fails.

## Reference material already consulted

- [No Hello](https://nohello.net/en/): the user’s explicit reference for a direct, shareable explanation with examples.
- [Don’t Ask to Ask](https://dontasktoask.com/): short explanatory copy and concrete alternative behavior; also links to related etiquette pages.
- [LMGTFY](https://lmgtfy.com/): the “send this URL instead of explaining” genre.
- [Space Jam ’96](https://www.spacejam.com/1996/): an original early-web reference.
- [Berkshire Hathaway](https://www.berkshirehathaway.com/): plain text, conventional links, and minimal visual treatment.
- [Cameron’s World](https://www.cameronsworld.net/): a collection of early personal-web material, not an original single Y2K page.

The user requested inspiration from actual Y2K websites and the “google this” pages list. No particular list URL was supplied or conclusively identified. The previous agent consulted LMGTFY and related etiquette pages; do not claim a specific requested directory was reviewed. These references inform presentation and rhetorical structure; the current examples are illustrative, not actual chat records.

## Verification and environment limits

Previously completed checks:

- Prettier formatting and `node --check dist/script.js`.
- Source checks for balanced HTML, valid section targets, and existing asset references.
- Clipboard success and unavailable-clipboard fallback exercised with a small Node VM harness, including fragment removal. This was not a real-browser interaction test.
- Source checks for removed chrome, plain lists, required examples, font declarations, and AI wording.

**Still unverified:** actual browser rendering, Safari font selection, mobile overflow, keyboard interaction in a browser, and reactions from independent readers. A local Chrome headless preview attempt exited unsuccessfully. There are no successful screenshots or reader-test results to inherit. Reassess available browser tools in your environment; report limits honestly.

Hosting is also incomplete. A private Sites project was registered and its identity persisted as `appgprj_6ad10715aa848191b59ae83badb20993`. No successful source push or deployment occurred. Preparation hit the protected root `.git` path, then failed to resolve `git.chatgpt-team.site` from a temporary checkout. Reuse the existing identity if hosting becomes relevant. Temporary copies from that attempt are stale; the files in this repository are the current source. Never report an expected hosting URL as live.

## Review prompt

Review the existing Humans Please page against its original intention. Keep the scope small: improve the judgment and execution within this page.

Start with the original brief and the actual rendered page on desktop and mobile. Identify which specific lines and visual choices make it feel sarcastic, exhausted, affectionate, unserious, and slightly lazy. Identify anything that feels overproduced, repetitive, preachy, or confusing.

Check whether readers would understand that the complaint concerns forwarding unexamined AI output. Make sure the page welcomes AI assistance, imperfect English, short replies, disagreement, and “I don’t know.”

Read the copy aloud for timing. Make only the smallest edits justified by your review. Preserve the plain serif-and-monospace presentation and concrete everyday examples.

Then add or refine one brief, relevant acknowledgment that this page is itself vibe-coded, with love. Let it serve as an affectionate self-own.

Validate the rendered result with browser DevTools. If independent readers are available, ask them to explain the complaint, an acceptable alternative, and the irony without coaching. Report observed evidence separately from your editorial judgment, and state what remains unverified. Do not simulate independent reader reactions or contact people without authorization.
