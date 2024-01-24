import React, { useState, useEffect } from 'react';
import { FaCode,FaUserGraduate,FaLaptopCode,FaShapes, FaEnvelope } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import Education from '@/components/Edu';
import About from './About';
import Contacts from './Contactus';
import Projects from './Projects';


interface NavItems {
  label: string;
  icon: React.ReactNode;
  Compo: React.ReactNode;
}

interface ComponentProps {
  setComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavigateHandle: React.FC<ComponentProps> = ({ setComponent, handleClick }) => {
  const [label,setLebel] = useState(0);
  const [ComponentItem, setComponentItem] = useState<NavItems[]>([
    { label: "Profile", icon: <FaUserTie/>, Compo: <About /> },
    { label: "Projects", icon: <FaShapes/>, Compo: <Projects /> },
    { label: "Edcucation",  icon: <FaUserGraduate/>, Compo: <Education /> },
    { label: "Contact",  icon: <FaEnvelope/>, Compo: <Contacts /> },

  ]);


  useEffect(() => {
    setComponent(ComponentItem[0].Compo);
  }, []);

  const HandleClick = (index: number) => {
    setComponent(ComponentItem[index].Compo);
    setComponentItem((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  return (
    <div className=" box-border flex flex-col w-full  sm:h-8  relative overflow-hidden gap-5 justify-center  items-center text-2xl rounded-3xl">
    <ul  className={`flex flex-col relative sm:flex-row box-border rounded-3xl   bg-green-400  `}>
          {ComponentItem.map((item, index) => (
            <li  onMouseLeave={()=>{setLebel(0)}} onMouseEnter={()=>{setLebel(100)}} className="box-border hover:scale-125  relative p-4" key={index}>
              <button className={`${index} outline-none border-none`} onClick={() => HandleClick(index) } onMouseDown={handleClick}>
                <span   className={`text-2xl `}>{item.icon}</span>
                <span className={`absolute text-lg right-14 top-3 transition-all duration-300 sm:hidden overflow-hidden`} style={{width:`${label}px`}}>{item.label}</span>

              </button>
            </li> 
          ))}
        </ul>
    </div>
  );
};

export default NavigateHandle;