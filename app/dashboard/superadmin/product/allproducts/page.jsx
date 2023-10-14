'use client'
import {useState,useEffect} from 'react';
import AdminProductView from '@/components/AdminProductView';

export default function AdminProductListView() {
   
    
    const [products,setProducts] = useState(null);
    const [quizzes,setQuizzes] = useState(null);
    const fetchQuizData = async () => {
        
        try {
          const response = await fetch('/api/Quiz');
          if (response.ok) {
            const data = await response.json();
          
           setQuizzes(data.quizzes);
          } else {
            console.error('Failed to fetch quiz data');
          }
        } catch (error) {
          console.error('Error fetching quiz data:', error);
        }
      };
      
      async function getAllProducts() {
        try {
          // Make a GET request to the /api/Product endpoint
          const response = await fetch('/api/Product');
      
          // Check if the response status is okay (HTTP 200-299)
          if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status}`);
          }
      
          // Parse the response as JSON
          const myProducts = await response.json();
      console.log(myProducts);
          // Return the array of products
         setProducts(myProducts.products);
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error; // You can choose to handle the error or re-throw it
        }
      }
  
 useEffect(()=>{getAllProducts()},[]);
 useEffect(()=>{fetchQuizData()},[]);
 useEffect(()=>{console.log(products)},[products]);     
  return (
    products && quizzes ?
    <div>
      {products.map((product) => (
        <AdminProductView key={product._id} incomingProduct={product} quizzes={quizzes} />
      ))}
    </div>
    : <div>loading...</div>
  );
}