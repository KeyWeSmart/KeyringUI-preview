import { alpha, createTheme } from '@mui/material/styles';
import { MuiButton } from './components/MuiButton';

/*
 * Base theme
 * declare the base theme overrides here
 */
declare module '@mui/material/styles' {
  // interface name and interface type
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    // setup new variant
    //   text: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
    // setup new variant
    search: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsVariantOverrides {
    // setup new variant
    //   text: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {}
  interface ButtonPropsVariantOverrides {
    // expand the variant
    //   circleExpand: true;
  }
}

// Create a theme instance.
export const BaseTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 48,
      fontWeight: 600,
    },
    h2: {
      fontSize: 39,
      fontWeight: 600,
    },
    h3: {
      fontSize: 31,
      fontWeight: 600,
    },
    h4: {
      fontSize: 25,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 10,
    },
    button: {
      fontSize: 17,
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton,
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.disabled.main,
            '&:hover': {
              boxShadow: `${alpha(theme.palette.primary.main, 1)} 0 0 0 1px`,
            },
            '& fieldset': {
              border: 'none',
            },
            '&.Mui-focused': {
              backgroundColor: theme.palette.primary.contrastText,
              boxShadow: `${alpha(theme.palette.primary.main, 1)} 0 0 0 1px`,
            },
          },
        }),
      },
    },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: ({ ownerState, theme }) => ({
    //       color:
    //         ownerState.color === 'error'
    //           ? theme.palette.error.main
    //           : theme.palette.inactive.main,
    //       '&:hover': {
    //         color: theme.palette.primary.main,
    //       },
    //       '&.Mui-checked': {},
    //       '&.Mui-disabled': {
    //         color: theme.palette.disabled.main,
    //       },
    //     }),
    //   },
    // },
  },
});

export default BaseTheme;
