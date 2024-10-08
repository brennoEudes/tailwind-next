import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants' // TW: tailwind-variants; criamos variantes quando precisamos estilizar um componente de diversas formas diferentes!

const button = tv({
  // base define o estilo base do componente (o que todos vão ter!)
  // podemos criar um array e quebrar em linhas p/organizar melhor
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active-opcity-80',
  ],

  // variantes definem customizações
  variants: {
    // Dica: chamar a variante de "variante", pois ela muda um CONJUNTO de estilos.
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },

  // defaultVariants define a variante padrão
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> // extendemos as props do button com as variantes p/ inseri-las nos btns

export function Button({ variant, className, ...props }: ButtonProps) {
  // tb recebe uma classname externa, graçar ao TW variants
  return <button {...props} className={button({ variant, className })} /> // classname agora invoca a fcn button
}
