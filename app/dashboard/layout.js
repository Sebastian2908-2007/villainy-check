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
      const response = await fetch('/api/Dashboard');
      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        setUserData(decodedUserData);
        console.log(decodedUserData);
        
        return;
      }
      else{
        push('/');
      }
    };

    return(
        userData ? 
        <h1>{userData.firstName}'s free Dashboard</h1>
        :
        <div>loading</div>
        
    );
};