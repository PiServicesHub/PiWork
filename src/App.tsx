import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';
import ServiceListPreview from './components/ServiceListPreview';

// Navigation-Komponente
const Navigation: React.FC = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link button-animated">∏Home</Link>
      <Link to="/services" className="nav-link button-animated">Marketplace</Link>
      <Link to="/login" className="nav-link button-animated">Login</Link>
    </div>
  </nav>
);

// App-Komponente mit Routing
const App: React.FC = () => (
  <BrowserRouter>
    <div className="app-container">
      {/* Intro */}
      <div id="intro">
        <span id="typing-text" className="typing">Welcome to PiWork! Your platform for Pi services.</span>
      </div>

      {/* Header */}
      <header className="header">
        <div className="navbar">
          <div className="nav-links">
            <h1 className="app-title">∏Work</h1>
          </div>
        </div>
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
                <p className="section-subtitle">Your platform for Pi services</p>
                <ServiceListPreview />
              </section>
            }
          />
          <Route path="/services" element={<ServiceManager />} />
          {/* Placeholder for future routes */}
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
