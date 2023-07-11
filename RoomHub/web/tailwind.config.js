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
      },
    },
  },
  plugins: [],
}
