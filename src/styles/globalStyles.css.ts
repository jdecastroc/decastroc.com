import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalFontFace('IBM Plex Sans', {
  src: 'url("/fonts/ibm-plex-sans-v22-latin-regular.woff2") format("woff2")',
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'swap',
});

globalFontFace('EB Garamond', {
  src: 'url("/fonts/eb-garamond-v31-latin-regular.woff2") format("woff2")',
  fontStyle: 'normal',
  fontWeight: '400',
  fontDisplay: 'swap',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  scrollBehavior: 'smooth',
  backgroundColor: '#101010',
  color: '#eeeeee',
  fontFamily: "'IBM Plex Sans', 'EB Garamond', sans-serif",
  fontSize: '16px',
  lineHeight: 1.75,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  margin: '0 auto',
  padding: '0',
  maxWidth: '42rem',
});

globalStyle('body', {
  margin: 0,
  padding: 0,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.font.heading,
  color: vars.color.text,
  margin: '2rem 0 1rem',
});

globalStyle('p', {
  margin: '1rem 0',
});

globalStyle('a', {
  color: vars.color.accent,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('ul, ol', {
  paddingLeft: '1.5rem',
  margin: '1rem 0',
});

globalStyle('hr', {
  border: 'none',
  borderTop: `1px solid ${vars.color.border}`,
  margin: '2rem 0',
  opacity: 0.3,
});

globalStyle('blockquote', {
  borderLeft: `4px solid ${vars.color.accent}`,
  paddingLeft: '1rem',
  fontStyle: 'italic',
  opacity: 0.85,
  margin: '2rem 0',
});

globalStyle('code', {
  backgroundColor: '#282828',
  padding: '0.2em 0.4em',
  borderRadius: '4px',
  fontFamily: vars.font.mono,
  fontSize: '0.95em',
});

globalStyle('pre', {
  backgroundColor: '#1e1e1e',
  padding: '1rem',
  borderRadius: '6px',
  overflowX: 'auto',
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  lineHeight: 1.6,
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '12px',
});
