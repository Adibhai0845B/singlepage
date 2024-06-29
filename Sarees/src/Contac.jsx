import React, { useState } from 'react';

function Contac() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex flex-col max-w-sm p-6 mx-auto space-y-4 bg-white shadow-md rounded-xl">
        <br/>
        <br/>
        <br/>
        <br/>
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">Submit</button>
      </form>
      <div className="text-center">
        <h1>Contact: 9369610919</h1>
        <h1>Email: panchvati81@gmail.com</h1>
      </div>
    </div>
  );
}

export default Contac;
