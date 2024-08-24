'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        {/* Lembrar q o radix cria automaticamente os data atributes: "data-[]:algumaCoisa" */}
        <SelectPrimitive.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        {/* Portal react permite q um elemento seja alocado em outro local da tela */}
        <SelectPrimitive.Content
          side="bottom" // abra para baixo
          position="popper"
          sideOffset={8} // faz com q o select abra um pouco mais distante do topo
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          // Lembrar q o radix tb cria variáveis css: --radix-select-trigger-width. O TW entende isso e não precisar usar o "var()" q indica varieaveis no CSS.
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brasil
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                United States
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
