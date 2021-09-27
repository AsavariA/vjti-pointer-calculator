import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './Components/Main';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#082063',
    },
  },
  typography: {
    fontFamily: ["'Inter'", 'sans-serif'].join(',')
  }
});

export default function ToggleColorMode() {

  return (
    <ThemeProvider theme={theme}>
      <h1>VJTI Pointer Calculator</h1>
      <div className='app-wrapper'>
        <Main />
      </div>
    </ThemeProvider>
  );
}
