import React from 'react'

export default function FormRow({name,type,handlechange,value})  {
  return (
    <div>
         <div className='name same'>
                    <p>{name}</p>
                    <input name={name} type={type} onChange={handlechange} value={value}/>
         </div>
    </div>
  )
}

