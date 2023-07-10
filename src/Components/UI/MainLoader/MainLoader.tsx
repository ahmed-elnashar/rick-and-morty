import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const MainLoader: FC = (): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress size={64} thickness={1} />
  </Box>
);

export default MainLoader;

