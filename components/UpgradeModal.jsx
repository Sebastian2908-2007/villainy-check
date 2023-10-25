
import Link from "next/link";

const UpgradeModal = ({ isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    //onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 overflow-y-auto flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div
        className="bg-white rounded-lg p-4 mx-4 md:mx-0 max-w-md w-full text-center shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <h2 className="text-xl font-bold mb-4">Upgrade Required</h2>
        <p className="text-gray-700 mb-6">
          You have taken all of your free quizzes. Please upgrade to take more quizzes and quiz others.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-white bg-[#8B0000] hover:bg-red-600 rounded-full focus:outline-none"
          >
            Close
          </button>
          <button
            onClick={closeModal}
            className="
            px-4 
            py-2 
            bg-[#849b9f] 
            text-[#fde1e2] 
            hover:bg-[#999595] 
            rounded-full 
            focus:outline-none
            "
          >
            <Link href='/products'>
            Upgrade
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
