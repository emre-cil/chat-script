import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './main.css';
import { CssBaseline } from '@mui/material';

// Create a new root element dynamically
const rootElement = document.createElement('div');
rootElement.id = 'chat-script-root';
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);
