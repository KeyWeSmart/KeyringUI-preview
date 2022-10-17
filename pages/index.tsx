import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { ReactNode } from 'react';

const RowContainer = ({ children, title }: { title: string, children: ReactNode | ReactNode[] }) => (
  <>
    <Typography variant="h6" mb={2}>{title}</Typography>
    <Stack sx={{ overflowX: 'auto' }} direction="row" gap={2}>
      {children}
    </Stack>
  </>
)

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Typography variant="h4" component="h1" gutterBottom>
          Keyring UI KIT
        </Typography>
        <RowContainer title="Buttons">
          <Button>XS</Button>
          <Button>SM</Button>
          <Button>MD</Button>
          <Button>LG</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </RowContainer>
      </Stack>
    </Container>
  );
}
