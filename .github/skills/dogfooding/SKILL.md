---
name: dogfooding
description: "Use when critically testing the running Bingo Mixer app as a first-time user, especially for browser QA, interaction flow, accessibility, mobile usability, and how fun or motivating the experience feels."
user-invocable: true
---

# Dogfood the Bingo Mixer

Evaluate the app like a real participant, not just like a test runner. Do not modify application files unless the user explicitly asks for fixes.

## Workflow

1. Open the running app in the integrated browser.
2. Start from the first screen when possible. If localStorage restores an existing game, note that and test the reset/back path.
3. Read the instructions as a first-time user. Record whether the goal and next action are obvious without outside explanation.
4. Play a complete representative round:
   - Select several ordinary squares.
   - Check selected, hover, focus, and disabled/free-space states.
   - Complete a row, column, or diagonal when feasible.
   - Inspect the win state, modal, animation, and next action.
5. Test recovery and persistence:
   - Dismiss or continue from the win state.
   - Return to the start screen and begin another round if available.
   - Refresh the page and verify whether state persistence is intentional and understandable.
6. Check keyboard and accessibility behavior:
   - Navigate with Tab and activate controls with Enter or Space.
   - Confirm visible focus and useful accessible names.
   - Check dialogs for dialog semantics, focus placement, focus trapping, and focus restoration.
7. Check a narrow mobile viewport when browser tooling supports resizing. Look for readable prompts, usable tap targets, clipping, and wasted space.
8. Report evidence-based findings under the rubric below.

## Fun and usability rubric

Rate the experience from 1–10 and explain the score briefly.

### What is fun

Look for:

- Prompts that naturally start conversations.
- A clear, fast interaction loop.
- Satisfying selection feedback.
- Visible progress and anticipation.
- A rewarding, celebratory Bingo moment.
- Reasons to replay, such as varied boards or escalating challenge.

### Friction and risks

Call out:

- Confusing instructions or unclear button labels.
- Dead ends, accidental resets, or lost progress.
- Weak feedback between actions and Bingo.
- Text that is hard to scan on a board or mobile viewport.
- Accessibility failures, especially modal focus and keyboard behavior.
- Social-design problems, such as encouraging silent tapping instead of talking to people.

## Reporting format

Keep the report concise and specific:

1. **Verdict:** fun score and one-sentence summary.
2. **What works:** three to five observed strengths.
3. **Friction / bugs:** each item includes severity (`High`, `Medium`, or `Low`) and concrete evidence.
4. **Top three improvements:** prioritize changes by likely impact on fun, usability, or inclusion.
5. **Scope:** state which flows, viewport sizes, and browser checks were actually performed.

Separate observed behavior from recommendations. Do not claim a check was performed if browser tooling was unavailable.
