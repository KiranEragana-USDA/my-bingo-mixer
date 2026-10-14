import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: Readonly<BingoBoardProps>) {
  return (
    <div className="w-full max-w-2xl rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-indigo-950/35 backdrop-blur-xl sm:p-3">
      <div className="grid min-h-[22rem] w-full grid-cols-5 gap-1.5 sm:aspect-square sm:min-h-0 sm:gap-2">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
