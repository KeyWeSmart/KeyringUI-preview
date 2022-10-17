import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

const darkTheme: Partial<ThemeOptions> = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3ea6ff',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        disabled: {
            main: '#3e3e3e',
        },
        inactive: {
            main: '#3e3e3e',
        },
    }
}

// Create a theme instance.
export const DarkTheme = createTheme(darkTheme,BaseTheme)
export default DarkTheme;
