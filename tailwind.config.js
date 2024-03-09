/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
        screens: {
          'tablet': {'min': '768px', 'max': '1024px'}, // Custom tablet breakpoint
          'phone': {'max': '767px'}, // Custom phone breakpoint
        
      }
    },
  },
  plugins: [],
}

