module.exports = {
  darkMode: 'class', // Enable dark mode via a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 6s linear infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'morph': 'morph 8s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'slide-left': 'slide-left 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.6s ease-out forwards',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), cursor-blink 0.75s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        glow: {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(99, 102, 241, 0.1)' 
          },
          '50%': { 
            'box-shadow': '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.2)' 
          },
        },
        morph: {
          '0%, 100%': {
            'border-radius': '40% 60% 70% 30% / 40% 40% 60% 50%',
          },
          '34%': {
            'border-radius': '70% 30% 50% 50% / 30% 30% 70% 70%',
          },
          '67%': {
            'border-radius': '100% 60% 60% 100% / 100% 100% 60% 60%',
          },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(120deg)' 
          },
          '66%': { 
            transform: 'translateY(-10px) translateX(-10px) rotate(240deg)' 
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'cursor-blink': {
          '0%, 50%': { 'border-color': 'transparent' },
          '51%, 100%': { 'border-color': 'currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E")',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      transformOrigin: {
        'center-center': 'center center',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '135': '135deg',
        '270': '270deg',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '108': '1.08',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
      dropShadow: {
        'glow': [
          '0 0px 20px rgba(99, 102, 241, 0.35)',
          '0 0px 65px rgba(99, 102, 241, 0.2)'
        ],
        'glow-sm': '0 0px 10px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0px 40px rgba(99, 102, 241, 0.35)',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.3)',
        'magical': '0 4px 15px 0 rgba(99, 102, 241, 0.3), 0 2px 10px 0 rgba(139, 92, 246, 0.2)',
        '3d': '0 12px 20px -10px rgba(99, 102, 241, 0.3), 0 6px 10px -5px rgba(99, 102, 241, 0.2)',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0,0,0,0.2)',
        },
        '.bg-mesh': {
          'background-image': `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
            radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
          `,
        },
      };
      addUtilities(newUtilities);
    },
  ],
}