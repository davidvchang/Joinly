import React, { useEffect, useState } from 'react'
import { LogOut, Settings, User } from 'lucide-react';
import { CalendarDaysIcon, ChevronDownIcon} from '@heroicons/react/24/solid'
import BtnNavBar from './BtnNavBar'
import { Link } from 'react-router-dom'

const NavBar:React.FC = () => {
  const [valueToken, setValueToken] = useState<string | null>(null)
  const [menu, setMenu] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setValueToken(token)
  }, [])
  
  return (
    <div className='h-16 w-full bg-white border-b border-b-slate-300 flex items-center px-10 justify-between fixed top-0 z-50'>
        <Link to='/' className='flex items-center gap-2 text-blue-600'>
            <CalendarDaysIcon className='w-8 h-8'/>
            <span className='text-2xl font-bold'>Joinly</span>
        </Link>

        {valueToken ? (
          <div className='flex items-center gap-5 relative'>
              <button className='flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:transition duration-300' onClick={() => setMenu(!menu)}>
                <div className='w-8 h-8 bg-blue-600 rounded-full'>

                </div>

                <span className='font-medium'>David</span>
                <ChevronDownIcon className='w-3.5 h-3.5'/>
              </button>

              {menu && (
                <div className='flex flex-col absolute top-12 right-0 bg-white border border-slate-300 shadow-lg w-40 rounded-md'>
                  <div className='w-full border-b border-b-slate-300 font-medium p-3 flex justify-center'>
                    <span>My Account</span>
                  </div>

                  <div className=' flex flex-col gap-0 py-1'>
                    <Link to='/profile' className='flex gap-2 px-3 py-2 items-center hover:bg-slate-200 hover:transition duration-300' onClick={() => setMenu(!menu)}>
                      <User className='w-4.5 h-4.5'/>
                      <span>Profile</span>
                    </Link>

                    <Link to='/settings' className='flex gap-2 px-3 py-2 items-center hover:bg-slate-200 hover:transition duration-300' onClick={() => setMenu(!menu)}>
                      <Settings className='w-4.5 h-4.5'/>
                      <span>Settings</span>
                    </Link>

                    <div className='py-1'>
                      <hr className='text-slate-200'/>
                    </div>


                    <Link to='/settings' className='flex gap-2 px-3 py-2 text-red-500 items-center hover:bg-red-100 hover:transition duration-300'>
                      <LogOut className='w-4.5 h-4.5'/>
                      <span className='font-medium'>Logout</span>
                    </Link>

                  </div>
                  
                </div>
              )}

          </div>

        ): (
          <div className='flex items-center gap-5'>
              <BtnNavBar isLogin={true} text='Login' link='/login'/>
              <BtnNavBar text='Sign Up' link='/register'/>
          </div>
        )}

    </div>
  )
}

export default NavBar
