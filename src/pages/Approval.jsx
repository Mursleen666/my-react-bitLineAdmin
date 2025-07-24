import React, { useState } from 'react';

const dummyUsers = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  code: `CSU13${i + 1}`,
  firstName: `Muhammad`,
  lastName: `Tayyab ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
  dob: '07/21/2025',
  documentVerified: i % 2 === 0 ? 'Yes' : 'No',
  requiresAssistance: 'No',
  manualVerification: i % 3 === 0 ? 'Yes' : 'No',
  verificationDate: '07/23/2025',
  verificationStatus: i % 2 === 0 ? 'Accepted' : 'Pending',
  suppressed: 'No',
  addDate: '07/21/2025',
  faceMatch: Math.floor(Math.random() * 100),
  taxId: i % 2 === 0 ? '234363' : '-'
}));

const Approval = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [detailer, setDetailer] = useState(false);
  const [verify, setVerify] = useState(false);

  const filteredUsers = dummyUsers.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleCheckboxClick = (user) => {
    setSelectedCheckbox(user.id);
    setSelectedUser(user);
    setDetailer(false);
    setVerify(false);
  };

  const showDetailer = () => {
    if (selectedUser) {
      setDetailer(true);
      setVerify(false);
    }
  };

  const showVerify = () => {
    if (selectedUser) {
      setVerify(true);
      setDetailer(false);
    }
  };

  const closeAll = () => {
    setSelectedUser(null);
    setDetailer(false);
    setVerify(false);
    setSelectedCheckbox(null);
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="relative px-5 pt-3  lg:px-7">
      {/* Search input */}
      <div className="flex justify-between items-center mb-8 mt-6">
        <h1 className='font-semibold text-lg lg:text-[30px]'>Approval</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="px-3 py-2 border border-gray-300 rounded-md w-40  lg:w-[300px]"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto h-[380px]  lg:h-[250px]  bg-white">
        <table className="min-w-full text-sm ">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2  text-left">Select</th>
              {[
                'Code', 
                'Type', 'Approval Received', 
                 'Approval Description'
              ].map((col) => (
                <th key={col} className="px-3 py-2  text-left font-[500]">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className={`hover:bg-blue-100 ${selectedCheckbox === user.id ? 'bg-blue-50' : 'odd:bg-white even:bg-gray-100'}`}
              >
                <td className="px-3 py-2 ">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === user.id}
                    onChange={() => handleCheckboxClick(user)}
                  />
                </td>
                <td className="px-3 py-3 ">{user.code}</td>
              
                <td className="px-3 py-3 ">{user.documentVerified}</td>
               
             
                <td className="px-3 py-3 ">{user.verificationStatus}</td>
                <td className="px-3 py-3 ">{user.suppressed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm">Items per page:</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className=" px-2 py-1 rounded"
          >
            {[10, 25, 50].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={handleFirstPage} disabled={currentPage === 1} className="px-2 py-1  rounded disabled:opacity-50">⏮️</button>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-2 py-1  rounded disabled:opacity-50">◀️</button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-2 py-1  rounded disabled:opacity-50">▶️</button>
          <button onClick={handleLastPage} disabled={currentPage === totalPages} className="px-2 py-1  rounded disabled:opacity-50">⏭️</button>
        </div>
      </div>

      {/* Action Sidebar */}
      {selectedUser && !detailer && !verify && (
        <div className="fixed top-0 right-0 w-[100%] lg:w-[20%] h-full bg-white shadow-lg z-50 overflow-y-auto transition-all duration-300">
          <div className="flex justify-end items-center py-2 px-4 ">
            <button onClick={closeAll} className="text-red-500 text-xl font-bold">×</button>
          </div>
          <div className='px-4 py-8'>
            <h2 onClick={showDetailer} className="text-[13px] pt-3 pb-6 font-[700] cursor-pointer">VIEW CUSTOMER DETAILS</h2>
            <h2 onClick={showVerify} className="text-[13px] font-bold cursor-pointer">VERIFY CUSTOMER</h2>
          </div>
        </div>
      )}

      {/* Details Sidebar */}
      {detailer && selectedUser && (
        <div className="fixed top-0 right-0 w-[90%] lg:w-[20%] h-full bg-white shadow-lg z-50 overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center p-4 ">
            <h2 className="text-lg font-semibold">Customer Details</h2>
            <button onClick={closeAll} className="text-red-500 text-xl font-bold">×</button>
          </div>

          <div className="p-4  space-y-2">
            <p><strong>Status:</strong> <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">{selectedUser.verificationStatus}</span></p>
            <p><strong>Verification Date:</strong> {selectedUser.verificationDate}</p>
            <p><strong>Face Match:</strong> {selectedUser.faceMatch}%</p>
          </div>

          <div className="p-4 ">
            <h3 className="font-medium mb-2">Profile</h3>
            <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>DOB:</strong> {selectedUser.dob}</p>
          </div>

          <div className="p-4">
            <h3 className="font-medium mb-2">ID Document</h3>
            <p><strong>Tax ID:</strong> {selectedUser.taxId}</p>
            <p><strong>Document Type:</strong> -</p>
            <p><strong>Issuing Country:</strong> -</p>
            <p><strong>Document Number:</strong> -</p>
          </div>
        </div>
      )}

      {/* Verify Sidebar */}
      {verify && selectedUser && (
        <div className="fixed top-0 right-0 w-[90%] lg:w-[20%] h-full bg-white  z-50 overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center p-4 ">
            <h2 className="text-lg font-semibold">Verify Customer</h2>
            <button onClick={closeAll} className="text-red-500 text-xl font-bold">×</button>
          </div>

          {/* Summary */}
          <div className="p-4 ">
            <h3 className="text-md font-semibold mb-2">Summary</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded text-sm">Pending</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Reason:</span>
                <span className="bg-red-200 text-red-800 px-2 py-0.5 rounded text-sm">ID missing/invalid</span>
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="p-4 ">
            <h3 className="text-md font-semibold mb-2">Profile</h3>
            <p className="font-semibold">{selectedUser.firstName} {selectedUser.lastName}</p>
            <table className="w-full text-sm  mt-2">
              <thead className="bg-gray-100">
                <tr>
                  <th className=" px-2 py-1 text-left">Info type</th>
                  <th className=" px-2 py-1 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-2 py-1">Given names</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Surnames</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Age</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ID Document Section */}
          <div className="p-4">
            <h3 className="text-md font-semibold mb-2">ID Document</h3>
            <table className="w-full text-sm ">
              <thead className="bg-gray-100">
                <tr>
                  <th className=" px-2 py-1 text-left">Details</th>
                  <th className=" px-2 py-1 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-2 py-1">Tax ID</td>
                  <td className=" px-2 py-1">{selectedUser.taxId || '-'}</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Document type</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Issuing country</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Document number</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Document expiration date</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1">Date of issue</td>
                  <td className=" px-2 py-1">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-2 p-4 ">
            <button
              onClick={closeAll}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded text-sm"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
            >
              Verify
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Approval;
