import { useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from 'layouts/navbar';
import Routes from 'routes';
import getDesignTokens from 'utils/theme';
import { Container, CssBaseline, Paper } from '@mui/material';

export default function App() {
  const [themeMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper elevation={0} style={{ width: '100%', minHeight: '100vh', height: '100%' }}>
          <Container maxWidth='xl'>
            <Navbar />
            <Routes />
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}
