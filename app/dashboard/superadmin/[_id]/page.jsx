'use client';
import { useState } from "react";
import ProductEditForm from "@/components/ProductEditForm";
import { getProducts } from "@/utils/getData";
export default function SuperAdminDashboard() {
    const [displayProducts,setDisplayProducts] = useState(null);
    const getAllProducts = async () => {
       const products = await getProducts();
       if(!displayProducts){
       setDisplayProducts(products);
       console.log(products,"in admin dash products");
       console.log("in admin dash products ranning");
       };
    };
    getAllProducts();
  
    return(
        <>
        <h1 className="text-2xl font-bold mb-4 text-[#fde1e2] bg-[#999595]  p-2">Current Products</h1>
        {displayProducts ?
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayProducts.map(product => (
            <ProductEditForm
             key={product._id}
             productData={product}
             setDisplayProducts={setDisplayProducts}
             />
        ))}
        </div>
        :
        <div>No product yet or loading</div>}
        </>
    );
};