'use client'

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
  Menu,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      {/* TW (space-y) define espaçamento interno dos elementos filhos da div principal */}

      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex" // TW: lembrar da prop "data" do radix p/ definir a visibilidade do conteúdo
      >
        {/* forceMount força a montagem do conteúdo no início */}
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
          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />{' '}
          {/* TW (h-px) define altura de 1px */}
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
