import { CalendarIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import Inputs from '../components/Inputs'
import Swal from 'sweetalert2'

import {loginUser} from '../services/usersServices'

interface DataLogin {
  email: string,
  password: string
}


const Login:React.FC = () => {

  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }

  const [data, setData] = useState<DataLogin>(initialValues)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

      const res = await loginUser(data)

    if(res.status === 200) {
      Swal.fire({
        title: 'Login successful',
        text: 'The user has successfully logged in successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if(result.isConfirmed){
          window.location.href = "/";
        }
      })
    }
  }

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

            <form className='flex flex-col gap-5' onSubmit={handleLogin}>
                <Inputs text_label='Email Address' value={data.email} onchange={handleOnChange} htmlFor_label='email' input_type='email' icon={<EnvelopeIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='your@email.com'/>

                <div className='flex flex-col'>
                    <Inputs text_label='Password' value={data.password} onchange={handleOnChange} htmlFor_label='password' input_type='password' icon={<LockClosedIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='•••••••••••'/>

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
