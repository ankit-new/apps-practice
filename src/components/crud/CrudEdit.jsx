import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CrudEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    sku: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/crudActions");
      const data = await response.json();
      console.log(data , "edit")

      const foundProduct = data.find((item) => item.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setFormData({
          name: foundProduct.name,
          description: foundProduct.description,
          category: foundProduct.category,
          price: foundProduct.price,
          stock: foundProduct.stock,
          sku: foundProduct.sku
        });
      }
    };
  
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/crudActions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: parseInt(id) }), 
    });

    navigate("/crud"); 
  };

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">SKU:</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default CrudEdit;
