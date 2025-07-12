import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0.5rem 1rem',
  borderBottom: `1px solid ${vars.color.accent}`,
  backgroundColor: vars.color.background,
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const bonsai = style({
  width: '48px',
});

export const siteTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '1.5rem',
  color: vars.color.accent,
  textDecoration: 'none',
});

export const nav = style({
  display: 'flex',
  gap: '1rem',
});

export const navMobile = style({
  selectors: {
    '&.visible': {
      '@media': {
        '(max-width: 768px)': {
          display: 'flex',
        },
      },
    },
  },
});

export const navLink = style({
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: '1rem',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const socialLinks = style({
  display: 'flex',
  gap: '1rem',
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
      justifyContent: 'center',
      marginTop: '1rem',
    },
  },
});

export const iconLink = style({
  fontSize: '1.2rem',
  color: vars.color.text,
  textDecoration: 'none',
  ':hover': {
    color: vars.color.accent,
  },
});
