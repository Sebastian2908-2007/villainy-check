'use client'

import { useState } from 'react';

export default function UpdateUserDetails({ userId }) {
  const [formData, setFormData] = useState({
    phone: '',
    industryType: '',
    usage: '',
    organizationName: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      phone: formData.phone,
      industryType: formData.industryType,
      usage: formData.usage,
      organizationName: formData.organizationName,
    };

    try {
      const response = await fetch('/api/Users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, updatedData }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          phone: '',
          industryType: '',
          usage: '',
          organizationName: '',
        });
      } else {
        console.error('User details update failed');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div>
      <form className="bg-[#999595] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-[#fde1e2] mb-4 font-semibold">Update User Details</h2>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="phone"
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="industryType">
            Industry Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="industryType"
            type="text"
            placeholder="Industry Type"
            value={formData.industryType}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="usage">
            Usage
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="usage"
            type="text"
            placeholder="Usage"
            value={formData.usage}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="organizationName">
            Organization Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="organizationName"
            type="text"
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleInputChange}
          />
        </div>

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
            Update
          </button>
        </div>
      </form>

      {isSuccess && (
        <div className="bg-[#fde1e2] border-l-4 border-green-700 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Success!</p>
          <p>Your user details have been updated.</p>
        </div>
      )}
    </div>
  );
}



