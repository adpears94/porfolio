import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createTheme } from '@mui/material/';
// import  { MuiThemeProvider } from '@mui/styles'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import './index.css';

const theme = createTheme({
  // your theme options
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>
);


