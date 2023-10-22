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
    const [isOpen, setIsOpen] = useState(false);
const toggleUsers = () => {
  if(openUsers) {
    setOpenUsers(false);
  }else{
    setOpenUsers(true);
  }
};

    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    };
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
  
  useEffect(()=>{console.log(isOpen)},[isOpen]);
    return(
       data ? 
       <div>
       <UniModal
        title={"Organization Details"}
        content={<UpdateUserDetails userId={data._id}/>}
        isOpen={isOpen}
        closeModal={closeModal}
        
          />
          <SetGlobalState/>
          <section className="flex flex-col justify-center items-center w-[100%]">
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
          :
          <div>loading...</div>
        
        
        
     
    );
};
//  <UpdateUserDetails userId={adminData._id}/>