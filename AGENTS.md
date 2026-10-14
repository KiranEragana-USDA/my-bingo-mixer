# Bingo Mixer Agent Guide

## Working Agreement

- Use Node.js 22+ and the scripts in [package.json](package.json): `npm run dev`, `npm run lint`, `npm run build`, and `npm test`.
- Run the focused validation for the files changed, then run the full relevant script before finishing.
- Keep changes scoped to the requested behavior. Preserve existing TypeScript, React, and Tailwind conventions.

## Project Shape

- [src/main.tsx](src/main.tsx) mounts the React app; [src/App.tsx](src/App.tsx) composes the start, game, and bingo-modal views.
- [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) owns game state, actions, and localStorage persistence.
- [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) contains pure board generation and bingo rules; keep rule changes covered by [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts).
- [src/data/questions.ts](src/data/questions.ts) owns question content, and [src/types/index.ts](src/types/index.ts) owns domain types.
- UI boundaries live in [src/components/](src/components/): `StartScreen`, `GameScreen`, `BingoBoard`, `BingoSquare`, and `BingoModal`.

## Constraints

- Treat the `bingo-game-state` localStorage key and storage version in `useBingoGame` as a compatibility contract. Update validation and tests together when the stored shape changes.
- The game currently assumes a complete 5x5 board. Update both implementation and tests if board dimensions or winning-line rules change.
- Preserve the GitHub Pages base path configured through `VITE_REPO_NAME`; avoid hardcoded root-relative asset URLs.
- App styling uses Tailwind CSS v4 with CSS-first tokens in [src/index.css](src/index.css). Read [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md) before changing Tailwind CSS.
- Keep app styles separate from the static workshop docs styles under [docs/](docs/).
- Strict TypeScript and ESLint settings reject unused symbols and parameters. Add focused tests when changing hooks, persistence, component behavior, or game transitions; current automated coverage is primarily pure logic.

## Existing Customizations

- Use [frontend-design/SKILL.md](.github/skills/frontend-design/SKILL.md) for frontend work and [setup/SKILL.md](.github/skills/setup/SKILL.md) for environment setup.
- Use [quiz-master.agent.md](.github/agents/quiz-master.agent.md) for question generation, [pixel-jam.agent.md](.github/agents/pixel-jam.agent.md) for UI implementation, and [ui-review.agent.md](.github/agents/ui-review.agent.md) for browser-based UI review.
- The TDD agents under [.github/agents/](.github/agents/) support red, green, refactor, and end-to-end TDD workflows.
- The test-gate hook is optional; it is inactive while only [test-gate.json.example](.github/hooks/test-gate.json.example) exists.

## Further Reading

- Project overview and prerequisites: [README.md](README.md)
- Workshop index: [workshop/GUIDE.md](workshop/GUIDE.md)
- Setup and context engineering: [workshop/01-setup.md](workshop/01-setup.md)
- Frontend design workflow: [workshop/02-design.md](workshop/02-design.md)
- Multi-agent and testing workflow: [workshop/04-multi-agent.md](workshop/04-multi-agent.md)