import { ButtonProps } from '@mui/material';
import type { ThemeOptions, Theme } from '@mui/material/styles';
const containedOverRide = ({ ownerState, theme }: { ownerState: ButtonProps, theme: Theme}) => {
  const {color = "inherit"} = ownerState;
  return {
    '&:hover': {
      // backgroundColor: color === "inherit" ? 'inherit' : theme.palette[color].main,
      boxShadow: 'none',
    },
    '&:focus': {
      // backgroundColor: theme.palette.secondary.main,
      boxShadow: `0px 0px 0px 2px ${theme.palette.inactive.main}`,
    },
    '&:active': {
      // backgroundColor: theme.palette.primary.dark,
      boxShadow: 'none',
    },
  }
}
export const MuiButton: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        boxShadow: 'none',
        //ownerState primary/contained
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
      }),
    },
  },
}