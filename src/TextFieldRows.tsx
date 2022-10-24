import { TextField, TextFieldProps, MenuItem, Select, Switch, FormControlLabel, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import { RowContainer } from "./RowContainer";
import { Stack, useTheme } from '@mui/system';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const TextFieldVariants: TextFieldProps['variant'][] = ['standard', 'filled', 'outlined'];
const TextFieldColors: TextFieldProps['color'][] = ['success', 'warning', 'primary', 'secondary', 'error'];
const TextFieldSizes: TextFieldProps['size'][] = ['small', 'medium'];

const TextFieldRowVariant = atomWithStorage<TextFieldProps['variant']>('TextFieldRowVariant', 'standard');
const TextFieldRowColor = atomWithStorage<TextFieldProps['color']>('TextFieldRowColor', 'primary');
const TextFieldRowDisabled = atomWithStorage('TextFieldRowDisabled', false);

export const TextFields = () => {
    const [rowVariant, setRowVariant] = useAtom(TextFieldRowVariant);
    const [rowColor, setRowColor] = useAtom(TextFieldRowColor);
    const [rowDisabled, setRowDisabled] = useAtom(TextFieldRowDisabled);

    return (
        <RowContainer title="TextFields">
            <FormControlLabel labelPlacement="bottom" checked={rowDisabled} control={<Switch onChange={(e) => setRowDisabled(e.target.checked)} />} label={`${rowDisabled ? 'Disabled' : 'Enabled'} State`} />
            <Stack
                pr={6}
                width={240}
                spacing={2}>
                <TextField
                    select={true}
                    label="Variant"
                    // notched={false}
                    variant="filled"
                    onChange={(e) => e.target.value && setRowVariant(e.target.value as TextFieldProps['variant'])}
                    value={rowVariant}
                >
                    {TextFieldVariants.map(variant => (
                        <MenuItem key={variant} value={variant}>
                            {variant}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select={true}
                    value={rowColor}
                    variant="filled"
                    label="Color"
                    onChange={(e) => e.target.value && setRowColor(e.target.value as TextFieldProps['color'])}
                >
                    {TextFieldColors.map(color => (
                        <MenuItem key={color} value={color}>
                            {color}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            {
                TextFieldSizes.map(size => (
                    <TextField
                        key={size}
                        disabled={rowDisabled}
                        variant={rowVariant}
                        color={rowColor}
                        size={size}
                    >{size}</TextField>
                ))
            }
        </RowContainer >
    )
}