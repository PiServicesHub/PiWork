import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';

// Einfache Navigationskomponente
const Navigation: React.FC = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link">
      ∏
      </Link>
      <Link to="/services" className="nav-link">
        Add Service
      </Link>
    </div>
    <button className="nav-login">Login</button>
  </nav>
);

// App-Komponente mit Routing
const App: React.FC = () => (
  <BrowserRouter>
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1 className="app-title">∏Work</h1>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <h2 className="section-title">Task4∏</h2>
                <p></p>
              </section>
            }
          />
          <Route path="/services" element={<ServiceManager />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Task4Pi. All rights reserved.</p>
        <p>
          <Link to="/impressum" className="footer-link">
            Impressum
          </Link>
          |
          <Link to="/datenschutz" className="footer-link">
            Datenschutz
          </Link>
          |
          <Link to="/kontakt" className="footer-link">
            Kontakt
          </Link>
        </p>
      </footer>
    </div>
  </BrowserRouter>
);

export default App;
