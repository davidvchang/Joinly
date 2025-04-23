import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import Attendees from '../components/Attendees'


const EventPage:React.FC = () => {
  return (
    <section className='w-full flex flex-col p-10 gap-7'>
        <div className='flex w-full gap-10'>
            <div className='flex flex-col w-full gap-5'>
                <Link to='/' className='flex gap-2 items-center hover:text-blue-500 hover:transition duration-300'>
                    <ArrowLeftIcon className='w-5 h-5'/>
                    <span>Back to events</span>
                </Link>

                <div className='w-full h-96 bg-amber-200 rounded-md'>
                    <img src="https://kzmkmphxt6yi20wngsby.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=Tech+Conference" alt="Event Image" className='w-full h-full object-cover'/>
                </div>

                <Category text='Sports' isEventPage={true}/>

                <span className='text-4xl font-bold'>Annual Charity Run</span>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-40'>
                        <div className='flex items-center gap-2'>
                            <CalendarIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                            <span>Wednesday, May 21, 2025</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <ClockIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                            <span>09:30 am</span>
                        </div>

                    </div>

                    <div className='flex items-center gap-2'>
                        <MapPinIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                        <span>Culiacan, Sinaloa</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='text-xl font-semibold'>About this event</span>
                    <p className='text-slate-600'>Run for a cause! Join our 5K charity run to raise funds for education in underprivileged communities.</p>
                </div>
            </div>

            <div className='flex flex-col min-w-96 h-full pt-12 gap-5'>
                <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                    <span className='font-semibold text-xl'>Join this event</span>
                    <span className='text-slate-600'>Register to attend this event and connect with other participants</span>
                    <button className='w-full h-fit py-2 bg-blue-600 hover:bg-blue-700 hover:transition duration-300 cursor-pointer rounded-md text-white font-medium'>Attend Event</button>
                </div>

                <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                    <div className='flex items-center justify-between'>
                        <span className='font-semibold text-xl'>Attendees</span>

                        <div className='w-5 h-5 p-1 flex items-center justify-center bg-blue-600 text-white rounded-full'>
                            <span className='text-xs font-medium'>2</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 '>
                        <Attendees name='User 1'/>
                        <Attendees name='User 2'/>
                        <Attendees name='User 3'/>
                        <Attendees name='You'/>
                    </div>
                </div>
            </div>
        </div>
        

        

            
      
    </section>
  )
}

export default EventPage
