import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // "class" respeita a classe dark se ela existir no body e habilita o modo escuro do TW. Quando "media", usa a config do sistema operacional do computador do usuário.
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
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
      },
      // controlam as props de alteração das animações (ex: width, height, opacity, etc)
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' }, // inicia um pouco acima
          to: { opacity: '1', transform: 'translateY(0)' }, // termina na posição original
        },
        // slideUpAndFade: {
        //   from: { opacity: '1' },
        //   to: { opacity: '0' },
        // },
      },
      // controlam as animações em si (ex: easing, duration, delay, etc);
      animation: {
        slideDownAndFade: 'slideDownAndFade 1s cubic-bezier(0.16,1, 0.3,1)', // cubic-bezier é uma função de easing q define a velocidade em uma determinada parte da animação
        // slideUpAndFade: 'slideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
}
export default config
