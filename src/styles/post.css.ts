import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const main = style({
  padding: `${vars.spacing.lg} ${vars.spacing.md}`,
  display: 'flex',
  justifyContent: 'center',
});

export const article = style({
  maxWidth: '672px',
  width: '100%',
  fontFamily: vars.font.body,
  color: vars.color.text,
  lineHeight: 1.75,
});

export const heroImage = style({
  marginBottom: vars.spacing.lg,
  borderRadius: '12px',
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.color.accent}`,
});

export const title = style({
  fontFamily: vars.font.heading,
  fontSize: '2.5rem',
  margin: '0 0 0.5rem 0',
});

export const date = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.muted,
});

export const updated = style({
  fontStyle: 'italic',
});

export const content = style({
  fontSize: '1rem',
});
