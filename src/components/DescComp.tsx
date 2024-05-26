import React, { ReactNode, useState } from 'react'
import { FaReact, FaNode } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si'


export interface DescCompProps  {
    compCss: string
    Title:string
    Date:string
    descPoint:string[]
    tsItem:{tsHeading:string,item:{label:string,icon:ReactNode}[]}[]
}


const DescComp = ({Title,Date,descPoint,tsItem,compCss}:DescCompProps) => {
    const [IsDesc,setIsDesc] = useState(true);

  return (
    <div className={`box-border flex-col sm:flex ${compCss} p-4 bg-white h-full rounded-xl w-[40%]`}>

    <span className="w-full box-border  flex justify-evenly">
      <button className={`${IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={(()=>{setIsDesc(true)})}>Description</button>
      <button className={`${!IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={()=>{setIsDesc(false)}}>Tech Stacks</button>
    </span>
    
    {IsDesc ? (
    <section className="w-full flex flex-col justify-around min-h-fit h-full box-border p-2">
      <span className="flex flex-col w-full justify-around sticky top-0 box-border bg-yellow-100 rounded-xl px-2">
      <strong>{Title}</strong>
      <h1>({Date})</h1>
      </span>
      
      <div className="flex h-[200px] font-semibold bg-yellow-50 rounded-xl flex-col box-border p-2 gap-2 w-full overflow-scroll srl">
       {descPoint.map((list,index)=>(<li key={index}>{list}</li>))}
      </div>
    
    
    
    </section>):(
    <section className="flex flex-col  gap-2 w-full box-border p-2">
      <strong className="box-border bg-white w-full z-50  sticky -top-3 p-2">Leveraging Technology</strong>
      
      <div className="w-full h-[200px] gap-2 flex flex-col  overflow-y-scroll srl box-border ">
        {tsItem.map((item,index)=>(
                  <span key={index} className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
                    <strong>{item.tsHeading}</strong>
        <span className="flex items-center w-full justify-around">
          
          {item.item.map((val,inx)=>(
           <span className="flex flex-col">
           <span>{val.icon}</span>
       <strong>{val.label}</strong> 
     </span>
          ))}
          
        </span>
        
      </span>

        ))}
    
    
      </div>
    
      
    
    
    </section>)}
    
    </div>
  )
}

export default DescComp
