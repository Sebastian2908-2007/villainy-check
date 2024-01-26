'use client'
import React, { useState, useRef, useEffect } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Link from 'next/link';
import Cookies from "js-cookie";
import decode from "jwt-decode";

const Drawer = () => {
    let userData;
    let isSuperAdmin;
    const userCookie = Cookies.get('userinfocookie');

if(userCookie) {
    userData = decode(userCookie);
    isSuperAdmin = userData.isSuperAdmin;
}





  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Close the drawer when clicking outside
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button onClick={toggleDrawer} className="hover:text-[#fde1e2]  py-2 px-4 text-[#999595]">
        {isOpen ? ' ' : <ArrowCircleLeftIcon />}
      </button>
      {isOpen && (
        <div
          className="
          fixed 
          top-0 
          right-0 
          h-full 
          w-64 
          bg-[#999595] 
          shadow-lg 
          transform 
          translate-x-0 
          transition-transform 
          ease-in-out 
          duration-300
          "
          ref={drawerRef}
        >
          <div className="p-4 flex justify-between">
          <button onClick={closeDrawer} className="text-[#8b0000] mb-8">
              X
            </button>
          <h2 className="text-2xl font-semibold text-white border-b-2 border-[#fde1e2] mb-4 py-2">
             Admin Navigation
          </h2>
          </div>
          <div className="p-4">
            {/* Replace anchor tags with Link components */}
            <ul>
              <li  className='mb-2'>
                <Link
                 onClick={closeDrawer}
                className="text-[#fde1e2] hover:text-white underline" 
                href={
                    isSuperAdmin ?
                    `/dashboard/superadmin/${userData && userData._id}`
                    :
                    `/dashboard/paidadmin/${userData && userData._id}`}
                   
                    >
                  Dashboard
                </Link>
              </li>

             {isSuperAdmin ? <li className='mb-2 flex flex-col'>
                <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/createquiz">
                  Create Quiz
                </Link>
                <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/addtesters">
                  Add Subjects
                </Link> 
              </li>
              :
              <li className='mb-2'>
                <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/paidadmin/addtesters">
                  Add Subjects
                </Link> 
              </li>
              }
            {isSuperAdmin ?
              <li className='mb-2'>
               {/* <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/settings">
                 Profile Settings
            </Link>*/}
            <div></div>
              </li>
              :
              <li className='mb-2'>
                <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/paidadmin/settings">
                 Profile Settings
                </Link>
              </li>
             }
             {
             isSuperAdmin &&
             <li className='mb-2'>
             <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/product">
               Add Product
             </Link>
           </li >
             }
             {
             isSuperAdmin &&
             <li className='mb-2'>
             <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/quizzes">
               All Quizzes
             </Link>
           </li>
             }
             {
             isSuperAdmin &&
             <li className='mb-2'>
             <Link onClick={closeDrawer} className="text-[#fde1e2] hover:text-white underline" href="/dashboard/superadmin/users">
               All users
             </Link>
           </li>
             }
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;

