'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { decode } from 'jsonwebtoken';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [superAdminPass, setSuperAdminPass] = useState(''); // Add superAdminPass state
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
console.log(superAdminPass);
    // You can make a POST request here to your login endpoint with email, password, and superAdminPass.
    // Use the fetch API or a library like axios.

    // Example with fetch:
    const response = await fetch('/api/Users/login/superadmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, superAdminPass }), // Include superAdminPass
    });

    if (response.ok) {
      // Login successful, you can redirect the user to a dashboard or home page.
      // Replace '/dashboard' with your desired route.
      const data = await response.json();
      console.log(data);
      const userData = decode(data.value);
      console.log(userData.isSuperAdmin);
      if (userData.isSuperAdmin === true) {
        router.push(`/dashboard/superadmin/${userData._id}`);
      } else {
        router.push('/login/superadmin');
      }
    } else {
      // Handle login failure, e.g., show an error message.
      console.error('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4 font-semibold">Login</h2>
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}