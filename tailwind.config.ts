import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      backgroundColor: {
        cards: '#1F2223',
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
        monoton: ['var(--font-monoton)', 'cursive'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(5, 150, 105, 0.4)',
      },
      
    },
  },
  plugins: [],
};
export default config;
