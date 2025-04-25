import { CalendarIcon } from '@heroicons/react/24/solid'
import { ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

type PropsBlogCard = {
    link: string
    image_url: string
    title: string,
    category: string
    date: string,
    time: string,
    address: string,
    attend_number: number
}

const BlogCard:React.FC<PropsBlogCard> = ({link, image_url, title, category, date, time, address, attend_number}) => {
  return (
    <Link to={link} className='flex flex-col w-auto rounded-xl overflow-hidden border border-slate-300 hover:-translate-y-2 hover:shadow-lg hover:transition duration-300'>
        <div className='w-full h-48 border relative'>
            <img src={image_url} alt="Cover" className='w-full h-full object-cover'/>

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

                <div className='flex gap-2 items-center text-slate-600 pb-5'>
                    <MapPinIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{address}</span>
                </div>

                <div className='flex gap-2 items-center text-slate-600 pt-5 border-t border-t-slate-200'>
                    <UserGroupIcon className='w-4 h-4 '/>
                    <span className='text-sm'>{attend_number} people attending</span>
                </div>
            </div>


        </div>

        
    </Link>
  )
}

export default BlogCard
