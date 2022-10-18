import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { ReactNode } from 'react';
import { ButtonRow } from '../src/ButtonsRow';
import { CheckboxRow } from '../src/CheckboxRow';
import { TextFields } from '../src/TextFieldRows';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 10 }}>
        <Stack spacing={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Keyring UI KIT
          </Typography>
          <ButtonRow />
          <TextFields />
          <CheckboxRow />
        </Stack>
      </Paper>
    </Container>
  );
}
