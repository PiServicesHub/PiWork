import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ServiceManager from './components/ServiceManager';
import ServiceListPreview from './components/ServiceListPreview';
import SplashScreen from './components/SplashScreen';  // Nur die Komponente importieren
import './styles.css';  // Globale Styles

const Navigation: React.FC = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link button animated">Home</Link>
      <Link to="/services" className="nav-link button animated">Marketplace</Link>
      <Link to="/services" className="nav-link button animated">Swift Transfer</Link>
      <Link to="/login" className="nav-link button animated">Login</Link>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <div className="header-inner">
            <h1 className="app-title">∏Work</h1>
          </div>
        </header>

        <Navigation />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <section>
                  <h2 className="app-title">T4Pi: Empowering Digital Economies</h2>
                  <p className="section-subtitle">Unlock the future of decentralized services with ease and security.</p>
                  <ServiceListPreview />
                </section>
              }
            />
            <Route path="/services" element={<ServiceManager />} />
            <Route path="/add-request" element={<p>Add Request Page (Coming Soon)</p>} />
            <Route path="/sell" element={<p>Sell Service Page (Coming Soon)</p>} />
            <Route path="/login" element={<p>Login Page (Coming Soon)</p>} />
          </Routes>
        </main>

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
};

export default App;
