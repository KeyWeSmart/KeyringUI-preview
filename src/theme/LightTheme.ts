import { createTheme, ThemeOptions } from '@mui/material/styles';
import BaseTheme from './BaseTheme';

const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3ea6ff',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
    }
}

// Create a theme instance.
export const LightTheme = createTheme(BaseTheme, lightTheme)
export default LightTheme;
