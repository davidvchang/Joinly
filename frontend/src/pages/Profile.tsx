import React, { useEffect, useState } from 'react'
import { Mail, Phone, Settings, Calendar } from 'lucide-react';
import NavProfile from '../components/NavProfile';
import BlogCard from '../components/BlogCard';
import ModalEditProfile from '../components/ModalEditProfile';
import { format } from "@formkit/tempo"

import { Users, Events, Attendees } from "../types/interfaces";

import { verifyIsLoggedUser } from "../services/usersServices";
import { getAttendees } from "../services/attendeesServices";
import { getCreatedEventByUser, getJoinedEventByUser, getNumberJoined, getAllEvents } from "../services/eventsServices";

const Profile:React.FC = () => {

    const [dataUser, setDataUser] = useState<Users>()
    const [eventsUser, setEventsUser] = useState<Events[]>([])
    const [eventsJoined, setEventsJoined] = useState<Events[]>([])
    const [events, setEvents] = useState<Events[]>([])
    const [attend, setAttend] = useState<Attendees[]>([])
    const [selectedTab, setSelectedTab] = useState<string>('created')

    const getUser = async () => {
        const data = await verifyIsLoggedUser()
        setDataUser(data.user)
    }

    const getEventsUser = async () => {
        const data = await getCreatedEventByUser()
        setEventsUser(data)
    }

    const getEvent = async () => {
        const data = await getAllEvents()
        setEvents(data)
    }
    const getAttend = async () => {
        const data = await getAttendees()
        setAttend(data)
    }

    const getEventsJoined = async () => {
        const data = await getJoinedEventByUser()
        setEventsJoined(data)
    }

    const [toggleModal, setToggleModal] = useState<boolean>(false)

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (dataUser) {
            getEventsUser()
            getEvent()
            getAttend()
          }
    }, [dataUser])

    useEffect(() => {
        getEventsJoined()
    }, [])

  return (
    <section className='flex flex-col py-10 px-10 w-full items-center bg-slate-50' style={{minHeight: "calc(100vh - 64px )"}}>
        <div className='w-full flex flex-col gap-5 items-center'>
            <div className='w-[60%] flex flex-col shadow p-7 rounded-lg gap-6 bg-white'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        {dataUser?.image_url === "" ? (
                            <div className='flex items-center justify-center w-32 h-32 rounded-full bg-blue-500'>
                                <span className='font-semibold text-4xl text-white select-none'>{dataUser.name[0] + dataUser.last_name[0]}</span>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center w-32 h-32 rounded-full bg-blue-500'>
                                <img src={dataUser?.image_url} alt="Profile Image" className='w-full h-full object-cover'/>
                            </div>
                        )}

                        <div className='flex flex-col gap-2'>
                            <span className='text-3xl font-semibold'>{dataUser?.name + " " + dataUser?.last_name}</span>

                            <div className='flex flex-col gap-2 text-sm'>
                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Mail className='w-4 h-4'/>
                                    <span>{dataUser?.email}</span>
                                </div>

                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Phone className='w-4 h-4'/>
                                    {dataUser?.phone_number === "" ? (
                                        <span>Without phone number</span>
                                    ) : (
                                        <span>{dataUser?.phone_number}</span>
                                    )}
                                </div>

                                <div className='flex items-center gap-2 text-slate-600'>
                                    <Calendar className='w-4 h-4'/>
                                    <span>Joined {format(dataUser?.joined_time, "medium")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setToggleModal(!toggleModal)} className='flex items-center px-3 py-1 h-fit w-fit gap-2 rounded-md text-slate-600 border border-slate-300 hover:bg-slate-100 hover:transition duration-300 cursor-pointer'>
                        <Settings className='w-4 h-4'/>
                        <span>Edit Profile</span> 
                    </button>
                </div>

                <div className='flex w-full items-center justify-around border-t border-t-slate-200 pt-7'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-blue-600'>{eventsUser.length}</span>
                        <span className='text-sm text-slate-600'>Events Created</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-purple-600'>{eventsJoined.length}</span>
                        <span className='text-sm text-slate-600'>Events Joined</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-green-600'>{eventsUser.length + eventsJoined.length}</span>
                        <span className='text-sm text-slate-600'>Total Events</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex overflow-y-auto flex-col shadow rounded-lg gap-6 bg-white'>
                <div className='flex border-b border-b-slate-200'>
                    <NavProfile text='Created Events' isSelected={selectedTab === 'created'} onclick={() => handleTabClick('created')}/>
                    <NavProfile text='Joined Events' isSelected={selectedTab === 'joined'} onclick={() => handleTabClick('joined')}/>
                </div>

                
                    {selectedTab === 'created' ? (
                        dataUser && (
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-5 px-5'>
                                {eventsUser.map((event) => {
                                    const formattedTime = event.time.slice(0, 5);
                                    const timeWithDate = `1970-01-01T${formattedTime}:00`;
                                    const dataAttend = attend.filter((att) => (
                                        events.filter((e) => e.id_event === att.event_id)
                                    ))
                                    return eventsUser.length > 0 ? (
                                            <BlogCard attend_number={(dataAttend.filter((att) => att.event_id === event.id_event)).length} key={event.id_event} link={`/event/${event.id_event}`} image_url={event.image_url} title={event.title} category={event.category} date={format(event.date, { date: "medium" })} time={format(timeWithDate, { time: "short" })} address={event.location} />
                                        
                                    ) : (
                                        <div className='w-full flex justify-center items-center pb-5'>
                                            <span className='text-center text-slate-600 '>You have not created any events</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    ) : (
                            eventsJoined.length > 0 ? (
                                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-5 px-5'>
                                    {eventsJoined.map((e) => {
                                        const formattedTime = e.time.slice(0, 5);
                                        const timeWithDate = `1970-01-01T${formattedTime}:00`;

                                        const dataAttend = attend.filter((att) => (
                                            events.filter((e) => e.id_event === att.event_id)
                                        ))

                                        return <BlogCard attend_number={(dataAttend.filter((att) => att.event_id === e.id_event)).length} key={e.id_event} link={`/event/${e.id_event}`} image_url={e.image_url} title={e.title} category={e.category} date={format(e.date, { date: "medium" })} time={format(timeWithDate, { time: "short" })} address={e.location} />
                                    })}
                                </div>

                            ) : (
                                <div className='w-full flex justify-center items-center pb-5'>
                                    <span className='text-center text-slate-600'>You have not joined any events</span>
                                </div>
                            )
                        )
                    }
                
            </div>

            {toggleModal && (
                <div className='fixed inset-0 bg-black/20 backdrop-blur-xs flex justify-center items-center z-50'>
                    <ModalEditProfile onclick={() => setToggleModal(!toggleModal)}/>
                </div>
            )}
        </div>
    </section>
  )
}

export default Profile
