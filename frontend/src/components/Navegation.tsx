import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'


type PropsNavegation = {
    current_page: number,
    page: number,
    total_pages: number
}

const Navegation:React.FC<PropsNavegation> = ({current_page, page, total_pages}) => {
  return (
    <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2 text-sm'>
            <span>Current Page:</span>
            <span className='font-medium'>{current_page}</span>
        </div>

        <div className='flex items-center justify-center gap-3'>
            <button className='w-fit h-fit p-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>
                <ChevronLeftIcon className='w-5 h-5 text-white'/>
            </button>

            <span className='font-semibold'>{page}</span>

            <button className='w-fit h-fit p-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>
                <ChevronRightIcon className='w-5 h-5 text-white'/>
            </button>
        </div>

        <div className='flex items-center gap-2 text-sm'>
            <span>Total Pages:</span>
            <span className='font-medium'>{total_pages}</span>
        </div>
    </div>
  )
}

export default Navegation
