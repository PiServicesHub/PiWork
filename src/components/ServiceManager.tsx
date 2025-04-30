import React, { useState } from "react";

const ServiceManager = () => {
  const [newService, setNewService] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | "">(0);
  const [services, setServices] = useState<{ name: string; category: string; price: number }[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddService = () => {
    if (newService && category && price) {
      setServices([
        ...services,
        {
          name: newService,
          category: category,
          price: price,
        },
      ]);
      // Formular zurücksetzen
      setNewService("");
      setCategory("");
      setPrice(0);
      setShowForm(false); // Form schließen
    }
  };

  return (
    <div>
      <h1>Service Manager</h1>
      <button onClick={() => setShowForm(true)} className="button">+ Add Service</button>

      {showForm && (
        <div>
          <h2>Neuen Service hinzufügen</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="serviceName">Service Name</label>
              <input
                id="serviceName"
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Name des Services"
              />
            </div>

            <div>
              <label htmlFor="category">Kategorie</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Wähle eine Kategorie</option>
                <option value="Design">Design</option>
                <option value="Entwicklung">Entwicklung</option>
                <option value="Marketing">Marketing</option>
                {/* Weitere Kategorien können hier hinzugefügt werden */}
              </select>
            </div>

            <div>
              <label htmlFor="price">Preis (Pi)</label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Preis in Pi"
              />
            </div>

            <button type="button" onClick={handleAddService} className="button">Service hinzufügen</button>
            <button type="button" onClick={() => setShowForm(false)} className="button">Abbrechen</button>
          </form>
        </div>
      )}

      <h2>Aktuelle Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong> - {service.category} - {service.price} Pi
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceManager;
