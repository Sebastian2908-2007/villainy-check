import React from 'react';

const UserDetails = ({ userData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h1 className="text-2xl bg-[#849b9f] p-2 text-white font-bold mb-4">User Details</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow">
          <p>
            <strong>Name:</strong> {userData.firstName} {userData.lastName}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${userData.email}`} className="text-blue-500">
              {userData.email}
            </a>
          </p>
          <p>
            <strong>Is Paid:</strong> {userData.isPaid ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Quiz Complete:</strong> {userData.quizComplete ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Is Subject:</strong> {userData.isSubject ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
