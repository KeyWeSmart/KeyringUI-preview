import { Button, ButtonProps, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { RowContainer } from "./RowContainer";
import { Stack, useTheme } from '@mui/system';

const ButtonVariants: ButtonProps['variant'][] = ['text', 'outlined', 'contained'];
const ButtonColors: ButtonProps['color'][] = ['success', 'warning', 'inherit', 'primary', 'secondary', 'error'];
const ButtonSizes: ButtonProps['size'][] = ['small', 'medium', 'large'];

export const ButtonRow = () => {
    const [rowVariant, setRowVariant] = useState<ButtonProps['variant']>('contained');
    const [rowColor, setRowColor] = useState<ButtonProps['color']>('primary');
    return (
        <RowContainer title="Buttons">
            <Stack
                pr={6}
                width={240}
                spacing={2}>
                <Select
                    onChange={(e) => setRowVariant(e.target.value as ButtonProps['variant'])}
                    value={rowVariant}
                >
                    {ButtonVariants.map(variant => (
                        <MenuItem key={variant} value={variant}>
                            {variant}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    value={rowColor}
                    onChange={(e) => setRowColor(e.target.value as ButtonProps['color'])}
                >
                    {ButtonColors.map(color => (
                        <MenuItem key={color} value={color}>
                            {color}
                        </MenuItem>
                    ))}
                </Select>
            </Stack>
            {
                ButtonSizes.map(size => (
                    <Button
                        key={size}
                        variant={rowVariant}
                        color={rowColor}
                        size={size}
                    >{size}</Button>
                ))
            }
        </RowContainer >
    )
}