import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ServiceManager from './components/ServiceManager';
import ServiceListPreview from './components/ServiceListPreview';
import './styles.css'; // Wichtig für das CSS unten

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <h1 className="splash-title">∏Work</h1>
      <p className="splash-subtitle">Loading your digital economy...</p>
    </div>
  );
};

const Navigation: React.FC = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/" className="nav-link button animated">Home</Link>
      <Link to="/services" className="nav-link button animated">Marketplace</Link>
      <Link to="/login" className="nav-link button animated">Login</Link>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7500);
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
                  <h2 className="section-title">Task4∏</h2>
                  <p className="section-subtitle">Your platform for Pi services </p>
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
            <Link to="/impressum" className="footer-link ">Impressum</Link> |
            <Link to="/datenschutz" className="footer-link">Datenschutz</Link> |
            <Link to="/kontakt" className="footer-link">Kontakt</Link>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
