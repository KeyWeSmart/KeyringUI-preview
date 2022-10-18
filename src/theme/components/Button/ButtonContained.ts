import { ButtonProps, Theme } from "@mui/material";

export const containedOverRide = ({ ownerState, theme }: { ownerState: ButtonProps, theme: Theme}) => {
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