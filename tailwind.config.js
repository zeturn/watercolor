// 通过 CSS 变量动态生成调色板，便于主题与暗色模式切换
const generatePalette = (name) => {
  const shades = ['50','100','200','300','400','500','600','700','800','900','950']
  return Object.fromEntries(shades.map((shade) => [shade, `var(--wc-${name}-${shade})`]))
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./stories/**/*.{js,ts,jsx,tsx,vue}",
    "./.storybook/**/*.{js,ts,jsx,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: generatePalette('primary'),
        secondary: generatePalette('secondary'),
        accent: generatePalette('accent'),
        neutral: {
          0: 'var(--wc-neutral-0)',
          ...generatePalette('neutral'),
        },
        success: generatePalette('success'),
        warning: generatePalette('warning'),
        error: generatePalette('error'),
        info: generatePalette('info'),
        danger: generatePalette('danger'),
        purple: generatePalette('purple'),
        orange: generatePalette('orange'),
        cyan: generatePalette('cyan'),
        pink: generatePalette('pink'),
        teal: generatePalette('teal'),
        indigo: generatePalette('indigo'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      boxShadow: {
        'focus': '0 0 0 2px var(--wc-primary-500)',
        'hover': '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
} 