'use client';
import { useState,useEffect, useRef  } from 'react';
import Link from 'next/link';
import ListIcon from '@mui/icons-material/List';
/**import for conditional stuff conditional*/
import { decode } from 'jsonwebtoken';
import Cookies from 'js-cookie';
const Dropdown = () => {
  const userCookie = Cookies.get('userinfocookie');
  console.log(userCookie);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

    // Close the dropdown when a link is clicked
    const closeDropdown = () => {
        setIsOpen(false);
      };
    

    // Close the dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div className='p-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-[#fde1e2] hover:underline"
        >
          <ListIcon sx={{fontSize:'2em'}}/>
        </button>
      </div>

      {isOpen && (
        <div className="z-40 origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-[#999595] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
         {!userCookie  &&
         <>
         <Link 
            href="/login" 
            className="block px-4 py-2 text-[.8em] text-[#fde1e2] hover:bg-gray-100" 
            role="menuitem" 
            onClick={closeDropdown}
            >
              login
            </Link>
          <Link 
            href="/signup" 
            className="block px-4 py-2 text-[.8em] text-[#fde1e2] hover:bg-gray-100" 
            role="menuitem" 
            onClick={closeDropdown}
            >
              free signup
            </Link>
            </>
            }
            <Link 
            href="/products" 
            className="block px-4 py-2 text-[.8em] text-[#fde1e2] hover:bg-gray-100" 
            role="menuitem" 
            onClick={closeDropdown}
            >
              Products
            </Link>
            <Link 
            href="/quiz/public/quizzes" 
            className="block px-4 py-2 text-[.8em] text-[#fde1e2] hover:bg-gray-100" 
            role="menuitem" 
            onClick={closeDropdown}
            >
              Quizzes
            </Link>
            <Link 
            href="/about" className="block px-4 py-2 text-[.8em] 
            text-[#fde1e2] 
            hover:bg-gray-100" 
            role="menuitem" 
            onClick={closeDropdown}
            >
              About
            </Link>
            <a
             className="block 
             block px-4 py-2 text-[.8em] 
             text-[#fde1e2] 
             hover:bg-gray-100
             " 
             target="_blank"
              href="https://advocate-for-rights-and-knowledge-of-americans-arka.ghost.io">
                Blog
              </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;