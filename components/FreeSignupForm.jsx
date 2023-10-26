'use client'
// Signup.js
import { useState } from 'react';
import decode from 'jwt-decode';
//import { useRouter } from 'next/navigation';

export default function FreeSignupForm({ closeModal,success,setUserData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [formErr,setFormErr] = useState(null);
  //const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    // You can make a POST request here to your signup endpoint with all the form fields.
    // Use the fetch API or a library like axios.

    // Example with fetch:
    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });

    if (response.ok) {
      // Signup successful, you can redirect the user to a dashboard or home page.
      // Replace '/dashboard' with your desired route.
      const data = await response.json();
      const token = data.value;
      //router.push('/dashboard/free');
      
      try {
        // Decode the token
        const userData = decode(token);
        setUserData(userData);
        // `userData` will contain the token's payload, which typically includes user information.

      } catch (error) {
        console.error('Error decoding JWT:', error.message);
      }
      closeModal(); // Close the modal after signup
      success(true);
    } else {
      // Handle signup failure, e.g., show an error message.
      console.error('Signup failed');
      setFormErr('something went wrong');
      setTimeout(() => {setFormErr(null);},3000);
    }

   
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="mb-4 mt-2">
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
          className="
          bg-[#849b9f] 
          border-[#fde1e2]
          hover:bg-[#fde1e2] 
          hover:text-[#999595]
          hover:border-[#999595]
          text-white 
          font-bold 
          py-2 
          px-4 
          rounded 
          focus:outline-none 
          focus:shadow-outline
          mb-2
          "
          type="submit"
        >
          Sign Up
        </button>
        {formErr &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2">{formErr}</div>
          }
      </div>
    </form>
  );
}