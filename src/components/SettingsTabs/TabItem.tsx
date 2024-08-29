'use client' // trata JS no client-side. Fizemos isso pq o page.tsx é um arquivo que roda no nextJS, ou seja, no server-side.

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean // indica aba atual ou não
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
      /* TW + Radix: prop data-state (e outras) podem ser custmomizadas. Aqui, mudamos a cor quando o state for active. */
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {/* TW: ring-offset cria um espaço entre o elemento e o anel; 
        Focus = estilo quando o usuário clicar, já o visible = quando a navegacão for pelo teclado */}
        {title}
      </span>
      {/* TW: group permite ao elemento interno receber o foco quando o pai tb o receber */}
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
      {/* TW: p/ valores negativos, usamos o - na frente */}
    </Tabs.Trigger>
  )
}
