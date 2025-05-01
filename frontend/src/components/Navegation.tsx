import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'


type PropsNavegation = {
    current_page: number,
    page: number,
    total_pages: number,
    onclick_next_page: () => void
    onclick_previous_page: () => void
}

const Navegation:React.FC<PropsNavegation> = ({current_page, page, total_pages, onclick_next_page, onclick_previous_page}) => {
  return (
    <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2 text-sm'>
            <span>Current Page:</span>
            <span className='font-medium'>{current_page}</span>
        </div>

        <div className='flex items-center justify-center gap-3'>
            {current_page === 1 ? (
                <button onClick={onclick_previous_page} className='w-fit h-fit p-1 rounded-md bg-blue-200 cursor-pointer'>
                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                </button>
            ) : (
                <button onClick={onclick_previous_page} className='w-fit h-fit p-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>
                    <ChevronLeftIcon className='w-5 h-5 text-white'/>
                </button>
            )}

            <span className='font-semibold'>{page}</span>

            {current_page === total_pages ? (
                <button onClick={onclick_next_page} className='w-fit h-fit p-1 rounded-md bg-blue-200 cursor-pointer'>
                    <ChevronRightIcon className='w-5 h-5 text-white'/>
                </button>
            ) : (
                <button onClick={onclick_next_page} className='w-fit h-fit p-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>
                    <ChevronRightIcon className='w-5 h-5 text-white'/>
                </button>
            )}

        </div>

        <div className='flex items-center gap-2 text-sm'>
            <span>Total Pages:</span>
            <span className='font-medium'>{total_pages}</span>
        </div>
    </div>
  )
}

export default Navegation
