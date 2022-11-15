import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { RowContainer } from '../../RowContainer';

const BpIcon = styled('span')(({ theme }) => ({
  width: 20,
  height: 20,
  boxShadow: `inset 0 0 0 2px ${theme.palette.inactive.main}`,

  'input:hover ~ &': {
    boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: `${theme.palette.disabled.main}`,
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E" +
      "%3Cpath d='M16 5L12.1287 10L8.25731 15L4 10.8194' stroke='%23FF7110' fill='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' " +
      '/%3E%3C/svg%3E")',
    content: '""',
  },
  'input:disabled ~ &': {
    boxShadow: `inset 0 0 0 2px ${theme.palette.inactive.main}`,
    opacity: 0.5,
  },
}));

const BpCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default function CustomizedCheckbox() {
  return (
    <RowContainer title="Checkboxes">
      <BpCheckbox />
      <BpCheckbox defaultChecked />
      <BpCheckbox checked={true} disabled />
      <BpCheckbox disabled />
    </RowContainer>
  );
}
