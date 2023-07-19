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
      },
      filter: {
        'custom': 'invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(240deg)',
        'customr': 'invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(20deg)',
      },
      fontFamily:{
        'comic' : 'Comic Sans MS, cursive',
      },
    },
  },
  plugins: [],
}
