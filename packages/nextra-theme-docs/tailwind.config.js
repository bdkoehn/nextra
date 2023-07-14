const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const makePrimaryColor =
  l =>
  ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(--nextra-primary-hue) 100% ${l}%)`
    }
    return `hsl(var(--nextra-primary-hue) 100% ${l}% / ${opacityValue})`
  }

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'nx-',
  content: [
    './src/**/*.tsx',
    '../nextra/src/icons/*.tsx',
    '../nextra/src/components/*.tsx'
  ],
  variants: {
    extend: {
      fontFamily: ['cond', 'prop', 'caps', 'lt', 'chapter', 'maze'],
    },
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Aleo', ...defaultTheme.fontFamily.sans],
      serif: ['ManualeVariable', ...defaultTheme.fontFamily.sans],
      cond: ['LMMonoLtCond10', 'sans-serif'],
      caps: ['Oswald', 'sans-serif'],
      prop: ['LMMonoProp10', 'sans-serif'],
      lt: ['LMMonoLt10', 'sans-serif'],
      chapter: ['"Rubik Mono One"', 'sans-serif'],
      maze: ['"Rubik Maze"', 'Fallback Outline'],
      mono: ['"M PLUS 1 Code"', ...defaultTheme.fontFamily.sans],
      ui: ['Source SansVariable', 'sans-serif'],
      boop: ['Vt323', 'mono'],
      gothic: ['League GothicVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    letterSpacing: {
      tight: '0.03em'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      yellow: colors.yellow,
      rose: {
        50: '#FFF1F2',
        100: '#FFE4E6',
        200: '#FECDD3',
        300: '#FDA4AF',
        400: '#FB7185',
        500: '#F43F5E',
        600: '#E11D48',
        700: '#BE123C',
        750: '#9F1239',
        800: '#881337',
        900: '#f8fafc'
      },
      amber: {
        50: '##FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F'
      },
      primary: {
        50: makePrimaryColor(97),
        100: makePrimaryColor(94),
        200: makePrimaryColor(86),
        300: makePrimaryColor(77),
        400: makePrimaryColor(66),
        500: makePrimaryColor(50),
        600: makePrimaryColor(45),
        700: makePrimaryColor(39),
        750: makePrimaryColor(35),
        800: makePrimaryColor(32),
        900: makePrimaryColor(24)
      }
    },
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 400,
        normal: 500,
        medium: 700,
        semibold: 500,
        bold: 700,
        extrabold: 700,
        black: 700,
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        primary: colors.sky,
        gray: colors.gray,
        dark: '#111',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.900'),
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '1.95rem',
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: `${theme('colors.primary.700')} !important`,
              },
              code: { color: theme('colors.primary.600') },
            },
            p: {
              fontWeight: '500',
              textAlign: 'justify',
            },
            h1: {
              fontWeight: '400',
              color: theme('colors.gray.800'),
              fontFamily: 'Rubik Mono One',
            },
            h2: {
              fontWeight: '400',
              color: theme('colors.gray.800'),
              fontFamily: 'Rubik Mono One',
            },
            h3: {
              fontWeight: '400',
              color: theme('colors.gray.800'),
              fontFamily: 'Rubik Mono One',
            },
            'h4,h5,h6': {
              fontWeight: '400',
              color: theme('colors.gray.800'),
              fontFamily: 'Rubik Mono One',
            },
            // 'sup a': {
            //   fontWeight: '700',
            //   fontFamily: 'LMMonoProp10',
            // },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.rose.600'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
              //fontFamily: 'LMMonoSlant10',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '500',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.amber.400'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '500',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    }
  },
  darkMode: ['class', 'html[class~="dark"]'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
