import { ButtonProps, Theme } from '@mui/material';

export const containedOverRide = ({
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
        color === 'inherit' ? 'inherit' : theme.palette[color].light,
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
