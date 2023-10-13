/*import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveAsIcon from '@mui/icons-material/SaveAs';*/

/*import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function AdminProductView({ incomingProduct,quizzes }) {
  // State to toggle editing mode for the product
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [product, setProduct] = useState(incomingProduct);

  const toggleEditingProduct = () => {
    setIsEditingProduct(!isEditingProduct);
  };

  const handleEditProduct = async () => {
    try {
      // Prepare the updated data. You should replace this with your actual data.
      const updatedData = {
        productTitle: product.productTitle,
        marketingCopy: product.marketingCopy,
        price: product.price,
        type: product.type,
        // Add or update other fields as needed
      };
console.log(updatedData);
      const productId = product._id;

      // Send a PUT request to update the product data
      const response = await fetch(`/api/Product/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, updatedData }),
      });

      if (!response.ok) {
        throw new Error(`Error updating product data: ${response.statusText}`);
      }

      const data = await response.json();

      // Handle the response or update your state as needed
      console.log('Product data updated:', data);

      // Exit edit mode
      setIsEditingProduct(false);
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error if needed
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the product state with the new value
    setProduct({ ...product, [name]: value });
  };

  return (
    product && (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product View</h1>

        <div key={product._id} className="border p-4 rounded-md shadow-md w-full">
          <button className="text-blue-500 hover:underline" onClick={toggleEditingProduct}>
            {isEditingProduct ? (
              <SaveIcon onClick={handleEditProduct} />
            ) : (
              <EditIcon />
            )}
          </button>
          <h2 className="text-lg font-semibold">
            Product Title:{' '}
            {isEditingProduct ? (
              <input
                name="productTitle"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.productTitle}
                onChange={handleInputChange}
              />
            ) : (
              product.productTitle
            )}
          </h2>
          <p className="text-gray-500 mb-2">
            Marketing Copy:{' '}
            {isEditingProduct ? (
              <input
                name="marketingCopy"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.marketingCopy}
                onChange={handleInputChange}
              />
            ) : (
              product.marketingCopy
            )}
          </p>
          <p className="text-gray-500 mb-2">
            Price:{' '}
            {isEditingProduct ? (
              <input
                name="price"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.price}
                onChange={handleInputChange}
              />
            ) : (
              product.price
            )}
          </p>
          <p className="text-gray-500 mb-2">
            Type:{' '}
            {isEditingProduct ? (
              <input
                name="type"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.type}
                onChange={handleInputChange}
              />
            ) : (
              product.type
            )}
          </p>
        </div>
      </div>
    )
  );
}*/

import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function AdminProductView({ incomingProduct, quizzes }) {
    /**ALWAYS PASS A SINGLE PRODUCT AND ALL QUIZZES DATA FOR SELECT EL */
  // State to toggle editing mode for the product
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [product, setProduct] = useState(incomingProduct);
  const [selectedQuizId, setSelectedQuizId] = useState(''); // Initially, no quiz is selected
  const [createdProduct, setCreatedProduct] = useState(null);

  const toggleEditingProduct = () => {
    setIsEditingProduct(!isEditingProduct);
  };

  const handleEditProduct = async () => {
    let updatedData;
    try {
        if(selectedQuizId !== ''){
            updatedData = {
                productTitle: product.productTitle,
                marketingCopy: product.marketingCopy,
                price: product.price,
                type: product.type,
               quiz: selectedQuizId
                // Add or update other fields as needed
              };
        }else{
      // Prepare the updated data. You should replace this with your actual data.
       updatedData = {
        productTitle: product.productTitle,
        marketingCopy: product.marketingCopy,
        price: product.price,
        type: product.type,
       
        // Add or update other fields as needed
      };
    }

      const productId = product._id;

      // Send a PUT request to update the product data
      const response = await fetch(`/api/Product/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, updatedData }),
      });

      if (!response.ok) {
        throw new Error(`Error updating product data: ${response.statusText}`);
      }

      const data = await response.json();

      // Handle the response or update your state as needed
      console.log('Product data updated:', data);

      // Exit edit mode
      setIsEditingProduct(false);
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error if needed
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the product state with the new value
    setProduct({ ...product, [name]: value });
  };

  const handleQuizSelect = (e) => {
    setSelectedQuizId(e.target.value);
  };

  return (
    product && (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product View</h1>

        <div key={product._id} className="border p-4 rounded-md shadow-md w-full">
          <button className="text-blue-500 hover:underline" onClick={toggleEditingProduct}>
            {isEditingProduct ? (
              <SaveIcon onClick={handleEditProduct} />
            ) : (
              <EditIcon />
            )}
          </button>
          <h2 className="text-lg font-semibold">
            Product Title:{' '}
            {isEditingProduct ? (
              <input
                name="productTitle"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.productTitle}
                onChange={handleInputChange}
              />
            ) : (
              product.productTitle
            )}
          </h2>
          <p className="text-gray-500 mb-2">
            Marketing Copy:{' '}
            {isEditingProduct ? (
              <input
                name="marketingCopy"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.marketingCopy}
                onChange={handleInputChange}
              />
            ) : (
              product.marketingCopy
            )}
          </p>
          <p className="text-gray-500 mb-2">
            Price:{' '}
            {isEditingProduct ? (
              <input
                name="price"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.price}
                onChange={handleInputChange}
              />
            ) : (
              product.price
            )}
          </p>
          <p className="text-gray-500 mb-2">
            Type:{' '}
            {isEditingProduct ? (
              <input
                name="type"
                className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={product.type}
                onChange={handleInputChange}
              />
            ) : (
              product.type
            )}
          </p>

          {isEditingProduct && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz">
                Select a Quiz:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="quiz"
                value={selectedQuizId}
                onChange={handleQuizSelect}
              >
                <option value="" disabled>
                  Choose a Quiz
                </option>
                {quizzes.map((quiz) => (
                  <option key={quiz._id} value={quiz._id}>
                    {quiz.quizTitle}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    )
  );
}

