import { ButtonProps, Components, useTheme } from '@mui/material';
import type { ThemeOptions, Theme } from '@mui/material/styles';
import { ButtonSizer } from './ButtonSizer';
import { containedOverRide } from './ButtonContained';
import { outlinedOverRide } from './ButtonOutlined';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xl: true;
    xxl: true;
  }
  // interface ButtonPropsVariantOverrides {
  //   circleExpand: true;
  // }
}

export const BaseButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: ButtonProps;
      theme: Theme;
    }) => ({
      boxShadow: 'none',
      ...(ButtonSizer(ownerState.size) || {}),
      ...(ownerState.variant === 'contained' &&
        containedOverRide({ ownerState, theme })),
      ...(ownerState.variant === 'outlined' &&
        outlinedOverRide({ ownerState, theme })),
    }),
  },
};
