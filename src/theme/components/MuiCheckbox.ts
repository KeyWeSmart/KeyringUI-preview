import { CheckboxProps, Components } from '@mui/material';
import type { ThemeOptions, Theme } from '@mui/material/styles';

const colorOverRide = ({
  ownerState,
  theme,
}: {
  ownerState: CheckboxProps;
  theme: Theme;
}) => {
  const { color = 'default' } = ownerState;
  switch (color) {
    case 'primary':
    case 'default':
      return {
        color: theme.palette.inactive.main,
        //hover
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '&.Mui-checked': {
          color: theme.palette.primary.main,
        },
      };
    default:
      return {
        color: theme.palette[color].main,
      };
  }
};

export const MuiCheckbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] =
  {
    styleOverrides: {
      root: ({
        ownerState,
        theme,
      }: {
        ownerState: CheckboxProps;
        theme: Theme;
      }) => ({
        ...colorOverRide({ ownerState, theme }),
        '&.Mui-disabled': {
          color: theme.palette.disabled.main,
        },
      }),
    },
  };
