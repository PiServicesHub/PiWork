// src/components/ServiceManager.tsx

import React, { useState } from "react";

const ServiceManager = () => {
  const [newService, setNewService] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const handleAddService = () => {
    if (newService) {
      setServices([...services, newService]);
      setNewService("");
    }
  };

  return (
    <div>
      <h1>Service Manager</h1>
      <input
        type="text"
        value={newService}
        onChange={(e) => setNewService(e.target.value)}
        placeholder="Neuen Service eingeben"
      />
      <button onClick={handleAddService}>Service hinzufügen</button>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceManager;

// Füge diesen Export hinzu
export {};
