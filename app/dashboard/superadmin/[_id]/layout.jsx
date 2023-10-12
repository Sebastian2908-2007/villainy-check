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
      const response = await fetch('/api/Dashboard/superadmin');
      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        setAdminData(decodedUserData);
        console.log(decodedUserData);
        if(decodedUserData.isSuperAdmin === false) {
            push('/login/superadmin');
        }
        return;
      }
      else{
        push('/login/superadmin');
      }
    };

    return(
        adminData ? 
        <div>
        <h1>{adminData.firstName}'s super admin Dashboard</h1>
        <section>{children}</section>
        </div>
        :
        <div>loading</div>
        
    );
};