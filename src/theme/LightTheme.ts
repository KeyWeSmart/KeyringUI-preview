import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

declare module '@mui/material/styles' {
  interface Palette {
    disabled: Palette['primary'];
    inactive: Palette['primary'];
  }

  interface PaletteOptions {
    disabled: PaletteOptions['primary'];
    inactive: PaletteOptions['primary'];
  }
}

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FF7110',
      light: '#FF9441',
      dark: '#CE5900',
      contrastText: '#fff',
    },
    success: {
      main: '#38BF7D',
    },
    error: {
      main: '#FF7070',
    },
    info: {
      main: '#4271FD',
    },
    warning: {
      main: '#EFC900',
    },
    disabled: {
      main: '#F5F5F5',
    },
    inactive: {
      main: '#A0A0A0',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#161616',
      secondary: '#7C7C7C',
      disabled: '#A0A0A050',
    },
  },
};

// Create a theme instance.
export const LightTheme = createTheme(BaseTheme, lightTheme);
export default LightTheme;
