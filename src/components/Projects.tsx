import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import { FaChalkboardTeacher, FaNode, FaReact, FaShopify } from "react-icons/fa";
import { FaAnglesLeft,
  FaAnglesRight,
  FaCartShopping,} from "react-icons/fa6";
import { SiExpress, SiGraphql, SiMongodb, SiMongoose, SiNextdotjs, SiPostgresql, SiPrisma, SiTailwindcss } from "react-icons/si";

import Image from 'next/image'
import img  from '../../public/eclassroom.png'



type heroSlideProps = {
  imglink: string
  lable: string
}

const Project = () => {

  const [Close,Open] = useState('none');
  const [IsDesc,setIsDesc] = useState(true);
  const [Ecslide,setEcslide] = useState<heroSlideProps[]>([{imglink:'/eclassroom.png',lable:'img1'},
  {imglink:'/eclassroom1.png',lable:'img2'},])


   const Eclassroom:heroSlideProps[] = [
    {imglink:'/eclassroom.png',lable:'img1'},
    {imglink:'/eclassroom1.png',lable:'img2'},
    
  ]
  const Clickcart:heroSlideProps[] = [
    {imglink:'/clickcart.png',lable:'img1'},
    {imglink:'/clickcart.png',lable:'img2'},
    
  ]

  const ecSlide = useRef<HTMLDivElement | null>(null);
  const ckSlide = useRef<HTMLDivElement | null>(null);



 

  const slideHandlerLeft = useCallback(
    (id: string) => {
      let slide;
  
      if (id === 'Eclassroom') {
        slide = ecSlide.current;
      } else if (id === 'Clickcart') {
        slide = ckSlide.current;
      }
  
      const width = slide?.clientWidth ? Number(slide.clientWidth) : 0;
  
      slide?.scrollBy({
        left: -width,
        behavior: 'smooth',
      });
    },
    [ecSlide, ckSlide]
  );


  const slideHandlerRight = useCallback(
    (id: string) => {
      let slide;
  
      if (id === 'Eclassroom') {
        slide = ecSlide.current;
      } else if (id === 'Clickcart') {
        slide = ckSlide.current;
      }
  
      const width = slide?.clientWidth ? Number(slide.clientWidth) : 0;
  
      slide?.scrollBy({
        left: width,
        behavior: 'smooth',
      });
    },
    [ecSlide, ckSlide]
  );

  function CardHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    Close === 'none' ? Open('flex') : Open('none');
  }

  return (
   
    <main className="sm:w-[90%] gap-4 w-[90%] mx-auto z-30   box-border relative flex-col p-4 flex ">
      <span className="w-full flex justify-center  flex-col items-center box-border p-2">
        <strong className="text-2xl text-white">Showcasing my Projects and Works</strong>
        <span className="w-[70%] border-2 border-white"></span>
      </span>

      <section className="w-full box-border p-2  gap-2 items-center min-h-fit flex justify-around">
      <div className=" box-border relative h-full justify-evenly flex flex-col items-center p-2 bg-white  rounded-xl w-full sm:w-[60%]">
      <strong className="box-border flex gap-2 text-3xl font-bold items-center p-2">E-Classroom <FaChalkboardTeacher /></strong>
         
         <div className="h-full justify-between items-center flex  w-full ">
          <button id="Eclassroom" onClick={(event) => slideHandlerLeft(event.currentTarget.id)}><FaAnglesLeft/></button>
                <div ref={ecSlide} className="w-full box-border flex overflow-x-scroll srl px-2 rounded-xl h-full">
                {Ecslide.map((item,index)=>(
              <img src={item.imglink}  className='w-full shrink-0 ' alt={item.lable} />
          ))}
                </div>
                <button id="Eclassroom" onClick={(event) => slideHandlerRight(event.currentTarget.id)} ><FaAnglesRight/></button>
         </div>

          <div className="w-full box-border gap-2 p-2    relative flex justify-around">
            <a target="_blank" rel="noreferrer" className="bg-black  rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">code</a>
            <a target="_blank" rel="noreferrer" className="bg-black  rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">live</a>
          </div>



        </div>

        
        <div className="box-border flex-col sm:flex hidden p-4 bg-white h-full rounded-xl w-[40%]">

            <span className="w-full box-border p-2 flex justify-evenly">
              <button className={`${IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={(()=>{setIsDesc(true)})}>Description</button>
              <button className={`${!IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={()=>{setIsDesc(false)}}>Tech Stacks</button>
            </span>

            {IsDesc ? (
            <section className="w-full flex flex-col justify-around min-h-fit h-full box-border p-2">
              <span className="flex flex-col w-full justify-around sticky top-0 box-border bg-yellow-100 rounded-xl px-2">
              <strong>E-Classroom : Cutting-edge e-learning Platform:</strong>
              <h1>(January 2024 - April 2024)</h1>
              </span>
              
              <div className="flex h-[200px] font-semibold bg-yellow-50 rounded-xl flex-col box-border p-2 gap-2 w-full overflow-scroll srl">
                <li>Developed an innovative e-learning platform for primary to secondary school students</li>
                <li>The platform facilitates live classes, real-time communication between students and teachers</li>
                <li> includes features for accessing previous lectures, submitting homework, and tracking progress</li>
                <li>Implemented strict authentication measures and ensured each class has a separate secure classroom.</li>
              </div>



            </section>):(
            <section className="flex flex-col gap-2 w-full box-border overflow-y-scroll srl p-2">
              <strong className="box-border bg-white w-full z-50  sticky -top-3 p-2">Leveraging Technology</strong>
              <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
                <strong>Client Side</strong>
                <span className="flex items-center w-full justify-around">
                  <span className="flex flex-col">
                    <FaReact/>
                    <strong>React.js</strong> 
                  </span>
                  <span className="flex flex-col">
                    <SiNextdotjs/>
                    <strong>Next.js</strong>

                  </span>
                  <span className="flex flex-col">
                    <SiTailwindcss/>
                    <strong>TailwindCSS</strong>

                  </span>
                </span>
                

              </span>

              {/* Server Side */}
              <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
                <strong>Server Side</strong>
                <span className="flex items-center w-full justify-around">
                  <span className="flex flex-col">
                    <SiGraphql/>
                    <strong>GraphQl</strong>  
                  </span>
                  <span className="flex flex-col">
                    <FaNode/>
                    <strong>Node.js</strong>

                  </span>
                  <span className="flex flex-col">
                    <SiExpress/>
                    <strong>Express.js</strong>

                  </span>
                </span>
                

              </span>

              {/* Database */}
              <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
                <strong>Database</strong>
                <span className="flex items-center w-full justify-around">
                  <span className="flex flex-col">
                    <SiPostgresql/>
                    <strong>PostgreSQL</strong> 
                  </span>

                  <span className="flex flex-col">
                    <SiPrisma/>
                    <strong>Prisma</strong> 
                  </span>
                </span>
                

              </span>

              {/* Others */}
              <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
                <strong>Others</strong>
                <span className="flex items-center w-full justify-around">
                  <span className="flex flex-col">
                    <FaReact/>
                    <strong>WebRTC</strong> 
                  </span>
                  <span className="flex flex-col">
                    <FaReact/>
                    <strong>Socket.io</strong>

                  </span>
                  <span className="flex flex-col">
                    <FaReact/>
                    <strong>Redis</strong>

                  </span>
                </span>
                

              </span>


            </section>)}

        </div>
      </section>

      <section className="w-full box-border p-2  gap-2 items-center min-h-fit  flex justify-around">
      <div className="box-border flex-col sm:flex hidden p-4 bg-white h-full rounded-xl w-[40%]">

<span className="w-full box-border  flex justify-evenly">
  <button className={`${IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={(()=>{setIsDesc(true)})}>Description</button>
  <button className={`${!IsDesc && 'bg-black text-white font-bold scale-105 box-border px-2 py-1  rounded-xl'} font-bold hover:scale-105`} onClick={()=>{setIsDesc(false)}}>Tech Stacks</button>
</span>

{IsDesc ? (
<section className="w-full flex flex-col justify-around min-h-fit h-full box-border p-2">
  <span className="flex flex-col w-full justify-around sticky top-0 box-border bg-yellow-100 rounded-xl px-2">
  <strong>ClickCart : Full-Featured E-commerce Platform:</strong>
  <h1>(March 2024 - May 2024)</h1>
  </span>
  
  <div className="flex h-[200px] font-semibold bg-yellow-50 rounded-xl flex-col box-border p-2 gap-2 w-full overflow-scroll srl">
    <li>Architected and built a scalable, full-stack e-commerce web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Next.js for optimized server-side rendering and static site generation</li>
    <li>Implemented a dynamic product catalog with advanced filtering, sorting, pagination, and search functionality to enable users to easily browse and discover products</li>
    <li>Integrated secure user authentication and authorization using JWT tokens, password hashing, and role-based access control</li>
    <li>Enabled users to manage their accounts, view order history, and update profile information</li>
    <li>Implemented a shopping cart and checkout flow with support for multiple payment gateways and order tracking</li>
    <li>Leveraged React.js and Redux for building a reactive, state-managed user interface with reusable components</li>
    <li>Optimized application performance by implementing server-side rendering with Next.js, code splitting, and lazy loading</li>
    <li>Participated in code reviews, pair programming, and agile ceremonies to ensure code quality, knowledge sharing, and process improvement</li>
  </div>



</section>):(
<section className="flex flex-col gap-2 w-full box-border overflow-y-scroll srl p-2">
  <strong className="box-border bg-white w-full z-50  sticky -top-3 p-2">Leveraging Technology</strong>
  <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
    <strong>Client Side</strong>
    <span className="flex items-center w-full justify-around">
      <span className="flex flex-col">
        <FaReact/>
        <strong>React.js</strong> 
      </span>
      <span className="flex flex-col">
        <SiNextdotjs/>
        <strong>Next.js</strong>

      </span>
      <span className="flex flex-col">
        <SiTailwindcss/>
        <strong>TailwindCSS</strong>

      </span>
    </span>
    

  </span>

  {/* Server Side */}
  <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
    <strong>Server Side</strong>
    <span className="flex items-center w-full justify-around">
      <span className="flex flex-col">
        <strong>REST API</strong>  
      </span>
      <span className="flex flex-col">
        <FaNode/>
        <strong>Node.js</strong>

      </span>
      <span className="flex flex-col">
        <SiExpress/>
        <strong>Express.js</strong>

      </span>
    </span>
    

  </span>

  {/* Database */}
  <span className="flex w-full gap-2 bg-yellow-100 rounded-xl flex-col box-border p-2">
    <strong>Database</strong>
    <span className="flex items-center w-full justify-around">
      <span className="flex flex-col">
        <SiMongodb/>
        <strong>MongoDB</strong> 
      </span>

      <span className="flex flex-col">
        <SiMongoose/>
        <strong>Mongoose</strong> 
      </span>
    </span>
    

  </span>

  


</section>)}

</div>
      <div className=" box-border relative h-full justify-evenly flex flex-col items-center p-2 bg-white  rounded-xl w-full sm:w-[60%]">
          <strong className="box-border flex gap-2 text-3xl font-bold items-center p-2">ClickCart <FaCartShopping /></strong>
         
         <div className="h-full justify-between items-center flex  w-full ">
         <button id="Clickcart" onClick={(event) => slideHandlerLeft(event.currentTarget.id)} ><FaAnglesLeft/></button>
                <span ref={ckSlide} className="w-full box-border flex overflow-x-scroll srl px-2 rounded-xl h-full">
                {Clickcart.map((item,index)=>(
              <img src={item.imglink}  className='w-full shrink-0 ' alt={item.lable} />
          ))}
                </span>
                <button id="Clickcart" onClick={(event) => slideHandlerRight(event.currentTarget.id)} ><FaAnglesRight/></button>
         </div>

          <div className="w-full box-border gap-2  p-2 relative flex justify-around">
            <a target="_blank" rel="noreferrer" href={'https://github.com/vitthalkokare/clickcart'} className="bg-black rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">code</a>
            <a target="_blank" rel="noreferrer" href={'https://github.com/vitthalkokare/clickcart'} className="bg-black rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">live</a>
          </div>



        </div>

        
       
      </section>

     

    </main>
  );
};

export default Project;
