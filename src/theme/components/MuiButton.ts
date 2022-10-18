import { ButtonProps, Components } from '@mui/material';
import type { ThemeOptions, Theme } from '@mui/material/styles';
const containedOverRide = ({
  ownerState,
  theme,
}: {
  ownerState: ButtonProps;
  theme: Theme;
}) => {
  const { color = 'inherit' } = ownerState;
  return {
    '&:hover': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : theme.palette[color].main,
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : theme.palette[color].light,
      boxShadow: `0px 0px 0px 2px ${theme.palette.inactive.main}`,
    },
    '&:active': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : theme.palette[color].dark,
      boxShadow: 'none',
    },
  };
};

const outlinedOverRide = ({
  ownerState,
  theme,
}: {
  ownerState: ButtonProps;
  theme: Theme;
}) => {
  const { color = 'inherit' } = ownerState;
  return {
    border: 'none',
    color: color === 'inherit' ? 'inherit' : theme.palette[color].main,
    boxShadow: `0px 0px 0px 1px ${
      color === 'inherit' ? 'inherit' : theme.palette[color].main
    }`,
    '&:hover': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : `${theme.palette[color].light}50`,
      boxShadow: 'none',
      border: 'none',
    },
    '&:focus': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : `${theme.palette[color].light}50`,
      boxShadow: `0px 0px 0px 1px ${
        color === 'inherit' ? 'inherit' : theme.palette[color].main
      }`,
    },
    '&:active': {
      backgroundColor:
        color === 'inherit' ? 'inherit' : `${theme.palette[color].light}`,
      color:
        color === 'inherit'
          ? 'inherit'
          : `${theme.palette[color].contrastText}`,
      boxShadow: 'none',
      border: 'none',
    },
  };
};

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: ButtonProps;
      theme: Theme;
    }) => ({
      boxShadow: 'none',
      '&.MuiButton-contained': {
        ...containedOverRide({ ownerState, theme }),
      },
      '&.MuiButton-outlined': {
        ...outlinedOverRide({ ownerState, theme }),
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.disabled.main,
        boxShadow: 'none',
        color: theme.palette.text.disabled,
      },
    }),
  },
};
