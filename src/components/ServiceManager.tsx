import React, { useState } from 'react';

const ServiceManager: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Array<{ name: string; category: string; description: string }>>([]);

  // Formular anzeigen oder ausblenden
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  // Service hinzufügen
  const addService = (newService: { name: string; category: string; description: string }) => {
    setServices((prev) => [...prev, newService]);
    setShowForm(false); // Formular nach dem Hinzufügen schließen
  };

  return (
    <div>
      <button onClick={toggleForm} className="bg-blue-500 text-white p-2 rounded">
        Add Service
      </button>

      {showForm && (
        <ServiceForm onSubmit={addService} />
      )}

      <div className="mt-4">
        <h2>Service List</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <h3>{service.name}</h3>
              <p>{service.category}</p>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Formular für das Hinzufügen eines neuen Services
const ServiceForm: React.FC<{ onSubmit: (service: { name: string; category: string; description: string }) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, category, description });
    setName('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-2">
        <label className="block">Service Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border p-2 rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
        Save Service
      </button>
    </form>
  );
};

export default ServiceManager;
