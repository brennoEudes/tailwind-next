export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      {' '}
      {/* TW consegue aplicar nas classes as extensões definidas em twconfig */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 dark:text-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <button className="disabled:hover mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-opacity-60 dark:text-sky-950">
          Sign In
        </button>
      </div>
    </div>
  )
}

// Anotações:
// O TW por padrão parte das especificações para mobile! (mobile first)
// Evite usar valores arbitrários fora do padrão do TW (ex: max-w-[700px]. Crie o atalho em extends no tailwind/config e aplique no código (ex: colors brenno)
// TW possui uma ordem semântica: classes estruturais, classes de estilo (cores, fontes) e depois classes de seletores (ex: hover etc). Não esqueça de >reload p/ resetar o VSCode no final.
