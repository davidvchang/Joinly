import { CalendarIcon } from '@heroicons/react/24/solid'
import { ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'

type PropsBlogCard = {
    title: string,
    category: string
    date: string,
    time: string,
    address: string,
    attend_number: number
}

const BlogCard:React.FC<PropsBlogCard> = ({title, category, date, time, address, attend_number}) => {
  return (
    <div className='flex flex-col w-auto rounded-xl overflow-hidden border border-slate-300 hover:-translate-y-1 hover:shadow-md hover:transition duration-300'>
        <div className='w-full h-44 bg-blue-300 relative'>

            <span className='text-xs bg-blue-500 text-white font-medium w-fit h-fit px-2 py-0.5 rounded-full absolute top-3 right-3 select-none'>{category}</span>
            
        </div>

        <div className='p-5 flex flex-col gap-2'>
            <span className='text-lg font-semibold'>{title}</span>

            <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center text-slate-600'>
                    <CalendarIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{date}</span>
                </div>

                <div className='flex gap-2 items-center text-slate-600'>
                    <ClockIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{time}</span>
                </div>

                <div className='flex gap-2 items-center text-slate-600'>
                    <MapPinIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{address}</span>
                </div>

                <div className='flex gap-2 items-center text-slate-600 pt-5'>
                    <UserGroupIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{attend_number} people attending</span>
                </div>
            </div>


        </div>

        
    </div>
  )
}

export default BlogCard
