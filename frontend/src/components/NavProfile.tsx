import React from 'react'

type PropsNavProfile = {
    text: string,
    isSelected?: boolean
}

const NavProfile:React.FC<PropsNavProfile> = ({ text, isSelected }) => {
  return (
    <>
        {isSelected ? (
            <div className='flex w-fit h-fit px-7 py-3 border-b-2 border-b-blue-600 text-blue-600'>
                <span className='text-sm font-medium'>{text}</span>
            </div>
        ) : (
            <div className='flex w-fit h-fit px-7 py-3 border-b-2 border-b-white'>
                <span className='text-sm font-medium'>{text}</span>
            </div>
        )}
    </>
  )
}

export default NavProfile
