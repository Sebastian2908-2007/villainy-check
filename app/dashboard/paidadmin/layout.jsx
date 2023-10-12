'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MAX_AGE } from "@/utils/constants";
import decode from 'jwt-decode';

export default function AdminDashboardLayout({children}){
    let existingCookie;
  
    const { push } = useRouter();
    
  
    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
      const response = await fetch('/api/Dashboard/paidadmin');
      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        const token = data.value;
        //setAdminData(decodedUserData);
        // set a browser cookie for use across profile
         existingCookie = Cookies.get('userinfocookie');
       if(!existingCookie) {
        Cookies.set('userinfocookie',token,{expires: MAX_AGE});
        existingCookie = Cookies.get('userinfocookie');
       }
    

        if(decodedUserData.isPaid === false) {
            push('/login');
        }
        return;
      }
      else{
        push('/login');
      }
    };

    return(
        <div>
        <h1> paid Dashboard</h1>
        <section>
            {children}
        </section>
        </div>
        
    );
};