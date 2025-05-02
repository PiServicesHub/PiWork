import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

// Einfache Navigationskomponente mit verbesserten Buttons
const Navigation: React.FC = () => (
  <nav className="bg-white rounded shadow p-4 mb-6 flex justify-between items-center">
    <div className="flex space-x-4">
      <Link
        to="/"
        className="inline-flex items-center px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Home
      </Link>
      <Link
        to="/services"
        className="inline-flex items-center px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Service Manager
      </Link>
    </div>
    <button
      className="inline-flex items-center px-5 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-300"
    >
      Login
    </button>
  </nav>
);

// App-Komponente mit Routing und Sticky Footer
const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-sans p-6">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-4xl font-bold text-center">∏Work</h1>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto">
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
      <footer className="mt-8 text-center text-sm text-gray-600">
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
