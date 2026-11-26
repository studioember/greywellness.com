import typography from "@tailwindcss/typography";

export default {
  content: [
    "./{_includes,en,es}/**/*.{html,md,njk}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",

        surface: "hsl(var(--surface))",
        "surface-warm": "hsl(var(--surface-warm))",
        sage: "hsl(var(--sage))",
      },
    },
  },
  plugins: [typography],
};
