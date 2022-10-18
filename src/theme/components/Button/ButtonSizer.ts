import { ButtonProps } from '@mui/material';
export const ButtonSizer = (size: ButtonProps['size']) => {
    let sizeStyle = {};
    switch (size) {
      case "small": 
        sizeStyle = {
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          lineHeight: '1rem',
        };
        break;
      case "medium":
        sizeStyle = {
          padding: '0.75rem 1.5rem',
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
        };
        break;
      case "large":
        sizeStyle = {
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
        };
        break;
      case "xl":
        sizeStyle = {
          padding: '1.5rem 3rem',
          fontSize: '1.75rem',
          lineHeight: '2rem',
        };
        break;
      case "xxl":
        sizeStyle = {
          padding: '2rem 4rem',
          fontSize: '2rem',
          lineHeight: '2.5rem',
        };
        break;
      default:
        break;
    }
    return sizeStyle;
  }
// Compare this snippet from src/theme/components/Button/ButtonContained.ts: