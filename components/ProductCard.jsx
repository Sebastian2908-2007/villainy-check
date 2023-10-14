import React from 'react';








const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.productTitle}</h2>
        <p className="text-gray-500 mb-2">Quiz Title: {product.quiz.quizTitle}</p>
        <p className="text-gray-500 mb-4">{product.marketingCopy}</p>
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">Price: ${product.price}</span>
          <a
            href="/buy-now-link-here"
            className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


