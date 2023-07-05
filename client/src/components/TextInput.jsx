import React from 'react'

export const TextInput = ({holder, name, label, onChange, required, styles, type, value}) => {
  // console.log({holder, name, label, onChange, required, styles, type, value})
    const compulsory = required ? 'required' : '';
    holder = holder ? holder : '';
    name = name ? name : '';
    label = label ? label : '';
    styles = styles ? styles : '';
    type = type ? type : 'text';
    value = value ? value : '';
     
    return (
    <div>
        {label !== "" ? <label htmlFor={name} className='text-sm text-bold text-gray-300' >{label}</label> : ""}
        <input {...`${compulsory}`} type={type} id={name} name={name} onChange={onChange} className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 ${styles}`} value={value} placeholder={holder} />
        {/* <input onChange={onChange} type="phone" placeholder='Phone Number (optional)'  name='phone' className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" /> */}
                                
    </div>
  )
}
