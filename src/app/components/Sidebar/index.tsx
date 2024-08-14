import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  User,
  Search,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
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
      <nav className="space-y-0.5">
        {/* Passado os nomes dos componentes como referência em icon, a fim de evitar a repetição do cód e aproveitar NavItem */}
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={User} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
      </div>
    </aside>
  )
}
