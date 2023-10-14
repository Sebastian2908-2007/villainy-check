'use client'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import decode from 'jwt-decode';
import clientDatabase from '@/utils/dexieDb';
import { useLiveQuery } from "dexie-react-hooks";


export default function Signup() {
  let productArr;
  const [product, setProduct] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();
   productArr = useLiveQuery(() => clientDatabase.product.toArray(),[]);
  useEffect(() => {
   
    setProduct(productArr);
  },[productArr]);
 
  const handlePaidSignup = async (e) => {
    e.preventDefault();
    console.log(product[0]._id);
    // You can make a POST request here to your signup endpoint with all the form fields.
    // Use the fetch API or a library like axios.

    // Example with fetch:
    const response = await fetch('/api/Users/signup/paidadmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName, productType: product[0]._id }),
    });

    if (response.ok) {
      // Signup successful, you can redirect the user to a dashboard or home page.
      // Replace '/dashboard' with your desired route.
      //window.location.href = '/dashboard';
      const data = await response.json();
     
     const token = data.value;
     
    
      

try {
  // Decode the token
  const paidData = decode(token);
  if(paidData.isPaid) {
  router.push(`/dashboard/paidadmin/${paidData._id}`);
  }

  // `decoded` will contain the token's payload, which typically includes user information.

} catch (error) {
  console.error('Error decoding JWT:', error.message);
}

    } else {
      // Handle signup failure, e.g., show an error message.
      console.error('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlePaidSignup}>
        <h2 className="text-2xl mb-4 font-semibold">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
