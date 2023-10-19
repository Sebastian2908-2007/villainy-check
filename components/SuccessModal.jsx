'use client'
import React, { useState } from 'react';

const SuccessModal = ({ isOpen, closeModal,message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
    {isOpen  && ( <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="relative mx-auto max-w-sm">
        <div className="relative bg-white shadow-md rounded-lg text-center">
          <div className="p-4">
            <div className="text-2xl font-semibold text-green-600 mb-2">Success!</div>
            <p className="text-gray-700 mb-4">{message}</p>
            <button
              onClick={() => closeModal(false)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>)}
    </div>
  );
};

export default SuccessModal;
