'use client'
import React, { useState, useEffect } from 'react';
import { getSingleProduct } from '@/utils/getData';
import AdminProductView from '@/components/AdminProductView';
import Select from '@/components/Select';



const ProductPage = () => {
  const [productData, setProductData] = useState({
    productTitle: '',
    marketingCopy: '',
    price: '',
    type: '',
  });
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [quizData, setQuizData] = useState([]); // State to store quiz data
  const [createdProduct,SetCreatedProduct] = useState(null);

  // Function to fetch quiz data from the API
  const fetchQuizData = async () => {
    try {
      const response = await fetch('/api/Quiz');
      if (response.ok) {
        const data = await response.json();
        setQuizData(data.quizzes);
      } else {
        console.error('Failed to fetch quiz data');
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  useEffect(() => {
    fetchQuizData(); // Fetch quiz data when the component mounts
  }, []); // The empty dependency array ensures this runs once after the initial render
  useEffect(() => {
    console.log(createdProduct,"CCCCCPPPP"); 
  }, [createdProduct]); 

  const handleProductDataChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleQuizSelect = (e) => {
    setSelectedQuizId(e.target.value);
  };

  const createProduct = async () => {
    console.log(productData, '***', selectedQuizId);
    try {
      // Combine the product data with the selected quizId
      const newProductData = { ...productData, quizId: selectedQuizId };

      // Send the new product data to your server-side route (e.g., /api/Product) for product creation
      const response = await fetch('/api/Product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProductData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Product created successfully');

        // Clear the form or perform any other actions as needed
        setProductData({
          productTitle: '',
          marketingCopy: '',
          price: '',
          type: '',
        });
        const {product} = await response.json();
       const currentProduct = await getSingleProduct(product._id);
       console.log(currentProduct,"AFTER SUB");
       SetCreatedProduct(currentProduct);
      } else {
        // Handle failure, e.g., show an error message
        console.error('Product creation failed');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:w-2/3">
      <h2 className="text-2xl font-bold mb-4 text-[#fde1e2] bg-[#999595]  p-2">Product Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productTitle">
          Product Title:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="productTitle"
          value={productData.productTitle}
          onChange={handleProductDataChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marketingCopy">
          Marketing Copy:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="marketingCopy"
          value={productData.marketingCopy}
          onChange={handleProductDataChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="price"
          value={productData.price}
          onChange={handleProductDataChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
          Type:
        </label>
        <Select
        options={['payment','subscription']}
        selectedValue={productData.type}
        onChange={handleProductDataChange}
        name={'type'}
        />
        {/*<input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="type"
          value={productData.type}
          onChange={handleProductDataChange}
          required
        />*/}
      </div>

      {/* Quiz Select Dropdown */}
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
          {quizData.map((quiz) => (
            <option key={quiz._id} value={quiz._id}>
              {quiz.quizTitle}
            </option>
          ))}
        </select>
      </div>

      <button
        className="
        border
          bg-[#849b9f] 
          border-[#fde1e2]
          hover:bg-[#fde1e2] 
          hover:text-[#999595]
          hover:border-[#999595] 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded 
        focus:outline-none 
        focus:shadow-outline"
        type="button"
        onClick={createProduct}
      >
        Create Product
      </button>
     {createdProduct ? <AdminProductView incomingProduct={createdProduct} quizzes={quizData}/>:(null)}
    </div>
  );
};

export default ProductPage;


