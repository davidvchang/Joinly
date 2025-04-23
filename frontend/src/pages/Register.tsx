import React from 'react'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Inputs from '../components/Inputs'

const Register:React.FC = () => {
  return (
    <section className='flex w-full' style={{height: "calc(100vh - 64px)"}}>
      <div className='w-full flex flex-col justify-center'>
        <div className='px-40 flex flex-col gap-10'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <CalendarIcon className='w-10 h-10'/>

                <div className='flex flex-col items-center gap-2'>
                    <span className='text-3xl font-semibold'>Create an account</span>
                    <span className='text-slate-500'>Join to Joinly and create amazing events</span>

                </div>
            </div>

            <form className='flex flex-col gap-5'>
                <div className='flex gap-2'>
                    <Inputs text_label='Name' htmlFor_label='name' input_type='text' icon={<UserIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your name'/>
                    <Inputs text_label='Last Name' htmlFor_label='last_name' input_type='text' icon={<UserIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your last name'/>
                </div>

                <Inputs text_label='Email Address' htmlFor_label='email' input_type='email' icon={<EnvelopeIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='your@email.com'/>
                <Inputs text_label='Password' htmlFor_label='password' input_type='password' icon={<LockClosedIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='•••••••••••'/>
                <Inputs text_label='Confirm Password' htmlFor_label='confirm_password' input_type='password' icon={<LockClosedIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='•••••••••••'/>

                <div className='flex flex-col gap-2'>
                    <button type='submit' className='bg-blue-500 h-fit py-2 text-white rounded-md font-medium hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>Sign In</button>
                    
                    <div className='flex text-sm gap-1 justify-center'>
                        <span>Already have an account?</span>
                        <Link to='/login' className='text-blue-500 font-medium hover:underline'>Sign in</Link>
                    </div>
                </div>

            </form>

        </div>
      </div>
      
      <div className='w-full h-full relative'>
        <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVnaXN0ZXJ8ZW58MHx8MHx8fDA%3D" alt="Image background" className='w-full h-full object-cover'/>

        <div className='w-full h-full bg-purple-600 opacity-95 flex flex-col justify-center items-center px-10 text-white absolute top-0 z-20 gap-5'>
            <span className='text-4xl font-bold'>Create Events That Bring People Together</span>
            <span className='text-xl text-slate-200'>Design and host events that people will remember. Connect with attendees and build your network.</span>
        </div>

      </div>
    </section>
  )
}

export default Register
