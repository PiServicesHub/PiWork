// src/components/SplashScreen.tsx
import React from 'react';
import './SplashScreen.css';  // hier lädst du dein CSS

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <h1 className="splash-title">∏Work</h1>
      <p className="splash-subtitle">Loading your digital economy...</p>
    </div>
  );
};

export default SplashScreen;
