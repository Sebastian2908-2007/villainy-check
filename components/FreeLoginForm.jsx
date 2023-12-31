'use client'
// Login.js
import { useState } from 'react';
import decode from 'jwt-decode';
//import { useRouter } from 'next/navigation';

export default function FreeLoginForm({ closeModal,success,setUserData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErr,setFormErr] = useState(null);
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
      setUserData(userData);
      closeModal(); // Close the modal after login
      success(true);
     
    } else {
      // Handle login failure, e.g., show an error message.
      console.error('Login failed');
      setFormErr('login failed check credentials');
      setTimeout(() => {setFormErr(null);},3000);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4 mt-4">
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
          className="
          border
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
          Sign In
        </button>
        {formErr &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2">{formErr}</div>
          }
      </div>
    </form>
  );
}

