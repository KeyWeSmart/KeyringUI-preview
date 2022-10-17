import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

const darkTheme: ThemeOptions = {
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
    }
}

// Create a theme instance.
export const DarkTheme = createTheme(BaseTheme, darkTheme)
export default DarkTheme;
