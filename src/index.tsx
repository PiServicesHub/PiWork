import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Deine Hauptkomponente (App)
import './styles.css'; // Deine CSS-Datei

// Die App wird in das "root"-Element der HTML-Datei gerendert
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
