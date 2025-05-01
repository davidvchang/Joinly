import React, { useEffect, useState } from 'react'
import { Link, Tag, FileSpreadsheet, Calendar, Clock, MapPin } from 'lucide-react'
import Inputs from '../components/Inputs'
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import {Events} from '../types/interfaces'
import {registerEvent, getAllEvents, updateEvent, getOneEvent} from '../services/eventsServices'
import {verifyIsLoggedUser} from '../services/usersServices'

const CreateEvent:React.FC = () => {

    const { id_event } = useParams();
    const navigate = useNavigate()

    const valueInitial = {
        id_event: 0,
        image_url: "",
        title: "",
        description: "",
        category: "",
        location: "",
        date: "",
        time: "",
        user_id: null,
    }

    const [dataEvents, setDataEvent] = useState<Events>(valueInitial)
    const [events, setEvents] = useState<Events[]>([])
    const [newCategory, setNewCategory] = useState('');
    const [idUser, setIdUser] = useState<number | null>(null);

    const getEvents = async () => {
        const data = await getAllEvents()
        setEvents(data)
    }

    const getDataUser = async () => {
        const data = await verifyIsLoggedUser()
        
        if(data.message === "Authenticated") {
            setIdUser(data.user.id)
        }
    }

    const getUniqueCategory = () => {
        const categories = events.map((e) => e.category);
        return [...new Set(categories)];
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDataEvent({ ...dataEvents, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(id_event){
            const finalEvent = {
                ...dataEvents,
                category: dataEvents.category === 'new_category' ? newCategory : dataEvents.category
            };

            const data = await updateEvent(Number(id_event), finalEvent)
            if(data.status === 204){
                Swal.fire({
                    title: 'Updated Event',
                    text: 'The event has been successfully updated',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if(result.isConfirmed){
                        navigate('/profile')
                    }
                })
            }

        } else {
            await getDataUser();
    
            const finalEvent = {
                ...dataEvents,
                category: dataEvents.category === 'new_category' ? newCategory : dataEvents.category
            };
    
            const data = await registerEvent(finalEvent)
    
            if(data.status === 201){
                Swal.fire({
                    title: 'Created Event',
                    text: 'The event has been successfully created',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if(result.isConfirmed){
                        setDataEvent(valueInitial)
                    }
                })
            }
        }
    }

    const getValuesEvent = async () => {
        const data = await getOneEvent(Number(id_event))
        if (Array.isArray(data) && data.length > 0) {
            const event = data[0];

            const formattedDate = event.date ? new Date(event.date).toISOString().split('T')[0] : "";
            setDataEvent({...event, date: formattedDate, });
        }
    }
    useEffect(() => {
        getEvents()
        getDataUser();
    }, [])

    useEffect(() => {
        if (idUser !== null) {
            setDataEvent(prev => ({ ...prev, user_id: idUser }));
        }
    }, [idUser]);

    useEffect(() => {
        if (id_event) {
          getValuesEvent();
        }
      }, [id_event]);

  return (
    <section className='flex flex-col py-10 w-full items-center'>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='w-full flex flex-col p-7 gap-6'>
                {id_event ? (
                    <div className='flex flex-col items-center'>
                        <span className='text-3xl font-semibold'>Edit Event</span>
                        <span className='text-slate-600'>edit the details below</span>
                    </div>
                ) : (
                    <div className='flex flex-col items-center'>
                        <span className='text-3xl font-semibold'>Create a New Event</span>
                        <span className='text-slate-600'>Fill in the details below to create your even</span>
                    </div>
                )}

                <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-60 bg-[#EAEAEA] rounded-lg overflow-hidden'>
                            {dataEvents.image_url === "" ? (
                                <img src="https://kzmkmphxt6yi20wngsby.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=Web+Dev+Workshop" alt="Cover Event" className='w-full h-full object-cover'/>
                            ) : (
                                <img src={dataEvents.image_url} alt="" className='w-full h-full object-cover'/>
                            )}
                        </div>

                        <Inputs onchange={handleOnChange} value={dataEvents.image_url} text_label='Image URL' htmlFor_label='image_url' input_type='text' icon={<Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='https://website.com/image'/>
                        <Inputs onchange={handleOnChange} value={dataEvents.title} text_label='Event Title' htmlFor_label='title' input_type='text' icon={<Tag className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Give your event a name' isRequired={true}/>
                        <Inputs onchange={handleOnChange} value={dataEvents.description} isTextArea={true} text_label='Description' htmlFor_label='description' icon={<FileSpreadsheet className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Give your event a description' isRequired={true}/>
                        
                        <div className='flex w-full items-center gap-5'>
                            <Inputs isRequired={true} onchange={handleOnChange} value={dataEvents.date} text_label='Date' htmlFor_label='date' input_type='date' icon={<Calendar className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                            <Inputs isRequired={true} onchange={handleOnChange} value={dataEvents.time} text_label='Time' htmlFor_label='time' input_type='time' icon={<Clock className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                        </div>

                        <Inputs onchange={handleOnChange} value={dataEvents.location} text_label='Location' htmlFor_label='location' input_type='text' icon={<MapPin className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Where will the event be held?' isRequired={true}/>
                    
                        <div className="mb-4 flex flex-col gap-4">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="category" className="text-sm">Category</label>
                                <select id="category" value={dataEvents.category} onChange={handleOnChange} name="category" className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900" required>
                                    {getUniqueCategory().map((category, index) => (
                                        <option value={category} key={index}>{category}</option>
                                    ))}

                                    <option value="new_category">New Category</option>
                                </select>

                            </div>

                            {dataEvents.category === 'new_category' && (
                                <Inputs onchange={(e) => setNewCategory(e.target.value)} value={newCategory} text_label='New Category' htmlFor_label='new_category' input_type='text' icon={<Tag className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter new category' isRequired={true}/>
                            )}

                        </div>
                    </div>

                    <div className='flex items-center justify-end pt-3'>
                        {id_event ? (
                            <button type="submit" className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:transition duration-300 cursor-pointer'>Edit Event</button>
                        ) : (
                            <button type="submit" className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:transition duration-300 cursor-pointer'>Create Event</button>
                        )}
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default CreateEvent
