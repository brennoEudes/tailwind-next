import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  User,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      {/* Passado os nomes dos componentes como referência em icon, a fim de evitar a repetição do cód e aproveitar NavItem */}
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={User} />
    </nav>
  )
}
