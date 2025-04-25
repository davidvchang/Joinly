import React, { useEffect, useState } from 'react'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Inputs'
import Swal from 'sweetalert2'

import type {Users} from '../types/interfaces'
import {registerUser} from '../services/usersServices'

interface ExtendUsers extends Users{
  password: string,
  confirm_password: string,
}

const Register:React.FC<Users> = () => {

  const navigate = useNavigate()

  const initialValues = {
    id_user: 0,
    image_url: '', 
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    joined_time: '', 
  }

  const [usersData, setUsersData] = useState<ExtendUsers>(initialValues)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [differentPassword, setDifferentPassword] = useState<boolean>(false)
  const [messageEightCharacters, setMessageEightCharacters] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const samePassword = verifyPassword()
    const passwordCharacters = isPasswordTooShort()

    if(!samePassword){
      setDifferentPassword(true)
      setTimeout(() =>setDifferentPassword(false), 2800)
      return 
    }

    if(passwordCharacters) {
      setMessageEightCharacters(true)
      setTimeout(() =>setMessageEightCharacters(false), 2800)
      return 
    }

    try {
      const res = await registerUser(usersData)
      
      if(res.status === 201){
        Swal.fire({
          title: 'Registered User',
          text: 'The user has been successfully registered',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if(result.isConfirmed){
            navigate("/login")
          }
        })
      }
    } catch (ex: any) {
      if(ex.response.status === 409){
        setErrorMessage(ex.response.data.message)
        setError(true)
        setTimeout(() =>setError(false), 2800)
      } else {
        Swal.fire({
          title: 'Error',
          text: 'There was a problem registering the user.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsersData({ ...usersData, [e.target.name]: e.target.value })
  }

  const verifyPassword = () => {
    if(usersData.password === usersData.confirm_password){
      return true
    }
  }
  
  const isPasswordTooShort = () => {
    return usersData.password.length < 8
  }

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

            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <div className='flex gap-2'>
                    <Inputs text_label='Name' value={usersData.name} onchange={handleOnChange} htmlFor_label='name' input_type='text' icon={<UserIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your name'/>
                    <Inputs text_label='Last Name' value={usersData.last_name} onchange={handleOnChange} htmlFor_label='last_name' input_type='text' icon={<UserIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your last name'/>
                </div>

                <div className='flex flex-col'>
                  <Inputs text_label='Email Address' value={usersData.email} onchange={handleOnChange} htmlFor_label='email' input_type='email' icon={<EnvelopeIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='your@email.com'/>
                  {error  && (
                    <span className='text-red-600 text-sm font-medium px-1 pt-1'>{errorMessage}</span>
                  )}
                </div>

                <div className='flex flex-col'>
                  <Inputs text_label='Password' value={usersData.password} onchange={handleOnChange} htmlFor_label='password' input_type='password' icon={<LockClosedIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='•••••••••••'/>
                  
                  {messageEightCharacters === true && (
                    <span className='text-red-600 text-sm font-medium px-1 pt-1'>The password must be 8 characters long</span>
                  )}
                </div>
                
                <div className='flex flex-col'>
                  <Inputs text_label='Confirm Password' value={usersData.confirm_password} onchange={handleOnChange} htmlFor_label='confirm_password' input_type='password' icon={<LockClosedIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='•••••••••••'/>
                  
                  {differentPassword && (
                    <span className='text-red-600 text-sm font-medium px-1 pt-1'>Password do not match</span>
                  )}
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
