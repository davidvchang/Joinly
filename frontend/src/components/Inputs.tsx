import React, { ReactNode } from 'react'

type PropsInputs = {
    text_label: string,
    htmlFor_label: string,
    input_type?: string,
    placeholder?: string,
    icon: ReactNode,
    isTextArea?: boolean
    value: string,
    onchange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Inputs:React.FC<PropsInputs> = ({ text_label, htmlFor_label, input_type, placeholder, icon, isTextArea, value, onchange}) => {
  return (
    <>
      {isTextArea ? (
        <div className='flex flex-col gap-1 w-full'>
            <label htmlFor={htmlFor_label} className='text-sm'>{text_label}</label>

            <div className='relative w-full'>
                <textarea name={htmlFor_label} value={value} onChange={onchange} id={htmlFor_label} className='border border-slate-300 rounded-md px-10 py-1.5 w-full min-h-32 placeholder:text-sm' placeholder={placeholder} required/>
                {icon}
            </div>
        </div>
      ) : (
        <div className='flex flex-col gap-1 w-full'>
            <label htmlFor={htmlFor_label} className='text-sm'>{text_label}</label>

            <div className='relative w-full'>
                <input type={input_type} value={value} onChange={onchange} name={htmlFor_label} id={htmlFor_label} className='border border-slate-300 rounded-md pl-10 pr-2 py-1.5 w-full placeholder:text-sm' placeholder={placeholder} required/>
                {icon}
            </div>
        </div>
      )}
    </>
  )
}

export default Inputs
