

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         neonGreen: "var(--neon-green)",
//         deepPurple: "var(--deep-purple)",
//         hotPink: "var(--hot-pink)",
//         electricBlue: "var(--electric-blue)",
//         gold: "var(--gold)",
//         silver: "var(--silver)",
//         darkGray: "var(--dark-gray)",
//         lightGray: "var(--light-gray)",
//       },
//       boxShadow: {
//         neonGreen: "0 0 15px var(--neon-green)",
//         hotPink: "0 0 20px var(--hot-pink)",
//       },
//     },
//   },
//   plugins: [],
// };




module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "var(--neon-green)",
        deepPurple: "var(--deep-purple)",
        hotPink: "var(--hot-pink)",
        electricBlue: "var(--electric-blue)",
        gold: "var(--gold)",
        silver: "var(--silver)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
        // New colors for the glamour theme
        glamPink: "#FF69B4",
        glamPurple: "#8A2BE2",
        glamBlue: "#1E90FF",
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        neonGreen: "0 0 15px var(--neon-green)",
        hotPink: "0 0 20px var(--hot-pink)",
        glam: "0 0 25px rgba(255, 105, 180, 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: .5 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glitter': 'url("/path/to/glitter-texture.png")',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};