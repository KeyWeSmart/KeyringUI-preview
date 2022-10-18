import { ButtonProps, Theme } from '@mui/material';

export const outlinedOverRide = ({
  ownerState,
  theme,
}: {
  ownerState: ButtonProps;
  theme: Theme;
}) => {
  const { color = 'inherit' } = ownerState;
  return {
    color: color === 'inherit' ? 'inherit' : theme.palette[color].main,
    boxShadow: `0px 0px 0px 1px ${
      color === 'inherit' ? 'inherit' : theme.palette[color].main
    }`,
    border: 'none',
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
      color:
        color === 'inherit'
          ? 'inherit'
          : `${theme.palette[color].contrastText}`,
      backgroundColor:
        color === 'inherit' ? 'inherit' : `${theme.palette[color].light}`,
      boxShadow: 'none',
      border: 'none',
    },
  };
};
