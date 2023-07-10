import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          py: 10,
          px: 2,
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold">
          <Link to={'/'} style={{ color: '#2271B1', textDecoration: 'none' }}>
            Rick and Morty Wiki
          </Link>
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ mt: 2, fontWeight: '500' }}
        >
          The place where you can find{' '}
          <span style={{ textDecoration: 'underline' }}>everything</span> about
          the classic{' '}
          <span style={{ textDecoration: 'underline' }}>Rick and Morty</span>{' '}
          Serious
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;

