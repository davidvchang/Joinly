import React from 'react'
import { Link } from 'lucide-react';

const Settings:React.FC = () => {
  return (
    <section className='flex flex-col py-10 w-full items-center bg-slate-50'>
        <div className='w-[60%] flex flex-col gap-5'>
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

        </div>
    </section>
  )
}

export default Settings
