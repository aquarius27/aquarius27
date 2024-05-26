import React, { ReactNode } from 'react'


export interface skillsProps{
    label:string
    icon?:ReactNode

}
export interface skillsCompProps {


    children:{
        itemarr:skillsProps[],
        compTag:string
    }[]

    
}
const skillsComp = ({children}:skillsCompProps) => {
  return (
   
    <>
    {children.map((item,index)=>(
    <div key={index} className="flex flex-col justify-around box-border bg-white rounded-xl  ">
    <strong className="box-border rounded-lg px-2 bg-green-300 w-fit">{item.compTag}</strong>
    <div className="flex w-full box-border p-2 items-center">
    {item.itemarr.map((lebel,inx)=>(
      <span key={inx} className="flex flex-col items-center w-full">
        <span className="text-4xl">{lebel.icon}</span>
        <span>{lebel.label}</span>

      </span>
    ))}
    </div>

  </div>
        
    ))}
    </>

  )
}

export default skillsComp
