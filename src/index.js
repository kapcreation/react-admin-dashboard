import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeProvider } from './contexts/ColorModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);