import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: "var(--background)",
        "accent-maroon": "var(--accent-maroon)",
        "accent-blood": "var(--accent-blood)",
        "cool-grey": "var(--cool-grey)",
        "pure-black": "var(--pure-black)",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.accent-maroon"),
            "--tw-prose-headings": theme("colors.slate.900"),
            a: { fontWeight: "600", textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
          },
        },
        invert: {
          css: {
            "--tw-prose-links": theme("colors.accent-blood"),
            "--tw-prose-headings": theme("colors.white"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
