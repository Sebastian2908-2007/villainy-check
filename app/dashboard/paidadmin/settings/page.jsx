'use client';
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";

import { useState } from "react";
    
const PaidSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data,setData] = useState(null);
    let decodedData;
    const openModal = () => {
        setIsOpen(true);
      };
      const closeModal = () => {
        setIsOpen(false);
      };
      const userData = (userData) => {
          setData(userData);
         };
  
         const setUserData = () => {
         // setTimeout(() => {
            if(data === null) {
          const userCookie = Cookies.get('userinfocookie');
          if(userCookie) {
      
         decodedData = decode(userCookie);
      
          userData(decodedData);
          }
            }
        //},3000);
    };
    setUserData();
    
    return(
        data ? 
        <div>
        <UniModal
         title={"Organization Details"}
         content={<UpdateUserDetails userId={data._id}/>}
         isOpen={isOpen}
         closeModal={closeModal}
         
           />
        <button
        onClick={isOpen ? closeModal : openModal}
        className="m-8 
        bg-[#849b9f]
        hover:bg-[#fde1e2]
        hover:text-white
        text-[#fde1e2]
        font-bold 
        py-2 
        px-4 
        rounded 
        focus:outline-none 
        focus:shadow-outline
        w-[50%]
        "
      >
        {isOpen ? "Close Modal" : "Edit Org info"}
      </button>
      </div>:<div>loading...</div>
    );
};

export default PaidSettings;