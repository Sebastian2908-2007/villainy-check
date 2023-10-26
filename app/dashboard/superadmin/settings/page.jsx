'use client'
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";
import EditIcon from '@mui/icons-material/Edit';
import {  useState } from "react";
export default function Settings() {
    let decodedData;
    const [data,setData] = useState(null);
    const userCookie = Cookies.get('userinfocookie');

    const userData = (userData) => {
        setData(userData);
       };

    if (userCookie) {
       decodedData = decode(userCookie);   
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