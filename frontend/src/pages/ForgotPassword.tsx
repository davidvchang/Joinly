import { ArrowLeftIcon, CalendarIcon } from 'lucide-react'
import React from 'react'
import Inputs from '../components/Inputs'
import { Link } from 'react-router-dom'
import { EnvelopeIcon} from '@heroicons/react/24/outline'

const ForgotPassword:React.FC = () => {
  return (
    <section className='flex w-full justify-center' style={{height: "calc(100vh - 64px)"}}>
        <div className='w-[60%] flex flex-col justify-center'>
            <div className='px-40 flex flex-col gap-10'>
                <Link to='/login' className='flex gap-2 items-center hover:text-blue-500 hover:transition duration-300'>
                    <ArrowLeftIcon className='w-5 h-5'/>
                    <span className='text-sm'>Back to events</span>
                </Link>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <CalendarIcon className='w-10 h-10 text-blue-600'/>

                    <div className='flex flex-col items-center gap-2'>
                        <span className='text-3xl font-semibold'>Reset your password</span>
                        <span className='text-slate-500 text-center'>Enter your email address and we'll send you instructions to reset your password</span>

                    </div>
                </div>

                <form className='flex flex-col gap-5'>
                    <Inputs text_label='Email Address' htmlFor_label='email' input_type='email' icon={<EnvelopeIcon className='w-4 h-4 pointer-events-none absolute top-2.5 left-3 text-slate-500'/>} placeholder='your@email.com'/>

                    <button type='submit' className='bg-blue-500 h-fit py-2 text-white rounded-md font-medium hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>Sign In</button>
                </form>

            </div>
      </div>
      
    </section>
  )
}

export default ForgotPassword
