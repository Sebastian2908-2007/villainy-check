'use client'

import {  useState } from "react";
import SetGlobalState from "@/components/SetGlobalState";
import PaidAllUsers from "@/components/PaidAllUsers";
export default function AdminDash() {
    

    const [openUsers,setOpenUsers] = useState(null);
   
const toggleUsers = () => {
  if(openUsers) {
    setOpenUsers(false);
  }else{
    setOpenUsers(true);
  }
};

   
    return(
     <div>
          <SetGlobalState/>
          <section className="flex flex-col justify-center items-center w-[100%]">
         
      
        <button
          onClick={() => { toggleUsers(); }}
          className="
          font-semibold
          py-2
          px-4
          rounded cursor-pointer
          bg-[#849b9f]
          hover:bg-[#fde1e2]
          hover:text-white
          text-[#fde1e2]
          flex flex-row 
          justify-center
          m-4
          w-[50%]
                "
        >
          View testers
        </button>
        </section>
        <section className="p-2 min-[360px]:p-4">
        {openUsers && <PaidAllUsers/>}
        </section>
          </div>
        
        
        
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>