import React, { useState, useMemo, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import router from 'routes/router';
import { theme as defaultTheme } from 'theme/theme';
import MedBot from './components/sections/dashboard/medbot';

// Define ColorModeContext
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light' as PaletteMode,
});

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return (savedMode as PaletteMode) || 'light';
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme-mode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode],
  );

  const customTheme = useMemo(
    () =>
      createTheme({
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          mode,
          primary: { main: '#009688' },
          secondary: { main: '#9c27b0' },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                padding: 0,
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center align horizontally
                justifyContent: 'flex-start', // Align to the top
                backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
                color: mode === 'light' ? '#000000' : '#ffffff',
                transition: 'all 0.3s ease',
              },
              '#root': {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={customTheme}>
        <BreakpointsProvider>
          <CssBaseline />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <RouterProvider router={router} />
            <MedBot /> {/* Add MedBot here */}
          </div>
        </BreakpointsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
