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
    <div className="sm:w-[400px] w-[100%] relative    flex flex-col mx-auto">

      <span className="fixed sm:hidden  right-5 md:hidden flex flex-col justify-center items-center h-screen">
      <Compo pItem={[
        {btnIcon:<FaRegUserCircle/>, label:'About',onclick() {handleButtonClick(Profile)}},
        {btnIcon:<FaCircleNodes/>, label:'Projects',onclick() {handleButtonClick(Projects)}},
        {btnIcon:<FaCode/>, label:'Skills',onclick() {handleButtonClick(Skills)}},
        {btnIcon:<FaEnvelope/>, label:'Aboutus',onclick() {handleButtonClick(Contactus)}},
    
      ]}/>
      </span>

      <span className="fixed bg-[#111a36] overflow-hidden items-center h-screen transition-all duration-300 fade z-50 hidden justify-center drop-shadow-2xl shadow-2xl sm:flex md:flex right-0"
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


      <div className="fixed bg-[#0e1630] h-[60px] z-40  items-center top-0 md:flex w-full sm:flex hidden">
        <span className="absolute left-2 top-0 drop-shadow-4xl">
          <h1 className="font-bold box-border p-2 text-white text-xl">
            <strong className="text-green-500">V</strong>itthal{" "}
            <strong className="text-green-500">K</strong>okare
          </h1>
        </span>
        <button
          onMouseDown={handleMenu}
          className="text-white outline-none border-0 hover:scale-110 hover:text-green-500 absolute right-8 box-border p-2  text-2xl font-bold"
        >
          <FaAnglesLeft />
        </button>
        
      </div>

      <header
        ref={Profile}
        className="box-border justify-around h-screen md:w-[80%]  sm:h-fit md:h-fit   md:flex-col  flex sm:flex-col  relative  w-[80%] sm:w-full   mx-auto  "
      >
        <About />
      </header>

      <section
        ref={Projects}
        className="relative w-[80%] md:w-[100%]  h-screen   sm:h-fit md:h-fit  sm:w-full mx-auto box-border   p-2 flex-col flex  items-center"
      >
        <Project />
      </section>

      <section
        ref={Skills}
        className="md:w-full h-screen  w-[80%]  sm:h-fit md:h-fit flex items-center mx-auto relative"
      >
        <SSkills />
      </section>
      <Education />

      <section
        ref={Contactus}
        className="w-[80%] h-screen md:w-full  sm:h-fit md:h-fit  flex flex-col justify-center items-center mx-auto"
      >
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
