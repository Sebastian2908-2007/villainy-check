'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import decode from 'jwt-decode';

export default function SuperAdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [superAdminPass, setSuperAdminPass] = useState(''); // Add superAdminPass state
  const [formErr,setFormErr] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    // You can make a POST request here to your signup endpoint with all the form fields.
    // Use the fetch API or a library like axios.

    // Example with fetch:
    const response = await fetch('/api/Users/signup/superadmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        superAdminPass, // Include superAdminPass
      }),
    });

    if (response.ok) {
      // Signup successful, you can redirect the user to a dashboard or home page.
      const data = await response.json();
       const token = data.value;
       const decoded = decode(token);
      router.push(`/dashboard/superadmin/${decoded._id}`);

      try {
        // Decode the token
        // `decoded` will contain the token's payload, which typically includes user information.
      } catch (error) {
        console.error('Error decoding JWT:', error.message);
      }
    } else {
      // Handle signup failure, e.g., show an error message.
      console.error('Signup failed');
      setFormErr('something went wrong');
      setTimeout(() => {setFormErr(null);},3000);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <form className="bg-[#999595] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
        <h2 className="text-2xl mb-4 text-white font-semibold">Super Admin Sign Up</h2>
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
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="superAdminPass">
            Super Admin Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="superAdminPass"
            type="password"
            placeholder="Super Admin Password"
            value={superAdminPass}
            onChange={(e) => setSuperAdminPass(e.target.value)}
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
            Sign Up as Super Admin
          </button>
          {formErr &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2">{formErr}</div>
          }
        </div>
      </form>
    </div>
  );
}
