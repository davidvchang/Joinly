import React from 'react'
import SeachInput from '../components/SeachInput'
import Category from '../components/Category'

const Home:React.FC = () => {
  return (
    <section className='w-full flex flex-col p-10 gap-7'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>Explore Events</h1>
            <span className='text-slate-600'>Discover events that match your interests</span>

        </div>

        <SeachInput/>

        <div className='flex flex-col gap-3'>
            <span>Categories</span>

            <div className='flex flex-wrap gap-2'>
                <Category text='All' isSelected={true}/>
                <Category text='Technology'/>
                <Category text='Cultural'/>
                <Category text='Economic'/>
                <Category text='Bussiness'/>
                <Category text='Music'/>
                <Category text='Other'/>
            </div>
        </div>
    </section>
  )
}

export default Home
