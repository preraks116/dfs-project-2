// components/CategoryActionsEbookDropdown.tsx
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface CategoryActionsEbookDropdownProps {
  ebookID: string;
  onAddCase: () => void;
  onDeleteEbook: () => void;
}

const CategoryActionsEbookDropdown: React.FC<CategoryActionsEbookDropdownProps> = ({ onAddCase, onDeleteEbook, ebookID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const handleDeleteEbook = async () => {
    // const res = await fetch(`http://127.0.0.1:8090/api/collections/categories/records/${categoryID}`), {
    //   method: 'POST',

    // }
    const res = await fetch(`http://127.0.0.1:8090/api/collections/ebooks/records/${ebookID}`, {
      method: 'DELETE',
    })
    // router.reload();

    // reroute to home page
    router.push('/');
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} style={{ zIndex: 1 }}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center px-2 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-200 transition ease-in-out duration-150"
          onClick={toggleDropdown}
        >
          <AiOutlineEllipsis className="text-lg" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{ zIndex: 2 }} // Increase the z-index value
        >
          <div className="py-1" role="none">
            <button
              onClick={() => {
                onAddCase();
                closeDropdown();
              }}
              className="block px-4 py-2 w-full text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Add Case Study
            </button>
            <button
              onClick={() => {
                handleDeleteEbook();
                closeDropdown();
              }}
              className="block px-4 py-2 w-full text-sm leading-5 text-red-600 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700"
              role="menuitem"
            >
              Delete Ebook
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryActionsEbookDropdown;
