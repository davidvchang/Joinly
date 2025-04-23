import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

type PropsAttendees = {
    name: string
}

const Attendees:React.FC<PropsAttendees> = ({name}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
            <UserIcon className='w-5 h-5 text-white'/>
        </div>

        <span className='text-sm'>{name}</span>
    </div>
  )
}

export default Attendees
