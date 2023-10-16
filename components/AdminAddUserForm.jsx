'use client'
import { useState,useEffect } from 'react';
import Cookies from "js-cookie";
import decode from "jwt-decode";
import { useStoreContext } from '@/utils/GlobalState';



  


export default function AddUserForm() {
  const [state, dispatch] = useStoreContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Clear the success message after 2 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);
console.log(state.admin);
  const handleSubmit = async (e) => {
    let decodedData;
    e.preventDefault();
    const userCookie = Cookies.get('userinfocookie');
    console.log(userCookie);
    if(userCookie){
        decodedData = decode(userCookie);
    }
    const userId = decodedData._id;
    const formData = {
      email,
      password,
      firstName,
      lastName,
      userId,
      assignedQuiz:state.admin.productType.quiz,
      adminEmail: state.admin.email
    };

    try {
      const response = await fetch('/api/Dashboard/paidadmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('User created and updated successfully');
        setSuccessMessage('User created and updated successfully');
        // Clear the form inputs
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
      } else {
        // Handle failure, e.g., show an error message
        console.error('User creation and update failed');
      }
    } catch (error) {
      console.error('Error creating and updating user:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold">Subject Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>{successMessage}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

