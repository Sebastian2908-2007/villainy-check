'use client';
import React, { useState } from 'react';
import { getProducts } from "@/utils/getData";
const ProductEditForm = ({ productData,setDisplayProducts }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(productData);

  const refetch = async () => {
    const products = await getProducts(); 
   setDisplayProducts(products);
};

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async () => {
    // Assuming you have an API endpoint to handle the update
    try {
      const response = await fetch(`/api/Product`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({productId:productData._id,updatedData:editedData}),
      });

      if (response.ok) {
        refetch();
        setIsEditing(false); // Disable editing mode on successful update
      } else {
        // Handle errors, display a message, etc.
      }
    } catch (error) {
      // Handle network errors, display a message, etc.
      console.error(error);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 bg-[#849b9f] p-2 text-white">
        {isEditing ? (
          <input
            type="text"
            name="productTitle"
            value={editedData.productTitle}
            onChange={handleInputChange}
            className="w-full border-b-2 border-blue-500 focus:outline-none"
          />
        ) : (
          productData.productTitle
        )}
      </h1>

      <p className="mb-2">
        {isEditing ? (
          <textarea
            name="marketingCopy"
            value={editedData.marketingCopy}
            onChange={handleInputChange}
            className="w-full h-20 border border-gray-300 focus:outline-none"
          />
        ) : (
          productData.marketingCopy
        )}
      </p>

      <p className="mb-2">
        <strong>Price:</strong>{' '}
        {isEditing ? (
          <input
            type="text"
            name="price"
            value={editedData.price}
            onChange={handleInputChange}
            className="border border-gray-300 focus:outline-none"
          />
        ) : (
          productData.price
        )}
      </p>

      <p>
        <strong>Quiz Title:</strong> {productData.quiz.quizTitle}
      </p>

      <div className="mt-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="
            px-4
             py-2 
             bg-[#849b9f]
             text-[#fde1e2]
          border
          border-[#fde1e2]
          hover:bg-[#849b9f]
          hover:text-[#fde1e2]
          hover:border-[#999595] 
             rounded 
             mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditToggle}
            className="
             px-4
             py-2 
             bg-[#849b9f]
             text-[#fde1e2]
          border
          border-[#fde1e2]
          hover:bg-[#fde1e2]
          hover:text-[#999595]
          hover:border-[#999595]
          rounded
             mr-2"
          >
            Edit
          </button>
        )}

        {isEditing && (
          <button
            onClick={handleEditToggle}
            className="
            px-4 
            py-2 
            bg-[#8B0000] 
            text-white 
            rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductEditForm;

