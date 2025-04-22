import React from 'react'

type PropsCategory = {
    text: string,
    isSelected?: boolean
}

const Category:React.FC<PropsCategory> = ({text, isSelected}) => {
  return (
    <>
        {isSelected ? (
            <button className='flex items-center justify-center w-fit h-fit px-3 py-0.5 border border-blue-600 rounded-full bg-blue-600 cursor-pointer'>
                <span className='text-sm text-white'>{text}</span>
            </button>
        ) : (
            <button className='flex items-center justify-center w-fit h-fit px-3 py-0.5 border border-blue-200 rounded-full bg-blue-100 cursor-pointer'>
                <span className='text-sm text-sky-900'>{text}</span>
            </button>
        )}
    </>
  )
}

export default Category
