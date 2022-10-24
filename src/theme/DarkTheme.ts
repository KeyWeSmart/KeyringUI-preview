import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

const darkTheme: Partial<ThemeOptions> = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF7110',
      contrastText: 'white',
    },
    background: {
      default: '#252525',
      paper: '#010101',
      lightpaper: '#404040',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D1D1',
      disabled: 'rgba(160, 160, 160, 0.5) !important',
    },
    action: {
      disabled: 'rgba(160, 160, 160, 0.5) !important',
      disabledBackground: 'rgba(160, 160, 160, 0.5) !important',
    },
    disabled: {
      main: '#F5F5F5',
      contrastText: '#252525',
    },
    inactive: {
      main: '#A0A0A0',
    },
  },
};

// Create a theme instance.
export const DarkTheme = createTheme(BaseTheme,darkTheme);
export default DarkTheme;
