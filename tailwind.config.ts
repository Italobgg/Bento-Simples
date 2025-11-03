// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c', // Um cinza-azulado bem escuro (Quase preto)
        'dark-card': '#2d3748', // Cor dos cards (Um tom acima do fundo)
        'brand-green': '#38A169', // Verde principal (Estilo "tech")
        'brand-gray': '#A0AEC0', // Texto secundário (cinza claro)
        'brand-light': '#F7FAFC', // Texto principal (quase branco)
      },
      backgroundImage: {
        // O gradiente sutil que você mencionou
        // Um gradiente radial sutil que emana do centro
        'dark-gradient': 'radial-gradient(circle, rgba(45,55,72,0.5) 0%, rgba(26,32,44,1) 75%)',
      },
    },
  },
  plugins: [],
}
export default config