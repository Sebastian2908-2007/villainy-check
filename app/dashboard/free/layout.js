'use client'
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import decode from 'jwt-decode';

export default function DashboardLayout({children}){
   const [userData,setUserData] = useState(null);
    const { push } = useRouter();
    
  
    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
      const response = await fetch('/api/Dashboard/free');
      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        setUserData(decodedUserData);
        console.log(decodedUserData);
        
        return;
      }
      else{
        push('/login');
      }
    };

    return(
        userData ? 
        <div>
        <h1>{userData.firstName}'s free Dashboard</h1>
        <section>{children}</section>
        </div>
        :
        <div>loading</div>
        
    );
};