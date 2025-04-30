import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import { useParams } from 'react-router-dom';
import { format,  } from "@formkit/tempo"

import {Events} from '../types/interfaces'
import {Users} from '../types/interfaces'
import {Attendees} from '../types/interfaces'
import {getOneEvent} from '../services/eventsServices'
import {getOneUser, getAllUsers, verifyIsLoggedUser} from '../services/usersServices'
import {getAllAttendees, getOneAttendee} from '../services/attendeesServices'
import AttendeesComponent from '../components/Attendees';


const EventPage:React.FC = () => {

    const [event, setEvent] = useState<Events[]>([])
    const [attendees, setAttendees] = useState<Attendees[]>([])
    const [userCreator, setUserCreator] = useState<Users[]>([])
    const [users, setUsers] = useState<Users[]>([])
    const [isAttendeeUser, setIsAttendeeUser] = useState<Attendees[]>([])
    const [userIsLogged, setUserIsLogged] = useState<boolean>(false)

    const {id_event} = useParams()

    const getAttendees = async (id_event: number) => {
        const data = await getAllAttendees(id_event)
        setAttendees(data)
    }

    const getEvent = async (id_event: number) => {
        const data = await getOneEvent(id_event)
        setEvent(data)
    }

     const verifyUserIsLogged = async () => {
        const data = await verifyIsLoggedUser()
    
        if(data.message === "Authenticated") {
          setUserIsLogged(true)
        }else {
          setUserIsLogged(false);
        }
      }

      const getUserIsAttendee = async (id_event: number) => {
        const data = await getOneAttendee(id_event);
        if (data) {
            setIsAttendeeUser([data]);
        } else {
            setIsAttendeeUser([]);
        }
    };

    const getInfoCreator = async () => {
        const data = await getOneUser(event[0]?.user_id)
        setUserCreator(data)
    }

    const getUsers = async () => {
        const data = await getAllUsers()
        setUsers(data)
    }


    useEffect(() => {
        getEvent(Number(id_event))
        getUsers()
        verifyUserIsLogged()
    }, [])

    useEffect(() => {
      if(userIsLogged){
        getUserIsAttendee(Number(id_event))
      }
    }, [userIsLogged])
    

    useEffect(() => {
        if (event.length > 0) {
            getInfoCreator()
        }
    }, [event])

    useEffect(() => {
        getAttendees(Number(id_event))
    }, [id_event])
    
    


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
                        
                        <div className='flex items-center justify-between'>
                            <Category text={e.category} isEventPage={true}/>

                            <div className='flex items-center gap-5 pr-5'>
                                <span className='text-slate-600'>Created by:</span>

                                {userCreator.map((u) => (
                                    <div className='flex items-center gap-2'>
                                        {u.image_url !== "" ? (
                                            <div className='w-8 h-8 rounded-full flex items-center justify-center overflow-hidden'>
                                                <img src={u.image_url} alt="Image Profile"  className='w-full h-full object-cover'/>
                                            </div>
                                        ) : (
                                            <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden'>
                                                <span className='text-white font-medium text-sm'>{u.name[0] + u.last_name[0]}</span>
                                            </div>
                                        )}

                                        <span className='text-slate-600'>{u.name + " " + u.last_name}</span>
                        
                                    </div>
                                ))}
                            </div>

                        </div>

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
                {userIsLogged ? (
                    isAttendeeUser.length > 0 ? (
                        <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                            <span className='font-semibold text-xl'>Joined</span>
                            <span className='text-slate-600'>you have joined this event</span>
                            <button className='w-full h-fit py-2 bg-red-600 hover:bg-red-700 hover:transition duration-300 cursor-pointer rounded-md text-white font-medium'>Cancel Attend</button>
                        </div>
                    ) : (
                        <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                            <span className='font-semibold text-xl'>Join this event</span>
                            <span className='text-slate-600'>Register to attend this event and connect with other participants</span>
                            <button className='w-full h-fit py-2 bg-blue-600 hover:bg-blue-700 hover:transition duration-300 cursor-pointer rounded-md text-white font-medium'>Attend Event</button>
                        </div>
                    )
                ) : (
                    <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                        <span className='font-semibold text-xl'>Join this event</span>
                        <span className='text-slate-600'>Register to attend this event and connect with other participants</span>
                        <button className='w-full h-fit py-2 bg-blue-600 hover:bg-blue-700 hover:transition duration-300 cursor-pointer rounded-md text-white font-medium'>Attend Event</button>
                    </div>
                )}

                <div className='flex flex-col w-full rounded-md border border-slate-300 p-5 gap-3'>
                    <div className='flex items-center justify-between'>
                        <span className='font-semibold text-xl'>Attendees</span>

                        <div className='w-5 h-5 p-1 flex items-center justify-center bg-blue-600 text-white rounded-full'>
                            <span className='text-xs font-medium'>{attendees.length}</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 '>
                    {attendees.length === 0 ? (
                        <span className='text-center text-slate-600'>No one has registered</span>
                    ) : (
                        attendees.map((att) => {
                            const userFound = users.find((u) => u.id_user === att.user_id)
                            if (!userFound) return null;
                            return <AttendeesComponent key={att.id_event_attendee} name={userFound?.name + " " + userFound?.last_name}/>
                        }))}
                    </div>
                </div>
            </div>
        </div>
        

        

            
      
    </section>
  )
}

export default EventPage
