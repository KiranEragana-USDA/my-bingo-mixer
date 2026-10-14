import { useEffect, useRef } from 'react';

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: Readonly<BingoModalProps>) {
  const dismissButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dismissButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
        return;
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        dismissButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/65 p-4 backdrop-blur-md">
      <dialog open className="m-0 w-full max-w-sm rounded-[2rem] border border-white/25 bg-white/15 p-7 text-center text-white shadow-2xl shadow-black/40 backdrop-blur-2xl animate-[pop-in_0.4s_ease-out]" aria-labelledby="bingo-title">
        <div className="mb-4 text-5xl" aria-hidden="true">*</div>
        <h2 id="bingo-title" className="font-display mb-2 text-4xl font-black text-amber-200">BINGO!</h2>
        <p className="mb-6 text-slate-200/80">You connected five conversations.</p>
        
        <button
          ref={dismissButtonRef}
          onClick={onDismiss}
          className="w-full rounded-xl border border-white/30 bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-950/30 transition hover:brightness-110 active:scale-[0.98]"
        >
          Keep the momentum
        </button>
      </dialog>
    </div>
  );
}
