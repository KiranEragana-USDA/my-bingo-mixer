interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: Readonly<StartScreenProps>) {
  return (
    <main className="relative flex min-h-full items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
      <div className="pointer-events-none absolute -left-24 top-12 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative w-full max-w-lg text-center">
        <div className="mb-8 animate-[fade-in_0.7s_ease-out]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/80">A social spark for any room</p>
          <h1 className="font-display text-5xl font-black tracking-tight text-white sm:text-7xl">Bingo Mixer</h1>
          <p className="mx-auto mt-4 max-w-sm text-lg leading-7 text-slate-200/80">Find a story. Start a conversation. Make a line.</p>
        </div>

        <section className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-left shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:p-8" aria-labelledby="how-to-play">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="how-to-play" className="font-display text-xl font-bold text-white">How to play</h2>
            <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">5 in a row</span>
          </div>
          <ol className="space-y-4 text-sm leading-6 text-slate-200/85">
            <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fuchsia-300/20 font-bold text-fuchsia-100">1</span><span>Find someone who matches a square.</span></li>
            <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/20 font-bold text-cyan-100">2</span><span>Ask their story, then mark the square.</span></li>
            <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-300/20 font-bold text-lime-100">3</span><span>Connect five conversations in a row.</span></li>
          </ol>
        </section>

        <button
          onClick={onStart}
          className="group mt-7 w-full rounded-2xl border border-white/30 bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-950/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-cyan-400/25 active:translate-y-0 active:scale-[0.99]"
        >
          <span>Start a round</span>
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
        </button>
        <p className="mt-4 text-xs text-slate-300/60">The best squares are the ones that start a story.</p>
      </div>
    </main>
  );
}
