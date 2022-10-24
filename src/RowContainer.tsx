import { Typography, Stack } from "@mui/material";
import { ReactNode } from "react";

export const RowContainer = ({ children, title }: { title: string, children: ReactNode | ReactNode[] }) => (
    <>
        <Typography variant="h6" mb={2}>{title}</Typography>
        <Stack alignItems="center" sx={{ overflowX: 'auto', px: 2 }} direction="row" gap={2}>
            {children}
        </Stack>
    </>
)