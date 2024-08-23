'use client' // trata JS no client-side. Fizemos isso pq o page.tsx é um arquivo que roda no nextJS, ou seja, no server-side.

import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean // indica aba atual ou não
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      /* TW + Radix: prop data-state (e outras) podem ser custmomizadas. Aqui, mudamos a cor quando o state for active. */
    >
      <span className="">{title}</span>
      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
      {/* TW: p/ valores negativos, usamos o - na frente */}
    </Tabs.Trigger>
  )
}
