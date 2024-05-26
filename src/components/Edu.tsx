import React from 'react'

const Education: React.FC = () => {
  return (

<main className='  w-full sm:w-[80%] mx-auto relative flex justify-center items-center'>
  <section className='w-[90%] relative box-border py-4'>
    <div className='bg-white box-border p-2 rounded-lg   flex-col  flex'>
      <span><strong>B-Tech in Computer Science & Engineering</strong></span>
      <span>Dr.Babasaheb Ambedkar University</span>
      <span>Sept:2020 - june:2023 <strong> 7.45</strong></span> 
    </div>
    <div className=' rounded-xl relative  left-16 flex flex-col w-[75%] rounded-t-none px-3 bg-white shadow-purple-200 '>
      <span><strong>Specialization in:</strong></span>
      <span>1:Fullstack Development</span>
      <span>2:Object Orianted Programing</span>
      <span>3:Software Development</span>
      <span>4:Cloud Computing</span>

    </div>
  </section>

</main>
  )
}

export default Education;
