// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
