---
name: "Bingo Mixer Design Guide"
description: "Use when designing or modifying the Bingo Mixer frontend, including React components, app surfaces, responsive layouts, glassmorphism, gradients, motion, accessibility states, or Tailwind CSS v4 styling."
applyTo:
  - "src/components/**/*.tsx"
  - "src/index.css"
---

# Bingo Mixer Design Guide

## Visual Direction

- Preserve the Aurora Dusk visual language: deep indigo/plum atmosphere, cyan and fuchsia gradients, lime marked states, and amber winning states.
- Use translucent glass surfaces with restrained borders, backdrop blur, and layered shadows. Keep the background atmospheric without adding decorative blobs that compete with the game board.
- Use the existing self-contained typography approach. Do not add network font dependencies for routine UI changes.
- Keep the game board and prompts as the first-viewport focus. Avoid marketing-style hero sections, nested cards, or decorative UI that delays starting a round.

## Component Design

- Keep StartScreen, GameScreen, BingoBoard, BingoSquare, and BingoModal responsible for their existing UI boundaries. Put game rules and persistence in the hook/utilities instead of components.
- Preserve the 5x5 board, free-space behavior, `aria-pressed` states, and winning-square distinction unless the task explicitly changes game rules.
- Make interaction states obvious without relying on color alone: include visible focus rings, pressed/marked treatment, winning emphasis, and disabled free-space styling.
- Keep labels concise enough for bingo tiles. Design for long prompts and narrow screens rather than relying on truncation.
- Use semantic HTML for progress, output/status, buttons, and dialogs where appropriate. Dialogs must manage initial focus, keyboard dismissal, and focus restoration.

## Responsive And Motion Rules

- Validate both desktop and narrow mobile widths after visual changes. The 5x5 grid must not overflow horizontally or let prompt text overlap neighboring tiles.
- Give grid cells stable dimensions. On mobile, allow enough vertical room for multi-line prompts; on larger screens, preserve the compact square board rhythm.
- Use purposeful motion for entry, selection, progress, and Bingo celebration. Respect `prefers-reduced-motion` and avoid motion that blocks interaction.
- Keep tap targets comfortably interactive and ensure hover styles do not be the only feedback available to keyboard or touch users.

## Tailwind CSS v4

- Read [.github/instructions/tailwind-4.instructions.md](tailwind-4.instructions.md) before adding Tailwind styling.
- Define shared design tokens in the CSS-first `@theme` block or runtime variables in `:root`; do not introduce a legacy `tailwind.config.js`.
- Use current opacity syntax such as `bg-white/10` and existing project utilities. Keep app styling in [src/index.css](../../src/index.css) and component class names, separate from [docs/](../../docs/) styles.
- Avoid hardcoded root-relative asset URLs or font URLs; the app is deployed under a GitHub Pages base path.

## Validation

- After frontend changes, run focused diagnostics and `npm run lint`, then run `npm test` and `npm run build` before finishing.
- Exercise the start flow, board marking, progress feedback, Bingo modal, reset/back behavior, keyboard focus, and mobile layout in the running app when the change affects those surfaces.
