import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333d5c',
        secondary: '#45b29d',
        tertiary: '#efc94c',
        white: '#f5f5f5',
        black: '#0f0f0f',
        'tertiary-lighter': '#F8D565',
        'background-color': '#efefef',
        'dark-blue': '#0a1118',
        'bw-black': '#000000',
        'bw-white': '#ffffff',
        'gray-600': '#545454',
        'gray-500': '#757575',
        'gray-400': '#afafaf',
        'gray-200': '#e2e2e2',
        'gray-100': '#eeeeee',
        'gray-50': '#f6f6f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['var(--font-openSans)'],
    },
  },
  plugins: [],
};
export default config;
