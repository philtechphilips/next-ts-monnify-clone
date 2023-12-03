import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#007bff',
        },
        indigo: {
          DEFAULT: '#6610f2',
        },
        purple: {
          DEFAULT: '#6f42c1',
        },
        pink: {
          DEFAULT: '#e83e8c',
        },
        red: {
          DEFAULT: '#dc3545',
        },
        orange: {
          DEFAULT: '#fd7e14',
        },
        yellow: {
          DEFAULT: '#ffc107',
        },
        green: {
          DEFAULT: '#28a745',
        },
        teal: {
          DEFAULT: '#20c997',
        },
        cyan: {
          DEFAULT: '#17a2b8',
        },
        white: {
          DEFAULT: '#fff',
        },
        gray: {
          DEFAULT: '#6c757d',
          dark: '#343a40',
        },
        primary: {
          DEFAULT: '#007bff',
        },
        secondary: {
          DEFAULT: '#6c757d',
        },
        success: {
          DEFAULT: '#28a745',
        },
        info: {
          DEFAULT: '#17a2b8',
        },
        warning: {
          DEFAULT: '#ffc107',
        },
        danger: {
          DEFAULT: '#dc3545',
        },
        light: {
          DEFAULT: '#f8f9fa',
        },
        dark: {
          DEFAULT: '#343a40',
        },
      },
    },
  },
  plugins: [],
};

export default config;
