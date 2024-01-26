'use client';
import { useState } from "react";
import ProductEditForm from "@/components/ProductEditForm";
import { getProducts } from "@/utils/getData";
import PaidAllUsers from "@/components/PaidAllUsers";
import SetGlobalState from "@/components/SetGlobalState";
export default function SuperAdminDashboard() {
    const [displayProducts,setDisplayProducts] = useState(null);
    const [openUsers,setOpenUsers] = useState(null);
    const getAllProducts = async () => {
       const products = await getProducts();
       if(!displayProducts){
       setDisplayProducts(products);
       };
    };
    getAllProducts();

    const toggleUsers = () => {
        if(openUsers) {
          setOpenUsers(false);
        }else{
          setOpenUsers(true);
        }
      };
    return(
        <>
        <SetGlobalState/>
        <h1 className="text-2xl font-bold mb-4 text-[#fde1e2] bg-[#999595]  p-2">
            Current Products
        </h1>
       


        <button
          onClick={() => { toggleUsers(); }}
          className="
          font-semibold
          py-2
          px-4
          rounded cursor-pointer
          bg-[#849b9f]
          hover:bg-[#fde1e2]
          hover:text-white
          text-[#fde1e2]
          flex flex-row 
          justify-center
          m-4
          w-[50%]
                "
        >
          View testers
        </button>
      
        <section className="p-2 min-[360px]:p-4">
        {openUsers && <PaidAllUsers/>}
        </section>
          


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