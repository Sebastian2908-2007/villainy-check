'use client'
import { useState,useEffect } from 'react';
import Cookies from "js-cookie";
import decode from "jwt-decode";
import { useStoreContext } from '@/utils/GlobalState';



  


export default function AddUserForm() {
    const [quizData, setQuizData] = useState([]); // State to store quiz data
    const [state, dispatch] = useStoreContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [assignedQuiz, setAssignedQuiz] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
     // Function to fetch quiz data from the API
  const fetchQuizData = async () => {
    try {
      const response = await fetch('/api/Quiz');
      if (response.ok) {
        const data = await response.json();
        setQuizData(data.quizzes);
      } else {
        console.error('Failed to fetch quiz data');
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };
  useEffect(() => {
    fetchQuizData(); // Fetch quiz data when the component mounts
  }, []); // The empty dependency array ensures this runs once after the initial render
 
  const handleQuizSelect = (e) => {
    setAssignedQuiz(e.target.value);
  };

  useEffect(() => {
    // Clear the success message after 2 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  const handleSubmit = async (e) => {
    let decodedData;
    e.preventDefault();
    const userCookie = Cookies.get('userinfocookie');
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
      assignedQuiz,
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
    <div className="w-full max-w-md mx-auto p-6 bg-[#999595] rounded-lg shadow-md">
      <h2 className="text-2xl text-[#fde1e2]  mb-4 font-semibold">Subject Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
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
           {/* Quiz Select Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz">
          Select a Quiz:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="quiz"
          value={assignedQuiz}
          onChange={handleQuizSelect}
        >
          <option value="" disabled>
            Choose a Quiz
          </option>
          {quizData.map((quiz) => (
            <option key={quiz._id} value={quiz._id}>
              {quiz.quizTitle}
            </option>
          ))}
        </select>
      </div>

        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>{successMessage}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="
            bg-[#849b9f]
            hover:bg-[#fde1e2]
            hover:text-white
            text-[#fde1e2]
            font-bold 
            py-2 
            px-4 
            rounded 
            focus:outline-none 
            focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

