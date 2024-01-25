import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        '4xs': '160px',
        // => @media (min-width: 160px) { ... }
        '3xs': '240px',
        // => @media (min-width: 240px) { ... }
        '2xs': '320px',
        // => @media (min-width: 320px) { ... }
        'xs': '480px',
        // => @media (min-width: 480px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: '#228B22',
        secondary: '#663399',
        tertiary: '#424242',
        light: '#fffcf2',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
export default config;
