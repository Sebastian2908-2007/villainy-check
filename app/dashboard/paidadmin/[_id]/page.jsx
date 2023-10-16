'use client'
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import SetGlobalState from "@/components/SetGlobalState";
import PaidAllUsers from "@/components/PaidAllUsers";
export default function AdminDash() {
    let decodedData;
    const [data,setData] = useState(null);
    const [openUsers,setOpenUsers] = useState(null);
    

    const userData = (userData) => {
        setData(userData);
       };

       useEffect(() => {
        setTimeout(() => {
        const userCookie = Cookies.get('userinfocookie');
      console.log(userCookie,"USERCOOKIE")
       decodedData = decode(userCookie);
        console.log(decodedData);
        userData(decodedData);
      },1000);
  },[]);
  
  useEffect(()=>{console.log(data)},[data]);
    return(
       data ? 
       <div>
       <UniModal
       
         title={"Organization Details"}
        content={<UpdateUserDetails userId={data._id}/>}
          />
          <SetGlobalState/>
        <button
          onClick={() => { setOpenUsers(true); }}
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
          View testers
        </button>
        {openUsers && <PaidAllUsers/>}
          </div>
          :
          <div>loading...</div>
        
        
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>