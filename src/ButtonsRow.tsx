import { Button, ButtonProps, FormControlLabel, MenuItem, Select, Switch } from "@mui/material";
import { useState } from "react";
import { RowContainer } from "./RowContainer";
import { Stack, useTheme } from '@mui/system';
import { atomWithStorage } from "jotai/utils";
import { useAtom } from 'jotai';

const ButtonVariants: ButtonProps['variant'][] = ['text', 'outlined', 'contained'];
const ButtonColors: ButtonProps['color'][] = ['success', 'warning', 'inherit', 'primary', 'secondary', 'error'];
const ButtonSizes: ButtonProps['size'][] = ['small', 'medium', 'large'];

const BTNVariantsAtom = atomWithStorage<ButtonProps['variant']>('BTNVariantsAtom', 'text');
const BTNColorsAtom = atomWithStorage<ButtonProps['color']>('BTNColorsAtom', 'primary');
const BTNDisabledAtom = atomWithStorage('BTNDisabledAtom', false);


export const ButtonRow = () => {
    const [rowVariant, setRowVariant] = useAtom(BTNVariantsAtom);
    const [rowColor, setRowColor] = useAtom(BTNColorsAtom)
    const [rowDisabled, setRowDisabled] = useAtom(BTNDisabledAtom);
    return (
        <RowContainer title="Buttons">
            <FormControlLabel labelPlacement="bottom" control={<Switch onChange={(e) => setRowDisabled(e.target.checked)} />} label={`${rowDisabled ? 'Disabled' : 'Enabled'} State`} />
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
                        disabled={rowDisabled}
                        size={size}
                    >{size}</Button>
                ))
            }
        </RowContainer >
    )
}