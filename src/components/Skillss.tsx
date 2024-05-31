import React, { ReactNode } from "react";
import { FaReact ,FaJava, FaPython,FaNodeJs, FaGithub, FaHtml5, FaCss3, FaDatabase, FaDocker, FaRadio} from "react-icons/fa6";
import { SiExpress, SiGraphql, SiJavascript, SiMongodb, SiMysql, SiNextdotjs,SiPostgresql,SiPostman,SiRedis,SiRedux,SiTailwindcss,SiTypescript, SiVisualstudiocode } from "react-icons/si";
import SkillsComp, { skillsProps } from "./skillsComp";




interface FrontEnd{
  icon: React.ReactNode;
}
const SSkills: React.FC = () =>{

  const Languages:skillsProps[] = [
    {label:"Java",icon:<FaJava/>},
    {label:"Node.js",icon:<FaNodeJs/>},
    {label:"Typescript",icon:<SiTypescript/>},
    {label:"Javascript",icon:<SiJavascript/>},

    
  ];

  const Frontend:skillsProps[] = [
    {label:"React.js",icon:<FaReact/>},
    {label:"HTML5",icon:<FaHtml5/>},
    {label:"CSS3",icon:<FaCss3/>},
    {label:"TailwindCSS",icon:<SiTailwindcss/>},

  ];

  const Libraries:skillsProps[] = [
    {label:"Redux Toolkit",icon:<SiRedux/>},

  ];
  const Frameworks:skillsProps[] = [
    {label:"Express.js",icon:<SiExpress/>},
    {label:"Next.js",icon:<SiNextdotjs/>},

    

  ]
  const Database:skillsProps[] = [
    {label:"SQL",icon:<SiMysql/>},
    {label:"PostgreSQL",icon:<SiPostgresql/>},
    {label:"MongoDB",icon:<SiMongodb/>},

  ]
  

  const Devtools:skillsProps[] = [
    {label:"Git",icon:<FaGithub/>},
    {label:"Visual Studio Code",icon:<SiVisualstudiocode/>},
    {label:"Postman",icon:<SiPostman/>},
    {label:"Docker",icon:<FaDocker/>},


  ]

  const Skills:skillsProps[] = [
    {label:"REST API & GraphQl"},
    {label:"Object Oriented Programming"},
    {label:"Data Structures and Algorithms"},
    {label:"Problem Solving"}




  ]



  return (
   <main className="flex mx-auto flex-col justify-center relative box-border p-2 w-[90%]">
    <span className="flex w-full justify-center items-center box-border p-2 text-2xl text-yellow-50">
      <strong>Uncover The Expertise that shape my knowledge</strong>
    </span>
    <section className="grid relative sm:grid-cols-2 w-full gap-2 grid-cols-1 box-border p-2">
    
      <SkillsComp children={[{itemarr:Skills,compTag:"Skills"},{itemarr:Frontend,compTag:"Frontend"},{itemarr:Languages,compTag:"Languages"},{itemarr:Libraries,compTag:"Libraries"},{itemarr:Frameworks,compTag:"Frameworks"},{itemarr:Database,compTag:"Database"},{itemarr:Devtools,compTag:"Dev Tools"}]}      
       
      />


          


    </section>

   </main>
    
  );
};


export default SSkills;
