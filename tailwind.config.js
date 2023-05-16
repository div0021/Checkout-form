/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        "micro":'300px',
        "mini":"388px",
        "tiny":"400px",
        "xs":"520px",
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      fontFamily:{
        "mont":'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}

