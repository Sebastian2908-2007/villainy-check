'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MAX_AGE } from "@/utils/constants";
import decode from 'jwt-decode';

import Drawer from "@/components/Drawer";
import { PAID_ADMIN_COOKIE_NAME,COOKIE_NAME } from "@/utils/constants";

export default function QuizLayout({children}){
    
  
    const { push } = useRouter();
    
  
    useEffect(() => {
        getUserData();
    },[]);

    const getUserData = async () => {
      const response = await fetch('/api/takequiz');
      
      if(response.ok) {
        const data = await response.json();
       console.log(data);
    };
   
    const userInfoCookie = Cookies.get('userinfocookie');
    
    
    if(userInfoCookie){
      Cookies.remove('userinfocookie');
      console.log(`userinfocookie deleted`);
    };
  
};

    return(
      <div className="flex flex-col   w-full">
      <section className="flex flex-col w-full ">
        {children}
      </section>
    </div>
    
        
    );
};