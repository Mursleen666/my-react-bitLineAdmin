import React from 'react'
import { useState } from 'react';
import axios from "axios"
import LoginSignUpNavbar from '../components/loginSignUpNavbar';

const AdminPortal = ({ setToken }) => {
   const backEndUrl = "https://my-backend-bitline-production.up.railway.app";
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(`${backEndUrl}/api/user/admin`, { email, password })
            if (response.data.success) {
                const token = response.data.token
                setToken(token)
                localStorage.setItem("token", token);
            }
            else {
                console.log("Invalid")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=''>
          <LoginSignUpNavbar/>

            <div id='splash' className="">
                 
                    <div className=' lg:mt-0 bg-white rounded-[3px] py-8 px-4 lg:py-[40px] lg:px-[30px] mx-auto w-full max-w-xl' id='splashRight'>
                        <form className='flex flex-col' onSubmit={onSubmitHandler} action="">
                            <h1 className='font-semibold mb-5 text-3xl lg:text-[40px]'>Sign In</h1>
                            <p className='text-[#505050] leading-10 text-[16px]'>Enter your details below</p>

                            <div id='fieldContainer' className='mt-4 space-y-6'>
                                {/* Email Field */}
                                <div className='text-black'>
                                    <label htmlFor="email" className='block mb-2 font-semibold'>Email Address</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        id="email"
                                        className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1em] h-12 lg:h-[48px] py-2 px-4 w-full'
                                        type="email"
                                        maxLength={200}
                                    />
                                </div>

                                {/* Password Field */}
                                <div className='text-black'>
                                    <label htmlFor="password" className='block mb-2 font-semibold'>Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        id="password"
                                        className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1em] h-12 lg:h-[48px] py-2 px-4 w-full'
                                        type="password"
                                        maxLength={200}
                                    />
                                </div>

                                {/* Remember + Forgot */}
                                <div className='flex flex-row items-start sm:items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input className='scale-[1.2]' id='remember' type="checkbox" />
                                        <label htmlFor="remember" className='ml-2 text-[1em]'>Remember me</label>
                                    </div>
                                </div>

                                {/* Sign In Button */}
                                  <div className='flex gap-1 justify-center mt-8 text-[1em]'>
                                <button
                                    type="submit"
                                    className='w-auto h-[50px] text-white font-semibold bg-[#283382] hover:bg-blue-800 rounded-full px-[48px] '>
                                    Sign in
                                </button>
                                    </div>
                              
                            </div>
                        </form>
                    </div>

            </div>
          
        </div>
    )
}

export default AdminPortal
