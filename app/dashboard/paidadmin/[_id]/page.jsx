'use client'
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";
import { useEffect, useState } from "react";
export default function AdminDash() {
    let decodedData;
    const [data,setData] = useState(null);
    const userCookie = Cookies.get('userinfocookie');

    const userData = (userData) => {
        setData(userData);
       };

    if (userCookie) {
       decodedData = decode(userCookie);
        console.log(decodedData);
        
    }
  
  
    return(
       data ? <UniModal
         title={"Organization Details"}
        content={<UpdateUserDetails userId={decodedData._id}/>}
          />:<div
          onClick={() => { userData(decodedData) }}
          className="
           text-black
            font-semibold
             py-2
              px-4
               rounded cursor-pointer
                hover:text-blue-700"
        >
          Actions
        </div>
        
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>