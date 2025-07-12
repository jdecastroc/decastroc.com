import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const main = style({
  padding: `${vars.spacing.lg} 0`,
});

export const meta = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.muted,
  marginTop: vars.spacing.sm,
});

export const postItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderBottom: `1px solid ${vars.color.border}`,
  paddingBottom: vars.spacing.lg,
  marginBottom: vars.spacing.lg,
  gap: vars.spacing.md,
  flexWrap: 'wrap',
});

export const postTitle = style({
  fontFamily: vars.font.heading,
  fontSize: '1.3rem',
  color: vars.color.text,
  margin: 0,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  selectors: {
    '&:hover': {
      color: vars.color.accent,
      textDecoration: 'underline',
    },
  },
});

export const postDescription = style({
  fontFamily: vars.font.body,
  fontSize: '1rem',
  color: vars.color.muted,
  marginTop: vars.spacing.sm,
  marginBottom: 0,
});

export const postDate = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.muted,
  whiteSpace: 'nowrap',
});

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const postRow = style({
  display: 'flex',
  padding: vars.spacing.lg,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  paddingBottom: vars.spacing.md,
  borderBottom: `1px solid ${vars.color.border}`,
  textDecoration: 'none',
  transition: 'background 0.3s ease',
  selectors: {
    '&:hover': {
      background: vars.color.surfaceHover,
    },
  },
});

export const postMeta = style({
  maxWidth: '75%',
});

export const title = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: vars.color.text,
  margin: 0,
});

export const description = style({
  marginTop: '0.25rem',
  fontSize: '0.95rem',
  color: vars.color.muted,
  lineHeight: 1.5,
});

export const date = style({
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  color: vars.color.muted,
  whiteSpace: 'nowrap',
});
