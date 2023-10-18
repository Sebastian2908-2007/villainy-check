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
       //console.log(data,"my data");
    };
   
    const userInfoCookie = Cookies.get('userinfocookie');
    
    
    if(userInfoCookie){
      Cookies.remove('userinfocookie');
      console.log(`userinfocookie deleted`);
    };
  
};

    return(
      // key width below
      <div className="min-h-screen w-[100%]    min-[768px]:w-[90%] " >
      <section className="flex flex-col  w-full h-auto ">
        {children}
      </section>
    </div>
    
        
    );
};