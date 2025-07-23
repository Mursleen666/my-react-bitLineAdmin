import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminPortal from './pages/AdminPortal';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import CustomerUser from './pages/CustomerUser';
import NavbarMobile from './components/navbarMobile';
import Adminusers from './pages/Adminusers';
import Approval from './pages/Approval';
import ApprovalTypes from './pages/ApprovalTypes';
import FrozenTransactions from './pages/FrozenTransactions';
import Partner from './pages/Partner';
import PartnerUser from './pages/PartnerUser';
import VenueGroups from './pages/VenueGroups';
import VenueGroupsApplication from './pages/VenueGroupsApplication';
import VenueGroupsUsers from './pages/VenueGroupsUsers';
import Venues from './pages/Venues';
import VenuesUser from './pages/VenuesUser';
import Reports from './pages/Reports';

const App = () => {
  const [token, setToken] = useState("")

 useEffect(() => {
    const savedToken = localStorage.getItem('token');
    setToken(savedToken || '');
  }, []);

  return (
    <div className='bg-white h-[600px]'>
      {token === "" ? <AdminPortal setToken={setToken} />
        :
        <>
         
          <NavBar token={token} setToken={setToken}/>
          <NavbarMobile/>

          <div className='flex w-full'>
            <SideMenu/>
            <div className='w-full px-5 lg:w-[80%]  mt-5 text-gray-600 text-base'>
              <Routes>
                <Route path="/" element={<CustomerUser/>} />
                <Route path="/adminUsers" element={<Adminusers />} />
                <Route path="/approvals" element={<Approval />} />
                <Route path="/approvalTypes" element={<ApprovalTypes />} />
                <Route path="/customerUser" element={<CustomerUser />} />
                <Route path="/frozenTransactions" element={<FrozenTransactions />} />
                <Route path="/partners" element={<Partner />} />
                <Route path="/partnerUsers" element={<PartnerUser />} />
                <Route path="/reports" element={<Reports/>} />
                <Route path="/venueGroups" element={<VenueGroups />} />
                <Route path="/venueGroupsApplications" element={<VenueGroupsApplication />} />
                <Route path="/venueGroupUser" element={<VenueGroupsUsers />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/venueUsers" element={<VenuesUser />} />
              </Routes>
            </div>
          </div>
        </>

      }

    </div>
  )
}

export default App
