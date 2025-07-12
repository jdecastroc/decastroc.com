import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    text: '#f5f5f5',
    muted: '#a1a1a1',
    border: '#2a2a2a',
    background: '#0e0f11',
    surface: '#16181d',
    surfaceHover: '#16181d',
    accent: '#8bc34a',
  },
  font: {
    heading: 'EB Garamond, serif',
    body: 'IBM Plex Sans, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  size: {
    maxWidth: '672px',
  },
});
