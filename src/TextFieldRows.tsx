import { TextField, TextFieldProps, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { RowContainer } from "./RowContainer";
import { Stack, useTheme } from '@mui/system';

const TextFieldVariants: TextFieldProps['variant'][] = ['standard', 'filled', 'outlined'];
const TextFieldColors: TextFieldProps['color'][] = ['success', 'warning', 'primary', 'secondary', 'error'];
const TextFieldSizes: TextFieldProps['size'][] = ['small', 'medium'];

export const TextFields = () => {
    const [rowVariant, setRowVariant] = useState<TextFieldProps['variant']>('standard');
    const [rowColor, setRowColor] = useState<TextFieldProps['color']>('primary');
    return (
        <RowContainer title="TextFields">
            <Stack
                pr={6}
                width={240}
                spacing={2}>
                <Select
                    onChange={(e) => setRowVariant(e.target.value as TextFieldProps['variant'])}
                    value={rowVariant}
                >
                    {TextFieldVariants.map(variant => (
                        <MenuItem key={variant} value={variant}>
                            {variant}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    value={rowColor}
                    onChange={(e) => setRowColor(e.target.value as TextFieldProps['color'])}
                >
                    {TextFieldColors.map(color => (
                        <MenuItem key={color} value={color}>
                            {color}
                        </MenuItem>
                    ))}
                </Select>
            </Stack>
            {
                TextFieldSizes.map(size => (
                    <TextField
                        key={size}
                        variant={rowVariant}
                        color={rowColor}
                        size={size}
                    >{size}</TextField>
                ))
            }
        </RowContainer >
    )
}