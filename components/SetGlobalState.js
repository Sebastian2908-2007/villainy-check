'use client'
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import decode from "jwt-decode";
export default function SetGlobalState() {
    const [userData, setUserData] = useState(null);
    const userCookie = Cookies.get('userinfocookie');

    /*const userData = (userData) => {
        setData(userData);
       };*/

       useEffect(() => {
    if (userCookie) {
      const decodedData = decode(userCookie);
        console.log(decodedData);
        setUserData(decodedData);
    }
  },[]);

   
  
    useEffect(() => {
       
      // Define the API endpoint URL with the user ID as a parameter
      
  if(userData) {
    console.log(userData, 'In global comp');
    const apiUrl = `/api/Dashboard/paidadmin/get/${userData._id}`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data.user); // Assuming the response has a 'user' property
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }}, [userData]); // Fetch data when the component mounts and when userId changes
    return (<></>);
};