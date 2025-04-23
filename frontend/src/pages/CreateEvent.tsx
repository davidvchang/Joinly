import React from 'react'
import { Link } from 'lucide-react'
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

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-60 bg-slate-300 rounded-lg overflow-hidden'>
                            <img src="https://kzmkmphxt6yi20wngsby.lite.vusercontent.net/placeholder.svg?height=200&width=400&text=Web+Dev+Workshop" alt="" className='w-full h-full object-cover'/>
                        </div>

                        <Inputs text_label='Image URL' htmlFor_label='image_url' input_type='text' icon={<Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='https://website.com/image'/>

                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreateEvent
