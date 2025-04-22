import { CalendarIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import React from 'react'

const Login:React.FC = () => {
  return (
    <section className='flex w-full' style={{height: "calc(100vh - 64px)"}}>
      <div className='w-full flex flex-col justify-center'>
        <div className='px-40 flex flex-col gap-10'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <CalendarIcon className='w-10 h-10'/>

                <div className='flex flex-col items-center gap-2'>
                    <span className='text-3xl font-semibold'>Welcome back</span>
                    <span className='text-slate-500'>Sign in to your account to continue</span>

                </div>
            </div>

            <form className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-sm font-medium'>Email Address</label>
                    <div className='flex relative'>
                        <input type="email" name="email" id="email" placeholder='your@email.com' className='w-full border border-slate-300 rounded-md px-10 py-2' required/>
                        <EnvelopeIcon className='w-5 h-5 absolute text-slate-500 top-3 left-3 pointer-events-none'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password" className='text-sm font-medium'>Password</label>
                    <div className='flex relative'>
                        <input type="password" name="password" id="password" placeholder='•••••••••••' className='w-full border border-slate-300 rounded-md px-10 py-2' required/>
                        <LockClosedIcon className='w-5 h-5 absolute text-slate-500 top-3 left-3 pointer-events-none'/>
                    </div>

                    <div className='flex justify-end pt-1'>
                     <Link to='/forgot-password' className='text-sm text-blue-500 hover:underline'>Forgot password?</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <button type='submit' className='bg-blue-500 h-fit py-2 text-white rounded-md font-medium hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>Sign In</button>
                    
                    <div className='flex text-sm gap-1 justify-center'>
                        <span>Don't have an account?</span>
                        <Link to='/register' className='text-blue-500 font-medium hover:underline'>Sign up</Link>
                    </div>
                </div>

            </form>

        </div>
      </div>
      
      <div className='w-full h-full relative'>
        <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-full object-cover'/>

        <div className='w-full h-full bg-blue-600 opacity-95 flex flex-col justify-center items-center px-10 text-white absolute top-0 z-20 gap-5'>
            <span className='text-4xl font-bold'>Discover and Join Amazing Events Around You</span>
            <span className='text-xl text-slate-200'>Joinly helps you find and create events that match your interests. Connect with others and make lasting memories.</span>
        </div>

      </div>
    </section>
  )
}

export default Login
