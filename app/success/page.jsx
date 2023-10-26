'use client';
import { useState,useEffect } from 'react';
import { decode } from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { MAX_AGE } from '@/utils/constants';
import clientDatabase from '@/utils/dexieDb';
import { useLiveQuery } from "dexie-react-hooks";

const Success = () => {
  let productArr;
 
  const [product, setProduct] = useState(null);
    const router = useRouter();
   

      productArr = useLiveQuery(() => clientDatabase.product.toArray(),[]);
      
    let  updatedData = {
        isPaid: true,
      };
      useEffect(() => {
       
        setProduct(productArr);
      },[productArr]);

      useEffect(() => {
        
       
        const updateUser = async () => {
          updatedData.productType = product[0]._id;
        const userCookie = Cookies.get('userinfocookie');
        const decodedData = decode(userCookie);
        const {_id} = decodedData;
        const userId = _id;
        if(product.length) {
         
        }
        try {
            const response = await fetch('/api/Users/upgrade', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userId, updatedData }),
            });
      
            if (response.ok) {
                const data = await response.json();
                const token = data.value;
                Cookies.remove('userinfocookie');
                Cookies.set('userinfocookie',token,{expires: MAX_AGE});
                setTimeout(() => {
                router.push(`/dashboard/paidadmin/${userId}`);
            },3000);
            } else {
              console.error('Failed tomupdate user paid status');
            }
          } catch (error) {
            console.error('Error updating user paid status:', error);
          }
        };
        if(product) {
        updateUser();
        };
      
      },[product]);

    
   


   
    return(
        <div>Success!!! you upgraded!!!!!!</div>
    );
};

export default Success;