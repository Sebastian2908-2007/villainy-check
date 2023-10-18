'use client'
import React from 'react';

const ErrorModal = ({ error, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
        error ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

      <div className="modal-container bg-[#999595] w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Add your modal content here */}
        <div className="modal-content py-4 text-left px-6">
          <div className="modal-header">
            <h3 className="text-2xl bg-[#849b9f] font-semibold p-2 text-center text-[#fde1e2]">Error</h3>
          
          </div>
          <div className="modal-body mt-4">
            <p className="text-[#fde1e2] text-center">{error}</p>
          </div>
          <div className="flex flex-row justify-center modal-footer mt-4">
            <button
              className="bg-[#849b9f] text-white hover:bg-red-600 py-2 px-4 rounded-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
