import { Fab } from "@mui/material";
import { useAtom } from "jotai"
import { themeAtom } from './theme/themeAtom';

export const ThemeSwitcherFab = () => {
    const [mode, setMode] = useAtom(themeAtom);

    return (
        <Fab
            sx={{
                position: 'fixed',
                bottom: 40,
                right: 40,
                fontWeight: 'bold',
                fontSize: '1.5rem',
            }}
            color="primary"
            onClick={() => setMode((prev) => prev === 'light' ? 'dark' : 'light')}
        >
            {mode === 'light' ? '🌙' : '☀️'}
        </Fab>
    )
}