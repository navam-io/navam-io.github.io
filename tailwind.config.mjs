/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Text colors for dark theme
        text: {
          primary: '#F2F2F2',
          secondary: '#A0A0A0',
          light: '#6B6B6B',
        },
      },
      fontFamily: {
        display: [
          'Bricolage Grotesque',
          'DM Sans',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        body: [
          'DM Sans',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      spacing: {
        xs: '0.5rem',   // 8px
        sm: '1rem',     // 16px
        md: '2rem',     // 32px
        lg: '4rem',     // 64px
        xl: '6rem',     // 96px
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
        md: '0 4px 16px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        // Dark theme gradient utilities
        'gradient-primary': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #042f2e 0%, #0c4a6e 100%)',
        'gradient-footer': 'linear-gradient(135deg, #030712 0%, #0a0a0a 100%)',
        'gradient-body': 'linear-gradient(180deg, #030712 0%, #0a0a0a 100%)',
        // Text gradients
        'gradient-text': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
      backdropBlur: {
        DEFAULT: '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
