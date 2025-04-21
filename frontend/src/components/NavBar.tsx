import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarDaysIcon} from '@heroicons/react/24/solid'
import BtnNavBar from './BtnNavBar'

const NavBar:React.FC = () => {
  return (
    <div className='h-16 w-full border-b border-b-slate-300 flex items-center px-10 justify-between'>
        <div className='flex items-center gap-2'>
            <CalendarDaysIcon className='w-8 h-8'/>
            <span className='text-2xl font-bold'>Joinly</span>
        </div>

        <div className='flex items-center gap-5'>
            <BtnNavBar isLogin={true} text='Login' link='/login'/>
            <BtnNavBar text='Sign Up' link='/register'/>
        </div>
    </div>
  )
}

export default NavBar
