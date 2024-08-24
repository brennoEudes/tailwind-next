import { ComponentProps } from 'react'

// PATTERN DE COMPOSIÇÃO DE COMPONENTES
// É quando dividmos um componente em partes menores, cada uma com uma responsabilidade específica
// a fim de trazer uma maior acessibilidade e reutilização de código.

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      // flex-1: 1 1 0%; em q 1 cresce o máx do espaço disponível, 1 encolhe o máx p/ se adaptar quando houve outro elemnto e 0% largura mín
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      placeholder="Search"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" // TW tb vem com sombras padrões! (shadow)
      {...props}
    />
  )
}
