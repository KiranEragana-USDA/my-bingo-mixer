import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: Readonly<BingoSquareProps>) {
  const baseClasses =
    'relative flex min-h-0 select-none items-center justify-center overflow-hidden rounded-xl border p-1 text-center text-[0.58rem] font-medium leading-tight transition-all duration-200 sm:min-h-[4.8rem] sm:p-2 sm:text-xs';

  let stateClasses = 'border-white/20 bg-white/10 text-slate-100/85 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/20 active:scale-95';
  if (square.isMarked && isWinning) {
    stateClasses = 'border-amber-200/80 bg-gradient-to-br from-amber-200/90 to-orange-300/80 text-amber-950 shadow-lg shadow-amber-300/20';
  } else if (square.isMarked) {
    stateClasses = 'border-lime-200/60 bg-gradient-to-br from-lime-200/85 to-emerald-300/75 text-emerald-950 shadow-md shadow-emerald-950/20';
  }

  const freeSpaceClasses = square.isFreeSpace ? 'border-cyan-200/70 bg-cyan-200/20 font-bold text-cyan-100 sm:text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 text-xs font-black text-emerald-800" aria-hidden="true">+</span>
      )}
    </button>
  );
}
