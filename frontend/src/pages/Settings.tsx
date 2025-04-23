import React from 'react'
import { Link, User, Mail, Phone, Key, Trash2 } from 'lucide-react';

const Settings:React.FC = () => {
  return (
    <section className='flex flex-col py-10 w-full items-center bg-slate-50'>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='flex w-full justify-between'>
                <span className='text-3xl font-semibold'>Account Settings</span>

                <button className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:transition duration-300'>
                    <span>Save Changes</span>
                </button>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Profile Photo</span>

                <div className='flex items-center gap-5'>
                    <div className='flex justify-center items-center min-w-28 h-28 rounded-full bg-blue-300'>
                        <span className='text-3xl font-semibold text-blue-600'>D</span>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="image_url" className=''>Image URL</label>

                        <div className='relative w-full'>
                            <input type="text" name="image_url" id="image_url" className='border border-slate-300 rounded-md px-10 py-1.5 w-[70%]'/>
                            <Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Personal Information</span>

                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="name" className=''>Name</label>

                        <div className='relative w-full'>
                            <input type="text" name="name" id="name" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                            <User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="last_name" className=''>Last Name</label>

                        <div className='relative w-full'>
                            <input type="text" name="last_name" id="last_name" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                            <User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                        </div>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="email" className=''>Email Address</label>

                        <div className='relative w-full'>
                            <input type="email" name="email" id="email" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                            <Mail className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="phone_number" className=''>Phone Number</label>

                        <div className='relative w-full'>
                            <input type="text" name="phone_number" id="phone_number" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                            <Phone className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col shadow p-5 rounded-lg gap-6 bg-white'>
                <span className='text-xl font-medium'>Segurity</span>

                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="current_password" className=''>Current Password</label>

                    <div className='relative w-full'>
                        <input type="password" name="current_password" id="current_password" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                        <Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                    </div>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="new_password" className=''>New Password</label>

                    <div className='relative w-full'>
                        <input type="password" name="new_password" id="new_password" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                        <Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="confirm_password" className=''>Confirm Password</label>

                    <div className='relative w-full'>
                        <input type="password" name="confirm_password" id="confirm_password" className='border border-slate-300 rounded-md px-10 py-1.5 w-full'/>
                        <Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>
                    </div>
                </div>
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
