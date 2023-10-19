'use client'
// Login.js
import { useState } from 'react';
//import { useRouter } from 'next/navigation';

export default function FreeLoginForm({ closeModal,success }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // You can make a POST request here to your login endpoint with email and password.
    // Use the fetch API or a library like axios.

    // Example with fetch:
    const response = await fetch('/api/Users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Login successful, you can redirect the user to a dashboard or home page.
      // Replace '/dashboard' with your desired route.
      const data = await response.json();
      const userData = decode(data.value);
      if (userData.isPaid === true) {
        //router.push(`/dashboard/paidadmin/${userData._id}`);
      } else {
       // router.push('/dashboard/free');
      }
    } else {
      // Handle login failure, e.g., show an error message.
      console.error('Login failed');
    }

    closeModal(); // Close the modal after login
    success(true);
  };

  return (
    <form onSubmit={handleLogin}>
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
      <div className="mb-6">
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
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

