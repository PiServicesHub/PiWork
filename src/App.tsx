import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';
import ServiceListPreview from './components/ServiceListPreview';

// Navigation-Komponente
const Navigation: React.FC = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link">∏Home</Link>
      <Link to="/services" className="nav-link">Marketplace</Link>
      <Link to="/add-request" className="nav-link">Add Requests</Link>
      <Link to="/sell" className="nav-link">Sell Service</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </div>
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
                <p className="section-subtitle">Deine Plattform für Pi-Dienstleistungen</p>
                <ServiceListPreview />
              </section>
            }
          />
          <Route path="/services" element={<ServiceManager />} />
          {/* Platzhalter für zukünftige Routen */}
          <Route path="/add-request" element={<p>Add Request Page (Coming Soon)</p>} />
          <Route path="/sell" element={<p>Sell Service Page (Coming Soon)</p>} />
          <Route path="/login" element={<p>Login Page (Coming Soon)</p>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Task4Pi. All rights reserved.</p>
        <p>
          <Link to="/impressum" className="footer-link">Impressum</Link> |
          <Link to="/datenschutz" className="footer-link">Datenschutz</Link> |
          <Link to="/kontakt" className="footer-link">Kontakt</Link>
        </p>
      </footer>
    </div>
  </BrowserRouter>
);

export default App;
