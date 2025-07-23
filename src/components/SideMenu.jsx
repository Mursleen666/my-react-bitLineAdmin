import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className="hidden lg:block w-[18%] h-[552px] overflow-y-auto bg-[#F5F5F5] ">
      <div className='flex flex-col font-[600]  pt-6  text-[15px]'>

        <p className=" items-center text-[13px] font-normal text-gray-400  bg-[#F5F5F5] pl-8 py-3">HOME</p>
        <NavLink className="items-center   bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/">
          <p>Customer Users</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/frozenTransactions">
          <p>Frozen Transactions</p>
        </NavLink>
        <hr className="ml-6 mt-5 mb-6 w-44 border-t-1 border-gray-300" />
        <p className=" items-center text-[13px] font-normal text-gray-400  bg-[#F5F5F5] pl-8 py-3">GENERAL</p>
        <NavLink className="items-center  bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/adminUsers">
          <p>Admin Users</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/reports">
          <p>Reports</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/partners">
          <p>Partners</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/partnerUsers">
          <p>Partner Users</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/venueGroups">
          <p>Venue Groups</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/venueGroupUser">
          <p>Venue Group Users</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/venueGroupsApplications">
          <p>Venue Group <br /> Applications</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/approvalTypes">
          <p>Approval Types</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/approvals">
          <p>Approvals</p>
        </NavLink>
        <hr className="ml-6 mt-5 mb-6 w-44 border-t-1 border-gray-300" />
        <p className=" items-center text-[13px] font-normal text-gray-400  bg-[#F5F5F5] pl-8 py-3">VENUE</p>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/venues">
          <p>Venues</p>
        </NavLink>
        <NavLink className="items-center bg-[#F5F5F5]  hover:bg-blue-100 pl-8 py-3" to="/venueUsers">
          <p>Venue Users</p>
        </NavLink>
        <hr className="ml-6 mt-5 w-44 border-t-1 border-gray-300" />

      </div>
    </div>
  )
}

export default SideMenu
