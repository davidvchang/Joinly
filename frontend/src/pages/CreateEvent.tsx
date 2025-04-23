import React from 'react'
import { Link, Tag, FileSpreadsheet, Calendar, Clock, MapPin } from 'lucide-react'
import Inputs from '../components/Inputs'

const CreateEvent:React.FC = () => {
  return (
    <section className='flex flex-col py-10 w-full items-center'>
        <div className='w-[50%] flex flex-col gap-5'>
            <div className='w-full flex flex-col p-7 gap-6'>
                <div className='flex flex-col items-center'>
                    <span className='text-3xl font-semibold'>Create a New Event</span>
                    <span className='text-slate-600'>Fill in the details below to create your even</span>
                </div>

                <form className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-60 bg-slate-300 rounded-lg overflow-hidden'>
                            <img src="https://kzmkmphxt6yi20wngsby.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=Web+Dev+Workshop" alt="" className='w-full h-full object-cover'/>
                        </div>

                        <Inputs text_label='Image URL' htmlFor_label='image_url' input_type='text' icon={<Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='https://website.com/image'/>
                        <Inputs text_label='Event Title' htmlFor_label='title' input_type='text' icon={<Tag className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Give your event a name'/>
                        <Inputs isTextArea={true} text_label='Description' htmlFor_label='description' icon={<FileSpreadsheet className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Give your event a description'/>
                        
                        <div className='flex w-full items-center gap-5'>
                            <Inputs text_label='Date' htmlFor_label='date' input_type='date' icon={<Calendar className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                            <Inputs text_label='Time' htmlFor_label='time' input_type='time' icon={<Clock className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>}/>
                        </div>

                        <Inputs text_label='Location' htmlFor_label='description' input_type='text' icon={<MapPin className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Where will the event be held?'/>
                    
                        <div className="mb-4">
                            <label htmlFor="category" className="text-sm">Category</label>
                            <select id="category" name="category" className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-900">
                                <div className='flex flex-col bg-slate-200'>
                                    <option value="">Sport</option>
                                    <option value="">Technology</option>
                                    <option value="">Development</option>
                                    <option value="">Cook</option>

                                </div>
                            </select>
                        </div>
                    </div>

                    <div className='flex items-center justify-end pt-3'>
                        <button type="submit" className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:transition duration-300 cursor-pointer'>Create Event</button>

                    </div>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default CreateEvent
