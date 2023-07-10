import { Route, Routes } from 'react-router';
import CharactersList from './Components/pages/CharactersList';
import Character from './Components/pages/Character/Character';
import { ThemeProvider } from '@mui/material/styles';
import useTheme from './hooks/useTheme';
import ErrorBoundary from './Components/UI/ErrorBoundary';
import { Suspense } from 'react';
import MainLoader from './Components/UI/MainLoader/MainLoader';
import { CssBaseline } from '@mui/material';
import Layout from './Components/Layout/Layout';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Suspense fallback={<MainLoader />}>
          <Layout>
            <Routes>
              <Route path="/" element={<CharactersList />} />
              <Route path="/:id" element={<Character />} />
            </Routes>
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

