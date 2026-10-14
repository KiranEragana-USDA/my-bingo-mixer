import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: Readonly<GameScreenProps>) {
  const markedCount = board.filter((square) => square.isMarked && !square.isFreeSpace).length;
  const progressPercent = Math.round((markedCount / 24) * 100);
  let momentumMessage = 'Every square is an excuse to meet someone new.';
  if (markedCount === 0) {
    momentumMessage = 'Find your first match to get the room moving.';
  } else if (markedCount >= 12) {
    momentumMessage = 'You are close. Keep the conversations flowing.';
  }

  return (
    <main className="relative flex min-h-full flex-col overflow-hidden px-3 py-3 sm:px-6 sm:py-5">
      <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />

      <header className="relative mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-3 py-3 shadow-lg shadow-indigo-950/20 backdrop-blur-xl sm:px-5">
        <button
          onClick={onReset}
          className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-200/75 transition hover:bg-white/10 hover:text-white active:scale-95"
        >
          <span aria-hidden="true">&lt;-</span> Back
        </button>
        <h1 className="font-display text-lg font-black tracking-tight text-white sm:text-xl">Bingo Mixer</h1>
        <div className="w-[4.5rem]" aria-hidden="true" />
      </header>

      <section className="relative mx-auto mt-4 flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-5" aria-label="Round progress">
        <div>
          <p className="text-sm font-semibold text-white">Find your people</p>
          <p className="mt-0.5 text-xs text-slate-300/70">{momentumMessage}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display text-xl font-black text-cyan-200">{markedCount}<span className="text-sm font-semibold text-slate-300/60"> / 24</span></p>
          <progress className="mt-1 block h-1.5 w-20 overflow-hidden rounded-full bg-white/10 accent-cyan-300 sm:w-28" aria-label="Marked squares" value={markedCount} max={24}>
            <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
          </progress>
        </div>
      </section>

      {hasBingo && (
        <output className="relative mx-auto mt-3 block w-full max-w-5xl rounded-2xl border border-amber-200/40 bg-amber-300/15 px-4 py-3 text-center text-sm font-bold text-amber-100 shadow-lg shadow-amber-950/20 backdrop-blur-md">
          <span aria-hidden="true">*</span> BINGO! You connected a line. <span aria-hidden="true">*</span>
        </output>
      )}

      <div className="relative flex flex-1 items-center justify-center py-5 sm:py-8">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </main>
  );
}
