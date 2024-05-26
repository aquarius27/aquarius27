"use client";
import { FaRegUserCircle } from "react-icons/fa";
import {
  FaCircleNodes,
  FaEnvelope,
  FaCode,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import React, { useRef, useState } from "react";
import Education from "@/components/Edu";
import SSkills from "@/components/Skillss";
import About from "@/components/About";
import Project from "@/components/Projects";
import Contacts from "@/components/Contactus";
import Compo from "@/components/Compo";

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

  function handleMenu(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    isNav === 0 ? setisNav(200) : setisNav(0);

  }

 

  return (
    <div className="flex  w-full box-border p-4 relative min-w-[600px] flex-col">

      <span className="fixed sm:flex  left-3 hidden  flex-col justify-center items-center h-screen">
      <Compo pItem={[
        {btnIcon:<FaRegUserCircle/>, label:'About',onclick() {handleButtonClick(Profile)}},
        {btnIcon:<FaCircleNodes/>, label:'Projects',onclick() {handleButtonClick(Projects)}},
        {btnIcon:<FaCode/>, label:'Skills',onclick() {handleButtonClick(Skills)}},
        {btnIcon:<FaEnvelope/>, label:'Aboutus',onclick() {handleButtonClick(Contactus)}},
    
      ]}/>
      </span>

      <span className="fixed bg-[#111a36] overflow-hidden items-center h-full transition-all duration-300 fade z-50 flex justify-center drop-shadow-2xl shadow-2xl sm:hidden  right-0"
      style={{width:`${isNav}px`}}
      >
      <button
          onMouseDown={handleMenu}
          className="text-white outline-none border-0 hover:scale-110 hover:text-green-500 absolute left-3  top-0 box-border p-2  text-2xl font-bold"
        >
          <FaAnglesRight />
        </button>
      <Compo pItem={[
        {btnIcon:<FaRegUserCircle/>, label:'About',onclick() {handleButtonClick(Profile)}},
        {btnIcon:<FaCircleNodes/>, label:'Projects',onclick() {handleButtonClick(Projects)}},
        {btnIcon:<FaCode/>, label:'Skills',onclick() {handleButtonClick(Skills)}},
        {btnIcon:<FaEnvelope/>, label:'Aboutus',onclick() {handleButtonClick(Contactus)}},
    
      ]}/>
      </span>


      <div className="fixed bg-[#0e1630] h-[60px] z-40  items-center top-0 flex w-full ">
        <span className="absolute left-2 top-0 drop-shadow-4xl">
          <h1 className="font-bold box-border p-2 text-white text-xl">
            <strong className="text-green-500">V</strong>itthal{" "}
            <strong className="text-green-500">K</strong>okare
          </h1>
        </span>
        <button
          onMouseDown={handleMenu}
          className="text-white sm:hidden flex outline-none border-0 hover:scale-110 hover:text-green-500 absolute right-8 box-border p-2  text-2xl font-bold"
        >
          <FaAnglesLeft />
        </button>
        
      </div>

<section ref={Profile}>
<About />

</section>
      

     
        <section ref={Projects}> 
        <Project />

        </section>

        <section ref={Skills}>
        <SSkills />

        </section>

        
        <Education />
        <section ref={Contactus}>
        <Contacts />

        </section>
     

      

      <footer className=" w-[80%] mx-auto text-white flex text-sm opacity-40 justify-center items-center">
        <span className="w-full text-center">
          {" "}
          Developed by Vitthal Kokare. <br /> © Copyright 2024 - All right
          reserved.
        </span>
      </footer>
    </div>
  );
};

export default Myapp;
