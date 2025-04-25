import React from 'react'

type PropsCategory = {
    text: string,
    isSelected?: boolean,
    isEventPage?: boolean,
    onclick?: () => void
}

const Category:React.FC<PropsCategory> = ({text, isSelected, isEventPage, onclick}) => {
  return (
    <>  
        {isEventPage ? (
            <div className='flex items-center justify-center w-fit h-fit px-3 py-0.5 rounded-full bg-blue-200'>
                <span className='text-sm text-blue-800 font-medium'>{text}</span>
            </div>
        ) : isSelected ? (
            <button className='flex items-center justify-center w-fit h-fit px-3 py-0.5 border border-blue-600 rounded-full bg-blue-600 cursor-pointer' onClick={onclick}>
                <span className='text-sm text-white'>{text}</span>
            </button>
        ) : (
            <button className='flex items-center justify-center w-fit h-fit px-3 py-0.5 border border-blue-200 rounded-full bg-blue-100 cursor-pointer' onClick={onclick}>
                <span className='text-sm text-sky-900'>{text}</span>
            </button>
        )}
    </>
  )
}

export default Category
