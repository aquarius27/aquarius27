import React from "react";
import { FaReact ,FaJava, FaPython,FaNodeJs, FaGithub, FaHtml5, FaCss3, FaDatabase, FaDocker, FaRadio} from "react-icons/fa6";
import { SiExpress, SiGraphql, SiMongodb, SiMysql, SiNextdotjs,SiPostgresql,SiRedis,SiRedux,SiTailwindcss,SiTypescript } from "react-icons/si";



interface FrontEnd{
  icon: React.ReactNode;
}
const SSkills: React.FC = () =>{



  return (
    <main className="  items-center md:h-fit  flex justify-center flex-col sm:text-lg    mx-auto box-border drop-shadow-2xl shadow-2xl">
      <div className="w-full items-center my-2    flex sm:flex-col">
        <span className="  font-bold  text-2xl text-yellow-500 mx-2 ">Skills:</span>
        <span className="  flex">
        <span className={`skillItem`}><h1>Data Structure</h1></span>
        <span className={`skillItem`}><h1>Problem Solving</h1></span>
        <span className={`skillItem`}><h1>Object Oriented Programing</h1></span>

        </span>
      </div>

      
      {/* Languages */}
      <div className="w-full items-center  my-2    flex sm:flex-col ">
        <span className="  font-bold  text-2xl text-yellow-500 mx-2">Language:</span>
        <span className="  flex">
        <span className={`skillItem`}><FaJava/><strong className="text-lg">Java</strong></span>
        <span className={`skillItem`}><FaPython/><strong className="text-lg">Python</strong></span>
        <span className={`skillItem`}><SiTypescript/><strong className="text-lg">TypeScript</strong></span>
        <span className={`skillItem`}><FaHtml5/><strong className="text-lg">HTML5</strong></span> 
        <span className={`skillItem`}><FaCss3/><strong className="text-lg">CSS3</strong></span>



        </span>
      </div>
{/* Libraries */}
<div className="w-full items-center my-2    flex sm:flex-col">
        <span className="font-bold  text-2xl text-yellow-500 mx-2 ">Libraries:</span>
        <span className="  flex">
        <span className={`skillItem`}><FaReact/><strong className="text-lg">React.js</strong></span>
        <span className={`skillItem`}><SiRedux/><strong className="text-lg">Redux Toolkit</strong></span>

        </span>
      </div>
{/* Frameworks */}
<div className="w-full items-center my-2    flex sm:flex-col ">
        <span className=" font-bold  text-2xl text-yellow-500 mx-2">Framework:</span>
        <span className="  flex">
        <span className={`skillItem`}><FaNodeJs/><strong className="text-lg">Node.js</strong></span>
        <span className={`skillItem`}><SiExpress/><strong className="text-lg">Express.js</strong></span>
        <span className={`skillItem`}><SiNextdotjs/><strong className="text-lg">Next.js</strong></span>
        <span className={`skillItem`}><SiTailwindcss/><strong className="text-lg">TailwindCSS</strong></span>

        </span>
      </div>
{/* Databases */}
<div className="w-full items-center flex sm:flex-col">
        <span className=" font-bold  text-2xl text-yellow-500 mx-2">Database:</span>
        <span className=" flex">
        <span className={`skillItem`}><FaDatabase/><strong className="text-lg">SQL</strong></span>
        <span className={`skillItem`}><SiPostgresql/><strong className="text-lg">PostgresSQL</strong></span>
        <span className={`skillItem`}><SiMongodb/><strong className="text-lg">MongoDB</strong></span>

        </span>
      </div>
{/* Others */}
<div className="w-full items-center my-2    flex sm:flex-col">
        <span className=" font-bold text-2xl text-yellow-500 mx-2">Others:</span>
        <span className=" flex">
        <span className={`skillItem`}><FaGithub/><strong className="text-lg">Git/github</strong></span>
        <span className={`skillItem`}><SiGraphql/><strong className="text-lg">GraphQL</strong></span>
        <span className={`skillItem`}><SiRedis/><strong className="text-lg">Redis</strong></span>
        <span className={`skillItem`}><FaDocker/><strong className="text-lg">Docker</strong></span>


        </span>
      </div>

      <span className='w-[70%] h-1 box-border m-3 bg-white'>.</span>


    </main>
    
  );
};


export default SSkills;
