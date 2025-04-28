import React from 'react'
import { Key, Trash2, Save } from 'lucide-react';
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
                <span className='text-xl font-medium'>Segurity</span>

                <Inputs isRequired={true} text_label='Current Password' htmlFor_label='current_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                <Inputs isRequired={true} text_label='New Password' htmlFor_label='new_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                <Inputs isRequired={true} text_label='Confirm Password' htmlFor_label='confirm_password' input_type='password' icon={<Key className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                
                <div className='flex items-center justify-end'>
                    <button  className='flex items-center px-4 py-2 h-fit w-fit gap-2 bg-blue-600 rounded-md text-white border border-slate-300 hover:bg-blue-700 hover:transition duration-300 cursor-pointer'>
                        <Save className='w-5 h-5'/>
                        <span>Change Password</span> 
                    </button>
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
