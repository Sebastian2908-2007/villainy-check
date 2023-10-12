'use client'
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import decode from 'jwt-decode';

export default function SuperAdminDashboardLayout({children}){
   const [adminData,setAdminData] = useState(null);
    const { push } = useRouter();
    
  
    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
      const response = await fetch('/api/Dashboard/paidadmin');
      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        setAdminData(decodedUserData);
        console.log(decodedUserData);
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
        adminData ? 
        <div>
        <h1>{adminData.firstName}'s paid Dashboard</h1>
        <section>{children}</section>
        </div>
        :
        <div>loading</div>
        
    );
};