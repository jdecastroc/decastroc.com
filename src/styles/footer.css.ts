import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const iconLink = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
});

export const left = style({
  fontFamily: vars.font.body,
});

export const social = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const icon = style({
  width: '1.5rem',
  height: '1.5rem',
  fill: vars.color.text,
  transition: 'fill 0.2s ease',
  ':hover': {
    fill: vars.color.accent,
  },
});
