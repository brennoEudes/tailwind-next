export default function Home() {
  return (
    <div className="p-4 bg-slate-400 text-slate-200 h-screen"> {/* consegue aplicar nas classes as extensões definidas em twconfig */}
      <h1 className="font-bold text-5xl flex items-center gap-3 text-brenno before:w-0.5 before:h-8 before:bg-sky-500 before:flex ">Hello, Tailwind!</h1>
      <h2 className="">Hello, Tailwind!</h2>
      <h2 className="">Hello, Tailwind!</h2>
      <button disabled className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-700 disabled:bg-opacity-60 disabled:hover disabled:cursor-not-allowed">
        Sign In
      </button>
    </div>
  );
}
