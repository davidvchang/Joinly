import { Link, Mail, Phone, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Inputs from './Inputs'

import { verifyIsLoggedUser } from "../services/usersServices";
import { Users } from "../types/interfaces";

type PropsModal = {
    onclick: () => void
}

const ModalEditProfile:React.FC<PropsModal> = ({onclick}) => {

    const [dataUser, setDataUser] = useState<Users[]>([])

    const getUser = async () => {
        const data = await verifyIsLoggedUser()
        setDataUser(data.user)
    }

    useEffect(() => {
        getUser()
    }, [])
    
    
  return (
    <div className='flex flex-col absolute bg-white p-8 rounded-lg shadow-lg gap-5 items-center'>
        {dataUser.image_url === "" ? (
            <div className='flex items-center justify-center w-40 h-40 rounded-full bg-blue-500'>
                <span className='font-semibold text-6xl text-white select-none'>{dataUser.name[0] + dataUser.last_name[0]}</span>
            </div>

        ) : (
            <div className='flex items-center justify-center w-40 h-40 rounded-full bg-blue-500'>
               <img src={dataUser.image_url} alt="Image Profile" className='w-full h-full object-cover'/>
            </div>
        )}

        <Inputs text_label='Image URL' htmlFor_label='image_url' input_type='text' icon={<Link className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='https://website.com/image'/>

        <div className='flex items-center gap-5'>
            <Inputs value={dataUser.name} text_label='Name' htmlFor_label='name' input_type='text' icon={<User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your name'/>
            <Inputs value={dataUser.last_name} text_label='Last Name' htmlFor_label='last_name' input_type='text' icon={<User className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='Enter your last name'/>
        </div>

        <Inputs value={dataUser.phone_number} text_label='Phone Number' htmlFor_label='phone_number' input_type='text' icon={<Phone className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='+521234567890'/>
        <Inputs value={dataUser.email} text_label='Email Address' htmlFor_label='email' input_type='email' icon={<Mail className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='your@email.com'/>

        <div className='flex items-center w-full gap-5 pt-2'>
            <button onClick={onclick} className='w-full py-2 border border-slate-300 rounded hover:bg-slate-200 hover:transition duration-300 cursor-pointer'>
                <span>Cancel</span>
            </button>

            <button className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:transition duration-300 cursor-pointer'>
                <span>Save</span>
            </button>
        </div>
    </div>
  )
}

export default ModalEditProfile
