import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import Attendees from '../components/Attendees'
import { useParams } from 'react-router-dom';
import { format,  } from "@formkit/tempo"

import {Events} from '../types/interfaces'
import {getOneEvent} from '../services/eventsServices'


const EventPage:React.FC = () => {

    const [event, setEvent] = useState<Events[]>([])

    const {id_event} = useParams()

    const getEvent = async (id_event: number) => {
        const data = await getOneEvent(id_event)
        setEvent(data)
    }

    useEffect(() => {
        getEvent(Number(id_event))
    }, [])
    


  return (
    <section className='w-full flex flex-col p-10 gap-7'>
        <div className='flex w-full gap-10'>
            <div className='flex flex-col w-full gap-5'>
                <Link to='/' className='flex gap-2 items-center hover:text-blue-500 hover:transition duration-300'>
                    <ArrowLeftIcon className='w-5 h-5'/>
                    <span>Back to events</span>
                </Link>
                {event.map((e) => {
                    const formattedTime = e.time.slice(0, 5);
                    const timeWithDate = `1970-01-01T${formattedTime}:00`;
                    return <>
                    
                        <div className='w-full h-96 rounded-md'>
                            <img src={e.image_url} alt="Event Image" className='w-full h-full object-cover'/>
                        </div>

                        <Category text='Sports' isEventPage={true}/>

                        <span className='text-4xl font-bold'>{e.title}</span>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-40'>
                                <div className='flex items-center gap-2'>
                                    <CalendarIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                                    <span>{format(e.date, "medium")}</span>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <ClockIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                                    <span>{format(timeWithDate, { time: "short" })}</span>
                                </div>

                            </div>

                            <div className='flex items-center gap-2'>
                                <MapPinIcon className='w-5 h-5 text-blue-500' strokeWidth={2}/>
                                <span>{e.location}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-semibold'>About this event</span>
                            <p className='text-slate-600'>{e.description}</p>
                        </div>
                    </>
                })}
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
