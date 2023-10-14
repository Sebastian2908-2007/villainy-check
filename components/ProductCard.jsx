'use client'
import clientDatabase from '@/utils/dexieDb';


const ProductCard = ({ product }) => {

    const newProduct = {
        _id: product._id ,
        productTitle: product.productTitle ,
        marketingCopy: product.marketingCopy ,
        quiz: product.quiz._id,
        price: product.price ,
        type: product.type ,
      };

      async function addProductToClientDatabase() {
        try {
          await clientDatabase.product.add(newProduct);
          console.log('Product added to the database.');
        } catch (error) {
          console.error('Error adding product:', error);
        }
      }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.productTitle}</h2>
        <p className="text-gray-500 mb-2">Quiz Title: {product.quiz.quizTitle}</p>
        <p className="text-gray-500 mb-4">{product.marketingCopy}</p>
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">Price: ${product.price}</span>
          <button
           onClick={addProductToClientDatabase}
            className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


