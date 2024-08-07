export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 h-screen flex flex-col items-center text-center dark:bg-slate-900 dark:text-slate-100"> {/* TW consegue aplicar nas classes as extensões definidas em twconfig */}
    <div className="max-w-2xl">
    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Rapidly build modern websites without ever leaving your HTML.</h1>
      <p className="mt-4 dark:text-slate-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
      <button className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 text-white enabled:hover:bg-sky-700 disabled:bg-opacity-60 disabled:hover disabled:cursor-not-allowed dark:text-sky-950">
        Sign In
      </button>
    </div>
    </div>
  );
}

// Anotações
/* O TW por padrão parte das especificações para mobile! (mobile first) */
/* Evite usar valores arbitrários fora do padrão do TW (ex: max-w-[700px]. Crie o atalho em extends no tailwind/config e aplique no código (ex: colors brenno) */