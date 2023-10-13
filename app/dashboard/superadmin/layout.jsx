'use client'
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MAX_AGE } from "@/utils/constants";
import decode from 'jwt-decode';
import Drawer from "@/components/Drawer";

export default function SuperAdminDashboardLayout({children}){
  let existingCookie;
    const { push } = useRouter();
    
  
    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
      const response = await fetch('/api/Dashboard/superadmin');

      if(response.ok) {
        const data = await response.json();
        const decodedUserData = decode(data.value);
        const token = data.value;
        //console.log(token);

        // set a browser cookie for use across profile
        existingCookie = Cookies.get('userinfocookie');
        if(!existingCookie) {
         Cookies.set('userinfocookie',token,{expires: MAX_AGE});
         existingCookie = Cookies.get('userinfocookie');
        }

        if(decodedUserData.isSuperAdmin === false) {
            push('/login/superadmin');
        }
        return;
      }else{
        push('/login/superadmin');
      }

    };

    return(
         
      <div className="flex flex-col   w-full">
      <header className=" flex flex-row justify-end w-full">
        <Drawer />
      </header>
      <section className="flex flex-col w-full ">
        {children}
      </section>
    </div>
       
        
    );
};