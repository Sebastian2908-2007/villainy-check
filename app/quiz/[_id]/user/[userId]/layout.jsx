'use client'
import { useEffect } from "react";
import Cookies from "js-cookie";
export default function QuizLayout({children}){
    
  
   
    
  
    useEffect(() => {
        getUserData();
    },[]);

    const getUserData = async () => {
      const response = await fetch('/api/takequiz');
      
      if(response.ok) {
        const data = await response.json();
    };
   
    const userInfoCookie = Cookies.get('userinfocookie');
    
    
    if(userInfoCookie){
      Cookies.remove('userinfocookie');
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