import { ButtonProps, Components } from '@mui/material';
import type { ThemeOptions, Theme } from '@mui/material/styles';
import { ButtonSizer } from './ButtonSizer';
import { containedOverRide } from './ButtonContained';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xl: true;
    xxl: true;
  }
  // interface ButtonPropsVariantOverrides {
  //   dashed: true;
  // }
}

export const BaseButton: Components<Omit<Theme, "components">>['MuiButton'] = {
    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: ButtonProps, theme: Theme}) => ({
        boxShadow: 'none',
        //ownerState primary/contained
        ...ButtonSizer(ownerState.size) || {},
        ...(ownerState.variant === 'contained' && containedOverRide({ ownerState, theme })),
        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'primary' && {
            border: 'none',
            boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: `${theme.palette.secondary.main}50`,
              boxShadow: 'none',
              border: 'none',
            },
            '&:focus': {
              backgroundColor: `${theme.palette.secondary.main}50`,
              boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`,
            },
            '&:active': {
              backgroundColor: `${theme.palette.secondary.main}`,
              color: theme.palette.primary.contrastText,
              boxShadow: 'none',
              border: 'none',
            },
          }),
        //disabled
        '&.Mui-disabled': {
          backgroundColor: theme.palette.disabled.main,
        },
      })
    }
  }