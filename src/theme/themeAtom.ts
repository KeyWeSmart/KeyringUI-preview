
import { atomWithStorage } from 'jotai/utils'
import { PaletteOptions } from '@mui/material';


export const themeAtom = atomWithStorage<PaletteOptions['mode']>('theme', 'light')