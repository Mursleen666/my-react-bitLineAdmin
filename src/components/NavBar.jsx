import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from "../assets/myLogo.svg";
import { NavLink } from 'react-router-dom';

const NavBar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="hidden lg:block sticky top-0 z-50 bg-white border-b h-[50px] lg:h-[55px]">
      <div className="px-[10px] lg:px-[38px] py-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="w-24 lg:w-28" src={logo} alt="Logo" />
        </div>

        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 text-blue-900 font-medium text-[13px] hover:text-blue-800"
          >
            Ghana Test
            <ChevronDown className="w-4 h-4" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 sm:w-56 rounded-[3px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-2">
                <NavLink className="block px-4 py-3 text-sm" to="/profile">
                  Account
                </NavLink>
                <hr className="my-1" />
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setToken("");
                  }}
                  className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
