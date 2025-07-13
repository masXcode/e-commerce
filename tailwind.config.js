/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    // screens
    screens: {
      vsm: "480px",     // ✅ شاشات من 450px وأكبر
      sm: "640px",      // الشاشات العادية (الموجودة أصلًا)
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },


    // container
    container: {
      center:true,

      // padding
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

