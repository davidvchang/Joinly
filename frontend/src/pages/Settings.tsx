import React from 'react'
import { Link, User, Mail, Phone, Key, Trash2 } from 'lucide-react';
import Inputs from '../components/Inputs';

const Settings:React.FC = () => {
  return (
    <section className='flex flex-col py-10 w-full items-center bg-slate-50'>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='flex w-full justify-between'>
                <span className='text-3xl font-semibold'>Account Settings</span>

                {/* <button className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:transition duration-300'>
                    <span>Save Changes</span>
                </button> */}
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Profile Photo</span>

                <div className='flex items-center gap-5'>
                    <div className='flex justify-center items-center min-w-28 h-28 rounded-full bg-blue-300'>
                        <span className='text-3xl font-semibold text-blue-600'>D</span>
                    </div>

                    <Inputs text_label='Image URL' htmlFor_label='image_url' input_type='text' icon={<Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='https://website.com/image'/>

                </div>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Personal Information</span>

                <div className='flex gap-5'>
                    <Inputs text_label='Name' htmlFor_label='name' input_type='text' icon={<User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Your name'/>
                    <Inputs text_label='Last Name' htmlFor_label='last_name' input_type='text' icon={<User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Your last name'/>
                </div>

                <div className='flex gap-5'>
                    <Inputs text_label='Email Address' htmlFor_label='email' input_type='email' icon={<Mail className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Your email'/>
                    <Inputs text_label='Phone Number' htmlFor_label='phone_number' input_type='text' icon={<Phone className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Your phone number'/>
                </div>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Segurity</span>

                <Inputs text_label='Current Password' htmlFor_label='current_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                <Inputs text_label='New Password' htmlFor_label='new_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                <Inputs text_label='Confirm Password' htmlFor_label='confirm_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-4 bg-white border border-red-200'>
                <span className='text-xl font-medium text-red-600'>Danger Zone</span>

                <span className='text-slate-600'>Once you delete your account, all of your data will be permanently removed. This action cannot be undone.</span>
            
                <button className='flex items-center gap-2 w-fit h-fit bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 hover:transition duration-300 cursor-pointer'>
                    <Trash2 className='w-5 h-5'/>
                    <span className='font-medium'>Delete Account</span>
                </button>
            </div>

        </div>
    </section>
  )
}

export default Settings
