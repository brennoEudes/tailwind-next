import type { Config } from 'tailwindcss'

const config: Config = {
  // content: é a única informação obrigatória para o TW! É um array c/ vários caminhos para arquivos com possíveis classes do tailwind css.
  content: [
    './src/**/*.tsx', // no caso, informamos q classes TW estarão em arquivos .tsx dentro da pasta src
  ],

  // theme: é a forma que podemos ESTENDER as definições do TW, ou seja, adicionar novas classes, novas cores, novos tamanhos, etc.
  // Lembrando q o TW reseta quase todos os estilos dos elementos HTML/
  theme: {
    extend: {
      colors: {
        brenno: '#334322',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr', // evite usar px, use valores relativos!
        profile: 'min-content 1fr min-content', // a coluna do meio é a única q cresce!
      },
    },
    plugins: [],
  },
}
export default config
