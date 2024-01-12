import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
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
      backgroundColor: {
        
      },
      colors: {
        nav: "#18222f",
        page: "#010408f7", 
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      
        bgAchive: "#252832",
        lavender: "#D6CADD",
        deep_blue: "#001F3F",
        deep_violet: '#8A2BE2', // Adjust the color code as needed
        blue: '#3490DC',
    
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        lightText: "#ccc",
        red:"red",
        background:"#050D17",
        glass:" rgba(255, 255, 0, 0.5)"
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 2s linear',
        'bounce-finite': 'bounce 3s',
        'hoverEffect': 'hoverEffect 2s',
        'wiggle': 'wiggle 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        hoverEffect: {
          '0%':{transform: 'scale(1)'},          
          '100%':{transform: 'scale(1.05)'},
        },
      }

    },


  },
  plugins: [],
}
export default config
