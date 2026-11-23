import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0C2314",
        "forest-soft": "#E7EFE9",
        paper: "#F4F6F3",
        ink: "#171C19",
        muted: "#748078",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(12, 35, 20, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
