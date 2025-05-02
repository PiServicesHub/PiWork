import React, { useState } from 'react';

const ServiceManager: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Array<{ name: string; category: string; description: string }>>([]);

  const toggleForm = () => setShowForm((prev) => !prev);

  const addService = (newService: { name: string; category: string; description: string }) => {
    setServices((prev) => [...prev, newService]);
    setShowForm(false);
  };

  const handleLogin = () => {
    alert("inspired by Nadja");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">∏Work</h1>
        <button onClick={handleLogin} className="bg-purple-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </header>

      {/* Services Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Current Services</h2>
        <button onClick={toggleForm} className="bg-blue-500 text-white px-3 py-1 rounded mb-4">
        Task4∏
        </button>

        {showForm && <ServiceForm onSubmit={addService} />}

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border p-2">{service.name}</td>
                <td className="border p-2">{service.category}</td>
                <td className="border p-2">{service.description}</td>
                <td className="border p-2">
                  <button
                    onClick={() => alert('Sell action coming soon')}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Sell
                  </button>
                  <button
                    onClick={() => {
                      setServices(services.filter((_, i) => i !== index));
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-600">
        <p>&copy; 2025 Task4Pi. All rights reserved.</p>
        <p className="mt-1">
          <a href="/impressum" className="text-blue-500 hover:underline mx-2">Impressum</a>|
          <a href="/datenschutz" className="text-blue-500 hover:underline mx-2">Datenschutz</a>|
          <a href="/kontakt" className="text-blue-500 hover:underline mx-2">Kontakt</a>
        </p>
      </footer>
    </div>
  );
};

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
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <div className="mb-2">
        <label className="block font-semibold">Service Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block font-semibold">Category</label>
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
        <label className="block font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save Service
      </button>
    </form>
  );
};

export default ServiceManager;
