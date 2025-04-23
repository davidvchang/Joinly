import React from 'react'
import { Link } from 'react-router-dom'

type PropsBtn = {
    link: string,
    text: string,
    isLogin?: boolean
}

const BtnNavBar:React.FC<PropsBtn> = ({link, text, isLogin}) => {
  return (
    <>
        {isLogin ? (
            <Link to={link} className='w-fit h-fit px-5 py-2 rounded hover:bg-slate-100 hover:transition duration-300'>
                <span>{text}</span>
            </Link>
        ) : (
            <Link to={link} className='w-fit h-fit px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:transition duration-300'>
                <span>{text}</span>
            </Link>
        )}
    </>
  )
}

export default BtnNavBar
