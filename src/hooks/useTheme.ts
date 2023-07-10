import { useSelector } from 'react-redux';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const useTheme = () => {
  const direction = useSelector((state: any) => state.app.direction);

  let theme = createTheme({
    direction: direction,
    palette: {
      primary: {
        light: '#deecfd',
        main: '#2271B1',
        dark: '#174f7b',
      },
      secondary: {
        light: '#2c3338',
        main: '#1D2327',
        dark: '#14181b',
      },
      background: {
        paper: '#fafafa',
        default: '#fff',
      },
    },
    shape: {
      borderRadius: 5,
    },
    typography: {
      fontFamily: ['Manrope', 'sans-serif'].join(','),
    },
  });

  theme = responsiveFontSizes(theme);

  return { theme };
};

export default useTheme;

