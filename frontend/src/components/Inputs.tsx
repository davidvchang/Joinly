import { IconNode } from 'lucide-react'
import React, { ReactNode } from 'react'

type PropsInputs = {
    text_label: string,
    htmlFor_label: string,
    input_type: string,
    placeholder?: string,
    icon: ReactNode
}

const Inputs:React.FC<PropsInputs> = ({ text_label, htmlFor_label, input_type, placeholder, icon}) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
        <label htmlFor={htmlFor_label} className='text-sm'>{text_label}</label>

        <div className='relative w-full'>
            <input type={input_type} name={htmlFor_label} id={htmlFor_label} className='border border-slate-300 rounded-md px-10 py-1.5 w-full placeholder:text-sm' placeholder={placeholder}/>
            {icon}
        </div>
    </div>
  )
}

export default Inputs
