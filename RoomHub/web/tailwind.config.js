/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'found' : "url('https://as1.ftcdn.net/v2/jpg/05/23/57/76/1000_F_523577655_GJLIdX3s9n26qU3Ai1ixJ1ANDKrkG82t.jpg')",
        'office' : "url('https://t4.ftcdn.net/jpg/01/89/97/71/360_F_189977154_OmQ4wKnrW3Rze0iJsVzYXYkL4UVzdo1s.jpg')",
        'random' : "url('https://source.unsplash.com/random?wallpapers')",
        'login' : "url('https://images.unsplash.com/photo-1597839219216-a773cb2473e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2ODk3NzY5ODY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
        'register' : "url('https://images.unsplash.com/photo-1492573637402-25691cd9eac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2ODk4MDE2Njc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
        'accept' : "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/In-the-dark.svg/1024px-In-the-dark.svg.png')",
      },
      filter: {
        'custom': 'invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(240deg)',
        'customr': 'invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(20deg)',
      },
      fontFamily:{
        'comic' : 'Comic Sans MS, cursive',
      },
      boxShadow:{
        'newShadow' : '3px 3px 3px',
        'secondShadow' : '2px 2px 2px',
      }
    },
  },
  plugins: [],
}
