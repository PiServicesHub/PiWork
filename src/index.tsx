// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ React 18
import 'normalize.css';
import './defaults.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <div>
        <h1>Willkommen zu PiWork!</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Service Manager</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Startseite von PiWork</h2>} />
          <Route path="/services" element={<ServiceManager />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
