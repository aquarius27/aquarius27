import Link from "next/link";
import React, { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { FaChalkboardTeacher, FaNode, FaReact, FaShopify } from "react-icons/fa";
import { FaAnglesLeft,
  FaAnglesRight,
  FaCartShopping,} from "react-icons/fa6";
import { SiExpress, SiGraphql, SiMongodb, SiMongoose, SiNextdotjs, SiPostgresql, SiPrisma, SiRedis, SiSocketdotio, SiTailwindcss, SiWebrtc } from "react-icons/si";

import Image, { StaticImageData } from 'next/image'
import ec1  from '../../public/eclassroom.png'
import ec2  from '../../public/eclassroom1.png'
import ck1  from '../../public/clickcart.png'
import ck2  from '../../public/clickcart2.png'
import ck3  from '../../public/clickcart3.png'
import Card from "./Card";
import DescComp, { DescCompProps } from "./DescComp";






type heroSlideProps = {
  imglink: StaticImageData
  lable: string
}



const Project = () => {

  const [Close,Open] = useState('none');
  const [IsDesc,setIsDesc] = useState(true);
  const [Info,setInfo] = useState<ReactNode>();
  const [isInfo,setIsInfo] = useState(false);
  


   const Eclassroom:heroSlideProps[] = [
    {imglink:ec1,lable:'img1'},
    {imglink:ec2,lable:'img2'},
    
  ]
  const Clickcart:heroSlideProps[] = [
    {imglink:ck3,lable:'img3'},
    {imglink:ck2,lable:'img2'},
    {imglink:ck1,lable:'img1'},


    
  ]

  

  const ecSlide = useRef<HTMLDivElement | null>(null);
  const ckSlide = useRef<HTMLDivElement | null>(null);

const EcDesc:DescCompProps  = {
  compCss:"",
  Title:"E-Classroom : Cutting-edge e-learning Platform:",
  Date:"January 2024 - April 2024",
  descPoint:[
              "Developed an innovative e-learning platform for primary to secondary school students",
              "The platform facilitates live classes, real-time communication between students and teachers",
                "includes features for accessing previous lectures, submitting homework, and tracking progress",
              "Implemented strict authentication measures and ensured each class has a separate secure classroom"
  
  
            ],
  tsItem:[
    {tsHeading:"Client Side",item:[
      {label:"React.js",icon:<FaReact/>},
      {label:"Next.js",icon:<SiNextdotjs/>},
      {label:"TailwindCSSs",icon:<SiTailwindcss/>} 
    ]},

    {tsHeading:"Server Side",item:[
      {label:"GraphQL",icon:<SiGraphql/>},
      {label:"Node.js",icon:<FaNode/>},
      {label:"Expose.js",icon:<SiExpress/>}
    ]},

    {tsHeading:"Database",item:[
      {label:"PostgreSQL",icon:<SiPostgresql/>},
    ]},
  {tsHeading:"Others",item:[
    {label:"Prisma",icon:<SiPrisma/>},
    {label:"WebRTC",icon:<SiWebrtc/>},
    {label:"Socket.io",icon:<SiSocketdotio/>},
    {label:"Redis",icon:<SiRedis/>},
  ]}
  
  ]
}

const CkDesc:DescCompProps  = {
  compCss:"",
  Title:"ClickCart : Full-Featured E-commerce Platform:",
  Date:"March 2024 - May 2024",
  descPoint:[
    "Architected and built a scalable, full-stack e-commerce web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Next.js for optimized server-side rendering and static site generation",
    "Implemented a dynamic product catalog with advanced filtering, sorting, pagination, and search functionality to enable users to easily browse and discover products",
    "Integrated secure user authentication and authorization using JWT tokens, password hashing, and role-based access control",
    "Enabled users to manage their accounts, view order history, and update profile information",
    "Implemented a shopping cart and checkout flow with support for multiple payment gateways and order tracking",
    "Leveraged React.js and Redux for building a reactive, state-managed user interface with reusable components",
    "Optimized application performance by implementing server-side rendering with Next.js, code splitting, and lazy loading",
    "Participated in code reviews, pair programming, and agile ceremonies to ensure code quality, knowledge sharing, and process improvement",
  
            ],
  tsItem:[
    {tsHeading:"Client Side",item:[
      {label:"React.js",icon:<FaReact/>},
      {label:"Next.js",icon:<SiNextdotjs/>},
      {label:"TailwindCSSs",icon:<SiTailwindcss/>} 
    ]},

    {tsHeading:"Server Side",item:[
      {label:"REST API",icon:<SiGraphql/>},
      {label:"Node.js",icon:<FaNode/>},
      {label:"Expose.js",icon:<SiExpress/>}
    ]},

    {tsHeading:"Database",item:[
      {label:"MongoDB",icon:<SiMongodb/>},
      {label:"Mongoose",icon:<SiMongoose/>},
    ]},
  
  ]
}



 
  const handleDesc = useCallback((id:string)=>{
    if(id === "Eclassroom"){
      setIsInfo(true);
      setInfo(              <DescComp compCss="flex w-full" Title={EcDesc.Title} Date={EcDesc.Date} descPoint={EcDesc.descPoint} tsItem={EcDesc.tsItem}/>           )
    }
    else if(id === "Clickcart"){
      setIsInfo(true);
      setInfo(<DescComp compCss="flex w-full" Title={CkDesc.Title} Date={CkDesc.Date} descPoint={CkDesc.descPoint} tsItem={CkDesc.tsItem}/>)
    }
    console.log(id);
  },[])

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
                {Eclassroom.map((item,index)=>(
              <img src={item.imglink.src}  className='w-full shrink-0 ' alt={item.lable} />
          ))}
                </div>
                <button id="Eclassroom" onClick={(event) => slideHandlerRight(event.currentTarget.id)} ><FaAnglesRight/></button>
         </div>

          <div className="w-full box-border gap-2 p-2    relative flex justify-around">
            <a href="https://github.com/vitthalkokare/e-Classroom" target="_blank" rel="noreferrer" className="bg-black  rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">code</a>
            <button id="Eclassroom" onClick={(event)=>{handleDesc(event.currentTarget.id)}} className="bg-blue-200 sm:hidden rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">More</button>
            <a href="https://github.com/vitthalkokare/e-Classroom" target="_blank" rel="noreferrer" className="bg-black  rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">live</a>
          </div>



        </div>

              <DescComp compCss="hidden" Title={EcDesc.Title} Date={EcDesc.Date} descPoint={EcDesc.descPoint} tsItem={EcDesc.tsItem}/>     

      </section>

      <section className="w-full box-border p-2  gap-2 items-center min-h-fit  flex justify-around">
      <DescComp compCss="hidden" Title={CkDesc.Title} Date={CkDesc.Date} descPoint={CkDesc.descPoint} tsItem={CkDesc.tsItem}/>

       <div className=" box-border relative h-full justify-evenly flex flex-col items-center p-2 bg-white  rounded-xl w-full sm:w-[60%]">
          <strong className="box-border flex gap-2 text-3xl font-bold items-center p-2">ClickCart <FaCartShopping /></strong>

         <div className="h-full justify-between items-center flex  w-full ">
         <button id="Clickcart" onClick={(event) => slideHandlerLeft(event.currentTarget.id)} ><FaAnglesLeft/></button>
                <span ref={ckSlide} className="w-full box-border flex overflow-x-scroll srl px-2 rounded-xl h-full">
                {Clickcart.map((item,index)=>(
              <img src={item.imglink.src}  className='w-full shrink-0 ' alt={item.lable} />
          ))}
                </span>
                <button id="Clickcart" onClick={(event) => slideHandlerRight(event.currentTarget.id)} ><FaAnglesRight/></button>
         </div>

          <div className="w-full box-border gap-2  p-2 relative flex justify-around">
            <a target="_blank" rel="noreferrer" href={'https://github.com/vitthalkokare/clickcart'} className="bg-black rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">code</a>
            <button id="Clickcart" onClick={(event)=>{handleDesc(event.currentTarget.id)}} className="bg-blue-200 sm:hidden rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">More</button>
            <a target="_blank" rel="noreferrer" href={'https://github.com/vitthalkokare/clickcart'} className="bg-black rounded-lg text-white font-bold box-border px-10 py-1 hover:scale-105">live</a>
          </div>



        </div>

        
       
      </section>

      

     {isInfo && <Card closebtn={()=>{setIsInfo(false)}} children={<>{Info}</>}/>}

    </main>
  );
};

export default Project;
