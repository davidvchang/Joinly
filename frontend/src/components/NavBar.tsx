import React from 'react'
import { CalendarDaysIcon} from '@heroicons/react/24/solid'
import BtnNavBar from './BtnNavBar'
import { Link } from 'react-router-dom'

const NavBar:React.FC = () => {
  return (
    <div className='h-16 w-full bg-white border-b border-b-slate-300 flex items-center px-10 justify-between fixed top-0 z-50'>
        <Link to='/' className='flex items-center gap-2 text-blue-500'>
            <CalendarDaysIcon className='w-8 h-8'/>
            <span className='text-2xl font-bold'>Joinly</span>
        </Link>

        <div className='flex items-center gap-5'>
            <BtnNavBar isLogin={true} text='Login' link='/login'/>
            <BtnNavBar text='Sign Up' link='/register'/>
        </div>
    </div>
  )
}

export default NavBar
