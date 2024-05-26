import React, { ReactNode } from 'react'

export interface CardProps{
    children: ReactNode
    closebtn:()=>void
}

const Card = ({children,closebtn}:CardProps) => {
  return (
    <div className='w-[90%] bg-white rounded-xl right-[5%]  sm:hidden box-border p-2 h-[400px] min-h-fit fixed top-[10%] '>
        <button onClick={closebtn} className='box-border px-2 py-1 rounded-2xl bg-gray-500  absolute right-0 top-0'>X</button>
        {children}
      
    </div>
  )
}

export default Card
