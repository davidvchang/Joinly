import React from 'react'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

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
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-sm font-medium'>Name</label>
                        <div className='flex relative'>
                            <input type="text" name="name" id="name" placeholder='Mike' className='w-full border border-slate-300 rounded-md px-10 py-2' required/>
                            <UserIcon className='w-5 h-5 absolute text-slate-500 top-3 left-3 pointer-events-none'/>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="last_name" className='text-sm font-medium'>Last Name</label>
                        <div className='flex relative'>
                            <input type="text" name="last_name" id="last_name" placeholder='Jackson' className='w-full border border-slate-300 rounded-md px-10 py-2' required/>
                            <UserIcon className='w-5 h-5 absolute text-slate-500 top-3 left-3 pointer-events-none'/>
                        </div>
                    </div>

                </div>

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
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="confirm_password" className='text-sm font-medium'>Confirm Password</label>
                    <div className='flex relative'>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder='•••••••••••' className='w-full border border-slate-300 rounded-md px-10 py-2' required/>
                        <LockClosedIcon className='w-5 h-5 absolute text-slate-500 top-3 left-3'/>
                    </div>
                </div>

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
