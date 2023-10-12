'use client'
import UpdateUserDetails from "@/components/UpdateUserDetails";
import Cookies from "js-cookie";
import UniModal from "@/components/UniModal";
import decode from "jwt-decode";
export default function AdminDash() {
   let decodedData;
    const userCookie = Cookies.get('userinfocookie');

    if (userCookie) {
       decodedData = decode(userCookie);
        console.log(decodedData);
    }
   
    return(
        <UniModal title={"Organization Details"} content={<UpdateUserDetails userId={decodedData._id}/>}/>
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>