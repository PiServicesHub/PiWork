import React, { useEffect, useState } from 'react';

interface Service {
  name: string;
  category: string;
  description: string;
}

const ServiceListPreview: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('services');
    if (saved) {
      setServices(JSON.parse(saved));
    }
    const interval = setInterval(() => {
      const updated = localStorage.getItem('services');
      if (updated) setServices(JSON.parse(updated));
    }, 2000); // Alle 2 Sekunden aktualisieren

    return () => clearInterval(interval);
  }, []);

  if (services.length === 0) {
    return <p style={{ color: '#aaa' }}>Noch keine Services vorhanden.</p>;
  }

  return (
    <div className="service-preview">
      <h3 style={{ color: '#f1f5f9', marginBottom: '10px' }}>Eingetragene Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index} style={{ backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px', marginBottom: '10px' }}>
            <strong style={{ color: '#93c5fd' }}>{service.name}</strong> ({service.category})
            <p style={{ color: '#cbd5e1', margin: 0 }}>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPreview;
