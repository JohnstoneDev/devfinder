/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global : ['IBM Plex Mono', 'monospace'],
    },
    fontSize : {
    'section' : ['24px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '600',
      }
     ],
   'button' : ['20px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '500',
      }
    ],
    'regular' : ['18px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
    'small' : ['16px', {
      lineHeight : '28px',
      letterSpacing : '0px',
      fontWeight : '400',
    }
  ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors : {
      'nord' : '#132043',
      'blue' : '#0E21A0',
      'pinkish' : '#E5E9F0',
      'lighter-nord' : '#04364A',
      'light-pinkish' : '#FIB4BB',
      'very-light-pink': '#FDFOFO',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
