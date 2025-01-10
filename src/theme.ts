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
 * @property {object} colorSchemes - Configuration for light and dark color schemes.
 * @property {boolean} colorSchemes.dark - Enables dark mode by default.
 */
const theme: object = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',  // Use Roboto font through CSS variable
  },
  colorSchemes: {
    dark: true
  }
});

export default theme;
