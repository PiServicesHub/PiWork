import React, { useState } from "react";

const ServiceManager = () => {
  const [newService, setNewService] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [services, setServices] = useState<{ name: string; category: string; price: number }[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddService = () => {
    if (newService && category && price !== "" && price !== 0) {
      setServices([
        ...services,
        {
          name: newService,
          category: category,
          price: price as number, // Sicherstellen, dass price als Zahl behandelt wird
        },
      ]);
      // Formular zurücksetzen
      setNewService("");
      setCategory("");
      setPrice("");
      setShowForm(false); // Form schließen
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service Manager</h1>
      <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
        + Add Service
      </button>

      {showForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Neuen Service hinzufügen</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="serviceName" className="block text-gray-700">Service Name</label>
              <input
                id="serviceName"
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Name des Services"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700">Kategorie</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="">Wähle eine Kategorie</option>
                <option value="Design">Design</option>
                <option value="Entwicklung">Entwicklung</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700">Preis (Pi)</label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Preis in Pi"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex gap-2">
              <button type="button" onClick={handleAddService} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Service hinzufügen
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      )}

      {services.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Aktuelle Services</h2>
          <ul className="list-disc pl-5">
            {services.map((service, index) => (
              <li key={index}>
                <strong>{service.name}</strong> - {service.category} - {service.price} Pi
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceManager;
