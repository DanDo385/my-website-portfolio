// Import types from TailwindCSS for better type checking.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blockchain-dots": "url('/images/blockchaindots.jpeg')", // Your custom background image
      },
    },
  },
  daisyui: {
    themes: ["nord"],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'), // Include @tailwindcss/forms here
    // Add other plugins as needed
  ],
};

export default config;
