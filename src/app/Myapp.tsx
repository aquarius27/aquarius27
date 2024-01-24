"use client";
import { FaChalkboardTeacher, FaList, FaRegUserCircle } from "react-icons/fa";
import { FaCircleNodes, FaEnvelope, FaSackDollar , FaCode, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import Education from "@/components/Edu";
import SSkills from "@/components/Skillss";
import About from "@/components/About";
import Project from "@/components/Projects";
import Contacts from "@/components/Contactus";
import SocilLinks from "@/components/Sociallink";


const Myapp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNav, setisNav] = useState(0);

  const Profile = useRef<HTMLDivElement>(null);
  const Projects = useRef<HTMLDivElement>(null);
  const Skills = useRef<HTMLDivElement>(null);
  const Contactus = useRef<HTMLDivElement>(null);

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsScrolled(true);
    

    if (sectionRef.current !== null) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    isNav === 0 ? setisNav(200) : setisNav(0);

  };

  function handleMenu(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    isNav === 0 ? setisNav(200) : setisNav(0);
  }

 



  return (
    <div className="sm:w-[400px] w-[100%] relative   flex flex-col mx-auto">


      <div
        className={` overflow-hidden sm:right-0 sm:bg-[#0e1630] md:bg-[#0e1630] md:right-0 sm:shadow-3xl sm:drop-shadow-2xl w-[5%] sm:w-0   transition-all duration-300   z-50 h-[100%]  flex flex-col   justify-center box-borde  fixed right-10   `}
        style={{width:`${isNav}px`}}
      > 
      
      <button onMouseDown={handleMenu} className="text-white outline-none border-0 active:scale-110 active:text-red-500 absolute left-5 top-0 box-border p-2 hidden sm:flex text-2xl font-bold"><FaAnglesRight /></button>
        <div className="  box-border flex flex-col text-white w-full overflow-hidden gap-5 sm:p-2 justify-center sm:justify-normal sm:h-[400px] sm:items-start  items-center text-2xl rounded-3xl">
          <button className="m-2 hover:scale-110 hover:text-red-600 flex items-center outline-none" onClick={() => handleButtonClick(Profile)}>
 <FaRegUserCircle />           <span className="hidden sm:m-2 sm:flex text-sm">About</span>
          </button>

          <button className="m-2 hover:scale-110 hover:text-red-600 flex items-center outline-none" onClick={() => handleButtonClick(Projects)}>
            <FaCircleNodes /> <span className="hidden sm:m-2 sm:flex text-sm">Projects</span>
          </button>
          <button className="m-2 hover:scale-110 hover:text-red-600 flex items-center outline-none" onClick={() => handleButtonClick(Skills)}>
            <FaCode /> <span className="hidden sm:m-2 sm:flex text-sm">Skills</span>
          </button>
          <button className="m-2 hover:scale-110 hover:text-red-600 flex items-center outline-none" onClick={() => handleButtonClick(Contactus)}>
            <FaEnvelope /> <span className="hidden sm:m-2 sm:flex text-sm">ContactUs</span>
          </button>
        </div>


      </div>
      <div className="fixed bg-[#0e1630] sm:z-30 z-50 items-center top-0 md:flex w-full sm:flex hidden">
        <span className="relative left-0 top-0 drop-shadow-4xl"><h1 className="font-bold box-border p-2 text-white text-xl"><strong className="text-green-500">V</strong>itthal <strong className="text-green-500">K</strong>okare</h1></span>
        <button onMouseDown={handleMenu} className="text-white outline-none border-0 hover:scale-110 hover:text-green-500 absolute right-8 box-border p-2  text-2xl font-bold"><FaAnglesLeft /></button>
        
        </div>

    

      <header
        ref={Profile}
        className="box-border justify-around h-screen  sm:h-fit md:h-fit   md:flex-col  flex sm:flex-col md:w-full relative  w-[80%] sm:w-full   mx-auto  "
        
      >
        <About/>
       
      </header>

      <section
        ref={Projects}
        className="relative w-[80%] md:w-full h-screen  sm:h-fit md:h-fit  sm:w-full mx-auto box-border   p-2 flex-col flex  items-center"
      >
        <Project/>
        

       
      </section>

      <section ref={Skills}  className="md:w-full h-screen  w-[80%]  sm:h-fit md:h-fit flex items-center mx-auto relative">
        
        <SSkills/>
      </section>
      <Education/>

      <section ref={Contactus} className="w-[80%] h-screen md:w-full  sm:h-fit md:h-fit  flex flex-col justify-center items-center mx-auto">
        <Contacts/>
      </section>

      <footer className=" w-[80%] mx-auto text-white flex text-sm opacity-40 justify-center items-center">
        <span className="w-full text-center"> Developed by Vitthal Kokare. <br /> © Copyright 2024 - All right reserved.

</span>
      </footer>

    </div>
  );
};

export default Myapp;
