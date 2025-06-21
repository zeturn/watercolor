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
        // 主色板 - 蓝紫色 → 使用 CSS 变量
        primary: {
          50: 'var(--wc-primary-50)',
          100: 'var(--wc-primary-100)',
          200: 'var(--wc-primary-200)',
          300: 'var(--wc-primary-300)',
          400: 'var(--wc-primary-400)',
          500: 'var(--wc-primary-500)',
          600: 'var(--wc-primary-600)',
          700: 'var(--wc-primary-700)',
          800: 'var(--wc-primary-800)',
          900: 'var(--wc-primary-900)'
        },
        // 次色板 - 荧光绿色
        secondary: {
          50: 'var(--wc-secondary-50)',
          100: 'var(--wc-secondary-100)',
          200: 'var(--wc-secondary-200)',
          300: 'var(--wc-secondary-300)',
          400: 'var(--wc-secondary-400)',
          500: 'var(--wc-secondary-500)',
          600: 'var(--wc-secondary-600)',
          700: 'var(--wc-secondary-700)',
          800: 'var(--wc-secondary-800)',
          900: 'var(--wc-secondary-900)'
        },
        // 强调色 - 明亮黄色
        accent: {
          50: 'var(--wc-accent-50, #FFFEF0)',
          100: 'var(--wc-accent-100, #FFF9D0)',
          200: 'var(--wc-accent-200, #FFF0A1)',
          300: 'var(--wc-accent-300, #FFE673)',
          400: 'var(--wc-accent-400, #FFDC50)',
          500: 'var(--wc-accent-500, #FFCC16)',
          600: 'var(--wc-accent-600, #DBAA10)',
          700: 'var(--wc-accent-700, #B78A0B)',
          800: 'var(--wc-accent-800, #936B07)',
          900: 'var(--wc-accent-900, #7A5504)'
        },
        // 中性色
        neutral: {
          0: 'var(--wc-neutral-0)',
          50: 'var(--wc-neutral-50)',
          100: 'var(--wc-neutral-100)',
          200: 'var(--wc-neutral-200)',
          300: 'var(--wc-neutral-300)',
          400: 'var(--wc-neutral-400)',
          500: 'var(--wc-neutral-500)',
          600: 'var(--wc-neutral-600)',
          700: 'var(--wc-neutral-700)',
          800: 'var(--wc-neutral-800)',
          900: 'var(--wc-neutral-900)',
          950: 'var(--wc-neutral-950)'
        },
        // 语义色彩 Success / Warning / Error / Info / Danger 均改为 CSS 变量
        success: {
          50: 'var(--wc-success-50)',
          100: 'var(--wc-success-100)',
          200: 'var(--wc-success-200)',
          300: 'var(--wc-success-300)',
          400: 'var(--wc-success-400)',
          500: 'var(--wc-success-500)',
          600: 'var(--wc-success-600)',
          700: 'var(--wc-success-700)',
          800: 'var(--wc-success-800)',
          900: 'var(--wc-success-900)'
        },
        warning: {
          50: 'var(--wc-warning-50)',
          100: 'var(--wc-warning-100)',
          200: 'var(--wc-warning-200)',
          300: 'var(--wc-warning-300)',
          400: 'var(--wc-warning-400)',
          500: 'var(--wc-warning-500)',
          600: 'var(--wc-warning-600)',
          700: 'var(--wc-warning-700)',
          800: 'var(--wc-warning-800)',
          900: 'var(--wc-warning-900)'
        },
        error: {
          50: 'var(--wc-error-50)',
          100: 'var(--wc-error-100)',
          200: 'var(--wc-error-200)',
          300: 'var(--wc-error-300)',
          400: 'var(--wc-error-400)',
          500: 'var(--wc-error-500)',
          600: 'var(--wc-error-600)',
          700: 'var(--wc-error-700)',
          800: 'var(--wc-error-800)',
          900: 'var(--wc-error-900)'
        },
        info: {
          50: 'var(--wc-info-50)',
          100: 'var(--wc-info-100)',
          200: 'var(--wc-info-200)',
          300: 'var(--wc-info-300)',
          400: 'var(--wc-info-400)',
          500: 'var(--wc-info-500)',
          600: 'var(--wc-info-600)',
          700: 'var(--wc-info-700)',
          800: 'var(--wc-info-800)',
          900: 'var(--wc-info-900)'
        },
        danger: {
          50: 'var(--wc-danger-50)',
          100: 'var(--wc-danger-100)',
          200: 'var(--wc-danger-200)',
          300: 'var(--wc-danger-300)',
          400: 'var(--wc-danger-400)',
          500: 'var(--wc-danger-500)',
          600: 'var(--wc-danger-600)',
          700: 'var(--wc-danger-700)',
          800: 'var(--wc-danger-800)',
          900: 'var(--wc-danger-900)'
        },
        // 其它拓展色板
        purple: {
          50: 'var(--wc-purple-50)',
          100: 'var(--wc-purple-100)',
          200: 'var(--wc-purple-200)',
          300: 'var(--wc-purple-300)',
          400: 'var(--wc-purple-400)',
          500: 'var(--wc-purple-500)',
          600: 'var(--wc-purple-600)',
          700: 'var(--wc-purple-700)',
          800: 'var(--wc-purple-800)',
          900: 'var(--wc-purple-900)'
        },
        orange: {
          50: 'var(--wc-orange-50, #fff7ed)',
          100: 'var(--wc-orange-100, #ffedd5)',
          200: 'var(--wc-orange-200, #fed7aa)',
          300: 'var(--wc-orange-300, #fdba74)',
          400: 'var(--wc-orange-400, #fb923c)',
          500: 'var(--wc-orange-500, #f97316)',
          600: 'var(--wc-orange-600, #ea580c)',
          700: 'var(--wc-orange-700, #c2410c)',
          800: 'var(--wc-orange-800, #9a3412)',
          900: 'var(--wc-orange-900, #7c2d12)'
        },
        cyan: {
          50: 'var(--wc-cyan-50, #ecfeff)',
          100: 'var(--wc-cyan-100, #cffafe)',
          200: 'var(--wc-cyan-200, #a5f3fc)',
          300: 'var(--wc-cyan-300, #67e8f9)',
          400: 'var(--wc-cyan-400, #22d3ee)',
          500: 'var(--wc-cyan-500, #06b6d4)',
          600: 'var(--wc-cyan-600, #0891b2)',
          700: 'var(--wc-cyan-700, #0e7490)',
          800: 'var(--wc-cyan-800, #155e75)',
          900: 'var(--wc-cyan-900, #164e63)'
        },
        pink: {
          50: 'var(--wc-pink-50)',
          100: 'var(--wc-pink-100)',
          200: 'var(--wc-pink-200)',
          300: 'var(--wc-pink-300)',
          400: 'var(--wc-pink-400)',
          500: 'var(--wc-pink-500)',
          600: 'var(--wc-pink-600)',
          700: 'var(--wc-pink-700)',
          800: 'var(--wc-pink-800)',
          900: 'var(--wc-pink-900)'
        },
        teal: {
          50: 'var(--wc-teal-50)',
          100: 'var(--wc-teal-100)',
          200: 'var(--wc-teal-200)',
          300: 'var(--wc-teal-300)',
          400: 'var(--wc-teal-400)',
          500: 'var(--wc-teal-500)',
          600: 'var(--wc-teal-600)',
          700: 'var(--wc-teal-700)',
          800: 'var(--wc-teal-800)',
          900: 'var(--wc-teal-900)'
        },
        indigo: {
          50: 'var(--wc-indigo-50)',
          100: 'var(--wc-indigo-100)',
          200: 'var(--wc-indigo-200)',
          300: 'var(--wc-indigo-300)',
          400: 'var(--wc-indigo-400)',
          500: 'var(--wc-indigo-500)',
          600: 'var(--wc-indigo-600)',
          700: 'var(--wc-indigo-700)',
          800: 'var(--wc-indigo-800)',
          900: 'var(--wc-indigo-900)'
        }
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