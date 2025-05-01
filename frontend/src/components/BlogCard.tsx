import { CalendarIcon } from '@heroicons/react/24/solid'
import { ClockIcon, MapPinIcon, UserGroupIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
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
    attend_number: number,
    isCreated?: boolean,
    toEdit?: string
}

const BlogCard:React.FC<PropsBlogCard> = ({link, image_url, title, category, date, time, address, attend_number, isCreated, toEdit}) => {
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

                <div className='flex gap-2 items-center justify-between text-slate-600 pt-5 border-t border-t-slate-200'>
                    <div className='flex gap-2 items-center text-slate-600'>
                        <UserGroupIcon className='w-4 h-4 '/>
                        <span className='text-sm'>{attend_number} people attending</span>
                    </div>

                    {isCreated && (
                        <div className='flex items-center gap-2'>
                            <Link to={toEdit} className='flex items-center gap-1 text-sm border px-3 py-1 rounded-md bg-amber-100 text-amber-600 hover:text-amber-700 hover:bg-amber-200 hover:transition duration-300 cursor-pointer'>
                                <PencilSquareIcon className='w-5 h-5'/>
                                <span>Edit</span>
                            </Link>

                            <button className='flex items-center gap-1 text-sm border px-3 py-1 rounded-md bg-red-100 text-red-500 hover:text-red-600 hover:bg-red-200 hover:transition duration-300 cursor-pointer'>
                                <TrashIcon className='w-5 h-5'/>
                                <span>Delete</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>


        </div>

        
    </Link>
  )
}

export default BlogCard
