'use client'
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import decode from 'jwt-decode';
import Link from "next/link";

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
        return;
      }
      else{
        push('/login');
      }
    };

    return(
        userData ? 
        <div>
        {!userData.quizComplete ?<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center bg-[#849b9f] p-2 mt-4 text-gray-100">
         {userData.firstName}, you have not quizzed yet!
         </h1>:
            <h1  className="text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            xl:text-6xl 
            text-center 
            text-gray-800
            "
            >
   Congrats on quizzing. Quiz others by:
            </h1>}
        <section>
          {!userData.quizComplete ?
          <>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-600">
  You can do so for free by:
           </h2>
         <div className="w-full p-4">
          <button
          className="
          w-[100%] 
          md:w-auto 
          bg-[#fde1e2]
          text-[#999595] 
          rounded-md 
          py-2 px-4  
          hover:bg-[#999595] 
          hover:text-[#fde1e2] 
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#fde1e2]
          "
          ><Link href='/quiz/public/quizzes'>Clicking Here</Link>
          </button>
          </div>
          </>
:
<div className="w-full p-4">
          <button
          className="
          w-[100%] 
          md:w-auto 
          bg-[#fde1e2]
          text-[#999595] 
          rounded-md 
          py-2 px-4  
          hover:bg-[#999595] 
          hover:text-[#fde1e2] 
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#fde1e2]
          "
          ><Link href='/products'>Clicking Here</Link>
          </button>
          </div>
}
        </section>
        <section>{children}</section>
        </div>
        :
        <div>loading</div>
        
    );
};