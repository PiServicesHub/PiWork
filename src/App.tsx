// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans p-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Willkommen zu PiWork!</h1>
          <nav className="bg-white rounded shadow p-4">
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/"
                  className="text-blue-600 hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-600 hover:underline transition"
                >
                  Service Manager
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<h2 className="text-xl">Startseite von PiWork</h2>}
            />
            <Route path="/services" element={<ServiceManager />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
