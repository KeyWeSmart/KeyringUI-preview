import {
  Button,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import { useState } from 'react';
import { RowContainer } from './RowContainer';
import { Stack, useTheme } from '@mui/system';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';

const CheckboxColor: CheckboxProps['color'][] = [
  'success',
  'warning',
  'primary',
  'secondary',
  'error',
  'default',
  'info',
];
const CheckboxSizes: CheckboxProps['size'][] = ['small', 'medium'];

const CheckboxRowDisabled = atomWithStorage('CheckboxRowDisabled', false);
const CheckBoxRowColor = atomWithStorage<CheckboxProps['color']>(
  'CheckBoxRowColor',
  'primary'
);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckboxRow = () => {
  const [rowColor, setRowColor] = useAtom(CheckBoxRowColor);
  const [rowDisabled, setRowDisabled] = useAtom(CheckboxRowDisabled);

  return (
    <RowContainer title="Checkboxes">
      <FormControlLabel
        labelPlacement="bottom"
        checked={rowDisabled}
        control={<Switch onChange={(e) => setRowDisabled(e.target.checked)} />}
        label={`${rowDisabled ? 'Disabled' : 'Enabled'} State`}
      />
      <Stack pr={6} width={240} spacing={2}>
        <Select
          value={rowColor}
          onChange={(e) =>
            setRowColor(e.target.value as CheckboxProps['color'])
          }
        >
          {CheckboxColor.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      {CheckboxSizes.map((size) => (
        <Checkbox
          key={size}
          color={rowColor}
          {...label}
          disabled={rowDisabled}
        />
      ))}
    </RowContainer>
  );
};
