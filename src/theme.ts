/**
 * Client-side theme configuration for Material UI.
 * This theme customizes typography to use the Roboto font loaded via CSS variables.
 */
'use client';
import { createTheme } from '@mui/material/styles';

/**
 * Material UI theme configuration.
 * 
 * @constant
 * @type {Object}
 * @property {Object} typography - Typography configuration.
 * @property {string} typography.fontFamily - Sets the font family to use Roboto via a CSS variable.
 */
const theme: object = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',  // Use Roboto font through CSS variable
  },
});

export default theme;
