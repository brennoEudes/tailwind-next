import { Logo } from './Logo'
import { Search } from 'lucide-react'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      {/* TW (space-y) define espaçamento interno dos elementos filhos da div principal */}
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        {/* TW tb vem com sombras padrões! (shadow) */}
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          // flex-1: 1 1 0%; em q 1 cresce o máx do espaço disponível, 1 encolhe o máx p/ se adaptar quando houve outro elemnto e 0% largura mín
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <MainNavigation />
    </aside>
  )
}
