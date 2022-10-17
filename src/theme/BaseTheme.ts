import { createTheme } from '@mui/material/styles';

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
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {}
    interface ButtonPropsVariantOverrides {
        // expand the variant
    //   circleExpand: true;
    }
  }

// Create a theme instance.
export const BaseTheme = createTheme({

});

export default BaseTheme;
