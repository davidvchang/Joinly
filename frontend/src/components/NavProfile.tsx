import React from 'react'

type PropsNavProfile = {
    text: string,
    isSelected?: boolean,
    onclick: () => void
}

const NavProfile:React.FC<PropsNavProfile> = ({ text, isSelected , onclick}) => {
  return (
    <>
        {isSelected ? (
            <button onClick={onclick} className='flex w-fit h-fit px-7 py-3 border-b-2 border-b-blue-600 text-blue-600 cursor-pointer'>
                <span className='text-sm font-medium'>{text}</span>
            </button>
        ) : (
            <button onClick={onclick} className='flex w-fit h-fit px-7 py-3 border-b-2 border-b-white cursor-pointer'>
                <span className='text-sm font-medium'>{text}</span>
            </button>
        )}
    </>
  )
}

export default NavProfile
