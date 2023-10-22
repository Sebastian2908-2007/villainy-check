'use client'
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import decode from "jwt-decode";
import { useStoreContext } from '@/utils/GlobalState';
import { ADD_ADMIN_DATA } from '@/utils/actions';
export default function SetGlobalState() {
    const [state, dispatch] = useStoreContext();
    
    const [userData, setUserData] = useState(null);
   

    /*const userData = (userData) => {
        setData(userData);
       };*/

       useEffect(() => {
        setTimeout(() => {
    if (userData == undefined) {
      const userCookie = Cookies.get('userinfocookie');
      const decodedData = decode(userCookie);
        setUserData(decodedData);
    }
  },3000);
  },[]);

  
  
    useEffect(() => {
       
      // Define the API endpoint URL with the user ID as a parameter
      
  if(userData) {
    const apiUrl = `/api/Dashboard/paidadmin/get/${userData._id}`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
         // setUserData(data.user); // Assuming the response has a 'user' property
         dispatch({
            type: ADD_ADMIN_DATA,
            admin: data.user
         });
        
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }}, [userData]); // Fetch data when the component mounts and when userId changes

   
    return (<></>);
};