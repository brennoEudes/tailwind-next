'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput() // pega o id enviado pelo root

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
  // sr-only: aplica estilos visíveis somente ao crowler. Estratégia p/ ñ estilizar diretamente o input de arquivo, q será feito pela label */
}
