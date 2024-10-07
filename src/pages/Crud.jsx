import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Crud = () => {
  const [crudActions, setCrudActions] = useState([]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  
  const handleDelete = async (id) => {
   try{
   const response =  await fetch(`http://localhost:3001/crudActions/${id}`,{
    method : 'Delete',
   })

   if(!response.ok){
    console.log("new error")
   }

   setCrudActions((item) => 
    item.filter((product) => product.id !== id)
   )
   
   }catch{
    console.log("rrro")
   }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/crudActions");
      const data = await response.json();
      console.log(data, "daata");
      setCrudActions(data);
    };

    fetchData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <button
        onClick={() => navigate("/newProduct")} 
        className="mb-6 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
      >
        Add CRUD
      </button>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {crudActions.map((product) => (
          <div
            key={product.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536M16.5 3.5a2.121 2.121 0 013 3L7 19H4v-3L16.5 3.5z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-2">
              Category: {product.category}
            </p>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4">
              <p className="text-gray-800 font-semibold">
                Price: ${product.price}
              </p>
              <p className="text-gray-500">SKU: {product.sku}</p>
              <p className="text-gray-500">Stock: {product.stock} available</p>
              <p className="text-gray-500 text-xs mt-2">
                Created: {product.createdAt} | Updated: {product.updatedAt}
              </p>
            </div>
{/* 
            <button
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => console.log(`Viewing ${product.name}`)}
            >
              View Product
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
