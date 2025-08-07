import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import { motion } from 'framer-motion';





function LogIn() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const checkRef = useRef(null)
    

    //
      const submition = (e) =>{
          e.preventDefault()

          const rememberME = checkRef.current.checked


          const logInData = {email,password,rememberME}
          console.log(logInData)

          // clear inputs
          emailRef.current.value = ''
          passRef.current.value = ''
          checkRef.current.checked ? checkRef.current.checked = false : checkRef.current.checked = false

      }






  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4' >
      <div className='p-8 bg-white text-stone-900 rounded-2xl space-y-6 w-[450px]'>
        {/* top */}
        <div className='text-center flex flex-col gap-3'>
            <h2 className='text-lg font-bold'>Sign in to your account</h2>
            <Link to="/register" className='text-blue-600 decoration-blue-600 hover:underline font-semibold text-sm '>Or create a new account</Link>
        </div>


        {/* google && faceBook */}
        <div className='space-y-3'> 
            <motion.div whileHover={{scale:1.04, boxShadow:"0 0 8px #80808051"}} transition={{ type: "spring", stiffness: 500,  }}
                  className='flex cursor-pointer justify-center items-center gap-2 border border-gray-300 p-[10px] rounded-lg text-stone-700 font-semibold'> <FcGoogle className='text-[20px]'/> Continue with Google</motion.div>
            
            <motion.div  whileHover={{scale:1.04, boxShadow:"0 0 8px #80808051"}} transition={{ type: "spring", stiffness: 500,  }}
                  className='flex cursor-pointer justify-center items-center gap-2 border border-gray-300 p-[10px] rounded-lg text-stone-700 font-semibold'> <FaFacebookF className='text-blue-600 text-[20px]'/> Continue with Facebook</motion.div>
        </div>


        {/* line */}
        <div className='flex items-center justify-center gap-4 text-gray-100'>
          <hr className='border-[1px]  w-full'/>
          <p className='text-gray-400'>OR</p>
          <hr className='border-[1px]  w-full'/>
        </div>


        {/* form */}
        <form onSubmit={(e) => submition(e)} className='space-y-4'>
            {/* inputs */}
            <div className='space-y-3'>

              <div className='flex items-center gap-4 border px-3 rounded-lg'> 
                  <FaEnvelope className='text-xl text-gray-400'/>

                  <input ref={emailRef} type="email" onChange={(e) => setEmail(e.target.value)} required 
                        placeholder='Email adress' className='placeholder:text-sm outline-none p-2 text-stone-900 w-full'/>
              </div>

              <div className='flex items-center gap-4 border px-3 rounded-lg'>
                  <RiLockPasswordFill className='text-xl text-gray-400'/>

                  <input ref={passRef} type="password" onChange={(e) => setPassword(e.target.value)} required 
                        placeholder='password' minLength={6} className='placeholder:text-sm outline-none p-2 text-stone-900 w-full'/>
              </div>

            </div>

            {/* Remember me && Forgot password? */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 text-sm text-gray-800'>
                    <input type="checkbox" ref={checkRef} className='w-4' id='checkBox' />
                    <label htmlFor="checkBox">Remember me</label>
                </div>
                
                <p className='text-sm text-blue-600 hover:underline cursor-pointer'>Forgot password?</p>
            </div>

            <button type='submit' className='flex items-center bg-gradient-to-r from-blue-600 to-blue-500 w-full p-[10px] justify-center 
                  font-semibold rounded-xl text-white gap-2 hover:from-blue-700 hover:to-blue-600'>Sign In <FaArrowRight className='translate-y-[2.3px]'/>
            </button>
        </form>

      </div>
    </div>
  )
}

export default LogIn