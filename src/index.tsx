import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ React 18
import 'normalize.css';
import './styles.css';
import App from './App'; // App.tsx importieren

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App /> {/* App-Komponente hier verwenden */}
  </React.StrictMode>
);
