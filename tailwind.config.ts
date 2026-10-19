import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#e90089",
          green: "#00c06a",
          purple: "#b1a6fb",
          dark: "#1c1917", // slate-900 equivalent
          light: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #e90089 0%, #b1a6fb 50%, #00c06a 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #e90089 0%, #b1a6fb 100%)',
        'gradient-green-purple': 'linear-gradient(135deg, #00c06a 0%, #b1a6fb 100%)',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow-pink': '0 0 20px rgba(233, 0, 137, 0.4)',
        'glow-green': '0 0 20px rgba(0, 192, 106, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
