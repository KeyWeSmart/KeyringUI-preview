import { ButtonProps } from '@mui/material';
export const ButtonSizer = (size: ButtonProps['size']) => {
    let sizeStyle = {};
    switch (size) {
      case 'xl':
        sizeStyle = {
            padding: '0.75rem 1.5rem',
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
        };
        break;
      case 'xxl':
        sizeStyle = {
          padding: '1rem 1.75rem',
          fontSize: '1.75rem',
          lineHeight: '1.75rem',
        };
        break;
      default:
        sizeStyle = {};
    }
    return sizeStyle;
  }