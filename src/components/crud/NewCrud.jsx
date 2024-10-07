import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NewCrud = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    sku: '',
    stock: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/crudActions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('New product added:', data);

      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        sku: '',
        stock: '',
      });

      navigate("/crud")
      
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="sku">SKU:</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewCrud;
