import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

// Einfache Navigationskomponente
const Navigation: React.FC = () => (
  <nav className="bg-white rounded shadow p-4 mb-6">
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/services" className="text-blue-600 hover:underline">
          Service Manager
        </Link>
      </li>
    </ul>
  </nav>
);

// App-Komponente mit Routing
const App: React.FC = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">∏Work</h1>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <h2 className="text-2xl font-semibold mb-4">Startseite von PiWork</h2>
                <p>Willkommen! Wähle eine Option im Menü, um zu beginnen.</p>
              </section>
            }
          />
          <Route path="/services" element={<ServiceManager />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Task4Pi. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/impressum" className="mx-2 hover:underline">
            Impressum
          </Link>
          |
          <Link to="/datenschutz" className="mx-2 hover:underline">
            Datenschutz
          </Link>
          |
          <Link to="/kontakt" className="mx-2 hover:underline">
            Kontakt
          </Link>
        </p>
      </footer>
    </div>
  </BrowserRouter>
);

export default App;
