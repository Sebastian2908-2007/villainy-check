'use client'
import ProductCard from "@/components/ProductCard";
import {useState,useEffect} from 'react';

const ProductList = () => {
    const [products,setProducts] = useState(null);
    async function getAllProducts() {
        try {
          // Make a GET request to the /api/Product endpoint
          const response = await fetch('/api/Product');
      
          // Check if the response status is okay (HTTP 200-299)
          if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status}`);
          };
          // Parse the response as JSON
          const myProducts = await response.json();
          // Return the array of products
         setProducts(myProducts.products);
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error; // You can choose to handle the error or re-throw it
        }
      }
  
 useEffect(()=>{getAllProducts()},[]);
    return (
        products ?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>:<div>loading...</div>
    );
  };
  
  export default ProductList;