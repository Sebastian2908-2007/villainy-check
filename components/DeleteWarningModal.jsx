import React from 'react';

const DeleteWarningModal = ({ isOpen, setIsOpen, onDelete }) => {
    const onClose = () => {
        setIsOpen(false);
    };
  return (
    isOpen && (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="z-10 bg-[#999595] rounded-lg shadow-lg p-4 w-96">
        <h2 className="text-lg text-[#fde1e2] font-semibold mb-4">Delete Warning</h2>
        <p className="text-gray-700 bg-gray-100 p-2 mb-4 rounded">
          Before deleting this quiz, please ensure that you have checked and removed any products that contain it. Deleting a quiz without doing so could have negative consequences.
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => {onDelete();setIsOpen(false);}}
            className="px-4 py-2 bg-[#8B0000] text-white rounded mr-2"
          >
            Delete Anyway
          </button>
          <button
            onClick={onClose}
            className="
            px-4 
            py-2 
            bg-[#849b9f] 
            text-[#fde1e2] 
            rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>)
  );
};

export default DeleteWarningModal;
