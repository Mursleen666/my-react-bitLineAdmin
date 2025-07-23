import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from "../assets/myLogo.svg";
import { NavLink } from 'react-router-dom';

const LoginSignUpNavbar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50 bg-white border-b h-[50px] lg:h-[55px]">
      <div className="px-[10px] lg:px-[38px] py-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="w-24 lg:w-28" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpNavbar;
