'use client'
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import SetGlobalState from "@/components/SetGlobalState";
export default function AdminDash() {
    let decodedData;
    const [data,setData] = useState(null);
    const userCookie = Cookies.get('userinfocookie');

    const userData = (userData) => {
        setData(userData);
       };

       useEffect(() => {
    if (userCookie) {
       decodedData = decode(userCookie);
        console.log(decodedData);
        userData(decodedData);
    }
  },[]);
  
  
    return(
       data ? 
       <div>
       <UniModal
       
         title={"Organization Details"}
        content={<UpdateUserDetails userId={data._id}/>}
          />
          <SetGlobalState/>
          </div>
          :
          <div
          onClick={() => { console.log(data,"CLICKED") }}
          className="
           text-black
            font-semibold
             py-2
              px-4
               rounded cursor-pointer
                hover:text-blue-700
                bg-blue-500 hover:bg-blue-700
                flex flex-row justify-center
                m-4
                "
        >
          <EditIcon/>
        </div>
        
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>