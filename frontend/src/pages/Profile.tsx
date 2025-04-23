import React from 'react'
import { Mail, Phone, Settings, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'
import NavProfile from '../components/NavProfile';
import BlogCard from '../components/BlogCard';

const Profile:React.FC = () => {
  return (
    <section className='flex flex-col py-10 w-full items-center bg-slate-50' style={{height: "calc(100vh - 64px )"}}>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='w-full flex flex-col shadow p-7 rounded-lg gap-6 bg-white'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center justify-center w-32 h-32 rounded-full bg-blue-500'>
                            <span className='font-semibold text-4xl text-white'>DV</span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-3xl font-semibold'>David Valenzuela</span>

                            <div className='flex flex-col gap-2 text-sm'>
                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Mail className='w-4 h-4'/>
                                    <span>dvalenzuelachang@gmail.com</span>
                                </div>

                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Phone className='w-4 h-4'/>
                                    <span>+52 (673) 107-2858</span>
                                </div>

                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Calendar className='w-4 h-4'/>
                                    <span>Joined March 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to='/settings' className='flex items-center px-3 py-1 h-fit w-fit gap-2 rounded-md text-slate-600 border border-slate-300 hover:bg-slate-100 hover:transition duration-300'>
                        <Settings className='w-4 h-4'/>
                        <span>Edit Profile</span> 
                    </Link>
                </div>

                <div className='flex w-full items-center justify-around border-t border-t-slate-200 pt-7'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-blue-600'>1</span>
                        <span className='text-sm text-slate-600'>Events Created</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-purple-600'>3</span>
                        <span className='text-sm text-slate-600'>Events Joined</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-green-600'>4</span>
                        <span className='text-sm text-slate-600'>Total Events</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col shadow rounded-lg gap-6 bg-white'>
                <div className='flex border-b border-b-slate-200'>
                    <NavProfile text='Created Events' isSelected={true}/>
                    <NavProfile text='Joined Events'/>
                </div>

                <div className='flex flex-col gap-5 pb-5 px-5'>
                    <span className='text-center text-slate-600'>There are not any event</span>
                    {/* <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} /> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
