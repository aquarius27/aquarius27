'use client'
import React, { useState } from 'react'
import Navv from '@/components/NavigateHandle'
import NavigateHandle from '@/components/NavigateHandle';

const Home = () => {
    function ClickMe(): void {
      window.scrollTo(0, 0);
        
    }
    const [currentPage,setCurrentPage] = useState <React.ReactNode | null>(null);

  return (
   <main className='flex sm:flex-col h-screen  justify-between relative w-full sm:w-[400px]  '>
   

    <section className='w-[100%] relative h-full items-center sm:w-full mx-auto flex justify-between '>
      
      
    {currentPage && (<div className='w-[80%] mx-auto sm:w-full'>{currentPage}</div>)}
     <nav className=' h-full sm:h-fit  justify-center flex  sm:fixed sm:bottom-5 absolute right-1   z-30  sm:w-full'>
    <NavigateHandle setComponent={setCurrentPage} handleClick={ClickMe}/>
    
    </nav>

    </section>
   
   </main>
  )
}

export default Home
