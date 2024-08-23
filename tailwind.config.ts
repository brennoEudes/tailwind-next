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
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr', // evite usar px, use valores relativos!
        profile: 'min-content 1fr min-content', // a coluna do meio é a única q cresce!
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)', // define o tamanho mínimo e máximo das colunas!
      },
      borderWidth: {
        6: '6px', // tivemos q criar pois o TW não tem por padrão!
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },

    plugins: [],
  },
}
export default config
