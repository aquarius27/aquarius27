"use client";
import { FaChalkboardTeacher, FaRegUserCircle } from "react-icons/fa";
import { FaCircleNodes, FaEnvelope, FaSackDollar , FaCode } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import Education from "@/components/Edu";
import SSkills from "@/components/Skillss";
import About from "@/components/About";
import Project from "@/components/Projects";
import Contacts from "@/components/Contactus";


const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNav, setisNav] = useState(0);

  const Profile = useRef<HTMLDivElement>(null);
  const Projects = useRef<HTMLDivElement>(null);
  const Skills = useRef<HTMLDivElement>(null);
  const Contactus = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 10) {
        setisNav(0);
      } else {
        setisNav(5);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsScrolled(true);
    if (sectionRef.current !== null) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sm:w-[400px] w-[100%] relative   flex flex-col mx-auto">
      <div
        className={`sm:hidden w-[10%] overflow-hidden    transition-all duration-300   z-10 h-[100%]  flex flex-col   justify-center box-borde  fixed right-0   `}

      >
        <div className=" box-border flex flex-col text-white w-full overflow-hidden gap-5 justify-center  items-center text-2xl rounded-3xl">
          <button className="m-2" onClick={() => handleButtonClick(Profile)}>
            <FaRegUserCircle />
          </button>

          <button className="m-2" onClick={() => handleButtonClick(Projects)}>
            <FaCircleNodes />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Skills)}>
            <FaCode />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Contactus)}>
            <FaEnvelope />
          </button>
        </div>
      </div>

      <header
        ref={Profile}
        className="box-border justify-around md:h-fit h-screen  md:flex-col  flex sm:flex-col relative  w-[80%] sm:w-full   mx-auto  "
        
      >
        <About/>
       
      </header>

      <section
        ref={Projects}
        className="relative w-[90%] md:h-fit h-screen  sm:w-full mx-auto box-border   p-2 flex-col flex  items-center"
      >
        <Project/>
        

       
      </section>

      <section ref={Skills} className=" md:h-fit h-screen w-[90%] flex items-center mx-auto relative">
        
        <SSkills/>
      </section>
      <Education/>

      <section ref={Contactus} className="w-[90%] md:h-fit h-screen flex flex-col justify-center items-center mx-auto">
        <Contacts/>
      </section>

      <footer className=" text-white flex text-sm opacity-40 justify-center items-center">
        <span>© Copyright 2024 - Developed by Vitthal Kokare. All right reserved.

</span>
      </footer>

    </div>
  );
};

export default page;
