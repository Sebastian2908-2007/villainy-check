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
    console.log(userData);
    console.log(userData.isSuperAdmin);
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
      <button onClick={toggleDrawer} className="hover:text-blue-700 py-2 px-4">
        {isOpen ? ' ' : <ArrowCircleLeftIcon />}
      </button>
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300"
          ref={drawerRef}
        >
          <div className="p-4 flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 mb-4 py-2">
             Admin Navigation
          </h2>

            <button onClick={closeDrawer} className="text-gray-500">
              X
            </button>
          </div>
          <div className="p-4">
            {/* Replace anchor tags with Link components */}
            <ul>
              <li>
                <Link className="text-blue-700 hover:underline" 
                href={
                    isSuperAdmin ?
                    `/dashboard/superadmin/${userData._id}`
                    :
                    `/dashboard/paidadmin/${userData._id}`}
                    >
                  Dashboard
                </Link>
              </li>

             {isSuperAdmin ? <li>
                <Link className="text-blue-700 hover:underline" href="/dashboard/superadmin/createquiz">
                  Create Quiz
                </Link>
              </li>
              :
              <li>
                <Link className="text-blue-700 hover:underline" href="/dashboard/paidadmin/addtesters">
                  Add Subjects
                </Link> 
              </li>
              }
            {isSuperAdmin ?
              <li>
                <Link className="text-blue-700 hover:underline" href="/dashboard/superadmin/settings">
                 Profile Settings
                </Link>
              </li>
              :
              <li>
                <Link className="text-blue-700 hover:underline" href="/dashboard/paidadmin/settings">
                 Profile Settings
                </Link>
              </li>
             }
             {
             isSuperAdmin &&
             <li>
             <Link className="text-blue-700 hover:underline" href="/dashboard/superadmin/product">
               Products
             </Link>
           </li>
             }
             {
             isSuperAdmin &&
             <li>
             <Link className="text-blue-700 hover:underline" href="/dashboard/superadmin/quizzes">
               All Quizzes
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

/*
 <div className="relative">
      <button onClick={toggleDrawer} className="hover:text-blue-700  py-2 px-4 ">
        {isOpen ? ' ' :<ArrowCircleLeftIcon/>}
      </button>
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300"
          ref={drawerRef}
        >
          <div className="p-4 flex justify-between">
            <h2>Drawer</h2>
            <button onClick={closeDrawer} className="text-gray-500">
              X
            </button>
          </div>
          <div className="p-4">
            <p>This is the drawer content.</p>
          </div>
        </div>
      )}
    </div>
*/