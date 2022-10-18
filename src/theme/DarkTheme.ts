import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

const darkTheme: Partial<ThemeOptions> = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF7110',
    },
    background: {
      default: '#252525',
      paper: '#010101',
      lightpaper: '#404040',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D1D1',
      disabled: 'rgb(255 255 255 / 50%)',
    },
    action: {
      disabled: 'rgb(255 255 255 / 50%)',
      disabledBackground: 'rgb(255 255 255 / 12%)',
    },
    disabled: {
      main: '#F5F5F5',
    },
    inactive: {
      main: '#A0A0A0',
    },
  },
};

// Create a theme instance.
export const DarkTheme = createTheme(darkTheme, BaseTheme);
export default DarkTheme;
