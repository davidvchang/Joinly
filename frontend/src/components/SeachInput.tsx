import React from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/solid'

type PropsInputSearch = {
  value: string,
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SeachInput:React.FC<PropsInputSearch> = ({value, onchange}) => {
  return (
    <div className='flexitems-center relative'>
        <input type="search" name="search" id="search" value={value} onChange={onchange} placeholder='Search for events...' className='w-96 pl-10 pr-5 py-2 rounded border border-slate-300'/>
        <MagnifyingGlassIcon className='w-5 h-5 absolute top-3 left-3 text-slate-500'/>
    </div>
  )
}

export default SeachInput
