import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />
  // sr-only: aplica estilos visíveis somente ao crowler. Estratégia p/ ñ estilizar diretamente o input de arquivo, q será feito pela label */
}
