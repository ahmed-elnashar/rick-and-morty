import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import Hero from '../Hero/Hero';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Hero />
      {children}
    </Box>
  );
};

export default Layout;

