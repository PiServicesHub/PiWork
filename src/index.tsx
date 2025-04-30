import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './defaults.css';
import ServiceManager from './components/ServiceManager'; // Importiere den ServiceManager

ReactDOM.render(
  <React.StrictMode>
    <ServiceManager />  {/* ServiceManager hier einfügen */}
  </React.StrictMode>,
  document.getElementById('root')
);
