import React, { useState, useEffect } from 'react';

const ServiceManager: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Array<{ name: string; category: string; description: string }>>([]);

  const toggleForm = () => setShowForm((prev) => !prev);

  const addService = (newService: { name: string; category: string; description: string }) => {
    setServices((prev) => [...prev, newService]);
    setShowForm(false);
  };

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h2 className="section-title">Service Manager</h2>
      </header>

      {/* Services Section */}
      <section>
        <button onClick={toggleForm} className="nav-login" style={{ marginBottom: '20px' }}>
          + Add Service
        </button>

        {showForm && <ServiceForm onSubmit={addService} />}

        {services.length > 0 ? (
          <table className="service-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>{service.description}</td>
                  <td>
                    <button onClick={() => alert('Sell action coming soon')} className="action-button sell">
                      Sell
                    </button>
                    <button
                      onClick={() => setServices(services.filter((_, i) => i !== index))}
                      className="action-button buy"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: '#ccc' }}>Sorry, no services available yet</p>
        )}
      </section>
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
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Service Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="nav-login">Save Service</button>
    </form>
  );
};

export default ServiceManager;
