import React, { useEffect, useState } from 'react'
import { Mail, Phone, Settings, Calendar } from 'lucide-react';
import NavProfile from '../components/NavProfile';
import BlogCard from '../components/BlogCard';
import ModalEditProfile from '../components/ModalEditProfile';
import { format } from "@formkit/tempo"

import { Users } from "../types/interfaces";
import { Events } from "../types/interfaces";

import { verifyIsLoggedUser } from "../services/usersServices";
import { getCreatedEventByUser } from "../services/eventsServices";

const Profile:React.FC = () => {

    const [dataUser, setDataUser] = useState<Users>()
    const [eventsUser, setEventsUser] = useState<Events[]>([])
    const [selectedTab, setSelectedTab] = useState<string>('created')

    const getUser = async () => {
        const data = await verifyIsLoggedUser()
        setDataUser(data.user)
    }

    const getEventsUser = async () => {
        try {
            const data = await getCreatedEventByUser()
            console.log("Eventos recibidos:", data)
            setEventsUser(data)
            
        } catch (ex) {
            console.log("ERRORR: ", ex)
        }
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
          }
    }, [dataUser])

  return (
    <section className='flex flex-col py-10 w-full items-center bg-slate-50' style={{height: "calc(100vh - 64px )"}}>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='w-full flex flex-col shadow p-7 rounded-lg gap-6 bg-white'>
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
                            <span className='text-3xl font-semibold'>{dataUser?.name + dataUser?.last_name}</span>

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

            <div className='w-full flex overflow-y-auto flex-col shadow rounded-lg gap-6 bg-white'>
                <div className='flex border-b border-b-slate-200'>
                    <NavProfile text='Created Events' isSelected={selectedTab === 'created'} onclick={() => handleTabClick('created')}/>
                    <NavProfile text='Joined Events' isSelected={selectedTab === 'joined'} onclick={() => handleTabClick('joined')}/>
                </div>

                <div className='flex flex-col gap-5 pb-5 px-5'>
                    {selectedTab === 'created' ? (
                        dataUser &&(
                            eventsUser.map((event) => (
                                <BlogCard attend_number={10} key={event.id_event} link={`/event/${event.id_event}`} image_url={event.image_url} title={event.time} category={event.category} date={event.date} time={event.time} address={event.location} />
                            ))

                        )
                    ) : (
                        <BlogCard image_url='' title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
                    )}
                    {/* <span className='text-center text-slate-600'>There are not any event</span> */}
                </div>
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
