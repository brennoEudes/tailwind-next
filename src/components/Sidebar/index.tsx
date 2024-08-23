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
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      {/* TW (space-y) define espaçamento interno dos elementos filhos da div principal */}
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl />
      </InputRoot>

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
        <div className="h-px bg-zinc-200" />{' '}
        {/* TW (h-px) define altura de 1px */}
        <Profile />
      </div>
    </aside>
  )
}
