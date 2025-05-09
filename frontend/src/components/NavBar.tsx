import React, { useEffect, useState } from 'react'
import { LogOut, Settings, User } from 'lucide-react';
import { CalendarDaysIcon, ChevronDownIcon} from '@heroicons/react/24/solid'
import BtnNavBar from './BtnNavBar'
import { Link} from 'react-router-dom'

import {verifyIsLoggedUser, logoutUser} from '../services/usersServices'
import {Users} from '../types/interfaces'

const NavBar:React.FC = () => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false)
  const [dataUser, setDataUsers] = useState<Users[]>([])


  const verifyUserIsLogged = async () => {
    const data = await verifyIsLoggedUser()

    if(data.message === "Authenticated") {
      setUserIsLogged(true)
      setDataUsers(data.user)
    }else {
      setUserIsLogged(false);
    }
  }

  const handleLogout = async () => {
    await logoutUser()
    window.location.href = "/";
  }

  useEffect(() => {
    verifyUserIsLogged()
  }, [userIsLogged])
  
  return (
    <div className='h-16 w-full bg-white border-b border-b-slate-300 flex items-center px-10 justify-between fixed top-0 z-50'>
        <Link to='/' className='flex items-center gap-2 text-blue-600'>
            <CalendarDaysIcon className='w-8 h-8'/>
            <span className='text-2xl font-bold'>Joinly</span>
        </Link>

        {userIsLogged ? (
          <div className='flex items-center gap-5 relative'>
              <button className='flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:transition duration-300' onClick={() => setMenu(!menu)}>
                
                  {dataUser.image_url !== "" ? (
                    <div className='w-8 h-8 rounded-full flex items-center justify-center overflow-hidden'>
                        <img src={dataUser.image_url} alt="Image Profile"  className='w-full h-full object-cover'/>
                    </div>
                  ) : (
                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                      <span className='text-white font-medium'>{dataUser.name[0] + dataUser.last_name[0]}</span>

                    </div>
                  )}

                <span className='font-medium'>{dataUser?.name + " " + dataUser?.last_name}</span>
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


                    <button  onClick={handleLogout} className='flex gap-2 px-3 py-2 text-red-500 items-center hover:bg-red-100 hover:transition duration-300 cursor-pointer'>
                      <LogOut className='w-4.5 h-4.5'/>
                      <span className='font-medium'>Logout</span>
                    </button>

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
