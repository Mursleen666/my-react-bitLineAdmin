import React, { useState } from 'react';
import { ChevronDown, Menu, ArrowLeft } from 'lucide-react';
import logo from "../assets/myLogo.svg";
import { NavLink } from 'react-router-dom';

const NavbarMobile = ({ token, setToken }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="block lg:hidden sticky top-0 z-50 bg-white border-b h-[50px]">
            <div className="relative px-[10px] py-2 flex justify-between items-center">

                {/* Hamburger Icon */}
                <Menu onClick={() => setVisible(true)} className="w-5 h-5 cursor-pointer sm:hidden" />

                {/* Sidebar Menu (mobile) */}
                <div className={`fixed top-0 left-0 overflow-y-auto w-[60%] bg-white shadow-md z-50 transform transition-transform duration-300 ${visible ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="block lg:hidden w-full  bg-[#F5F5F5]">
                        <div className='flex flex-col font-[500] pt-6 text-[12px]'>

                            {/* Close Button */}
                            <ArrowLeft onClick={() => setVisible(false)} className="w-5 h-5 ml-6 mb-3 cursor-pointer" />

                            <p className="text-[13px] font-normal text-gray-400 bg-[#F5F5F5] pl-8 py-3">HOME</p>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/">Customer Users</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/frozenTransactions">Frozen Transactions</NavLink>

                            <hr className="ml-6 mt-5 mb-6 w-44 border-t-1 border-gray-300" />
                            <p className="text-[13px] font-normal text-gray-400 pl-8 py-3">GENERAL</p>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/adminUsers">Admin Users</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/reports">Reports</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/partners">Partners</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/partnerUsers">Partner Users</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/venueGroups">Venue Groups</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/venueGroupUser">Venue Group Users</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/venueGroupApplications">Venue Group<br />Applications</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/approvalTypes">Approval Types</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/approvals">Approvals</NavLink>

                            <hr className="ml-6 mt-5 mb-6 w-44 border-t-1 border-gray-300" />
                            <p className="text-[13px] font-normal text-gray-400 pl-8 py-3">VENUE</p>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/venues">Venues</NavLink>
                            <NavLink onClick={() => setVisible(false)} className="hover:bg-blue-100 pl-8 py-3" to="/venueUsers">Venue Users</NavLink>

                            <hr className="ml-6 mt-5 w-44 border-t-1 border-gray-300" />
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <img className="w-24" src={logo} alt="Logo" />

                {/* Dropdown */}
                <div className="relative inline-block text-left">
                    <button
                        onClick={toggleDropdown}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        className="flex items-center gap-1 text-blue-900 font-medium text-[13px] hover:text-blue-800"
                    >
                        Ghana Test
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-[3px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-2">
                                <NavLink className="block px-4 py-3 text-sm" to="/profile">Account</NavLink>
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

export default NavbarMobile;
