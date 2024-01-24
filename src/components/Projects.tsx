import Link from "next/link";
import React, { useState } from "react";

const Project = () => {

  const [Close,Open] = useState('none');



  function CardHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    Close === 'none' ? Open('flex') : Open('none');
  }

  return (
    <div className="w-[90%] h-full md:h-fit  drop-shadow-2xl shadow-2xl sm:w-[100%] md:w-[100%] flex flex-col  sm:flex-col mx-auto rounded-3xl justify-center   relative items-center    box-border ">
      <div className=" box-border text-white sm:text-xl p-4 text-2xl">
        <h1 className="text-2xl">"Showcasing my skills, experiences, and accomplishments"</h1>
      </div>

      {/* Top */}
      <div className="flex w-[80%] srl    scr md:w-full  sm:w-full overflow-x-scroll p-4   items-center relative   box-border ">
        <div className="flex   w-[50vw] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[70%] relative  drop-shadow-lg  rounded-r-none  box-border p-4 h-[400px] sm:h-[400px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black font-bold text-center text-white p-2 absolute top-0 left-0 w-full">
              E-GrandMart
            </h1>
            <br />
            <h1 className="w-full font-medium text-center bg-yellow-300 rounded-xl box-border p-1 ">
             MERN Stack
            </h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
            <span className="mx-5 text-3xl whitespace-nowrap">
              <strong>E-GrandMart</strong>
            </span>
            
          </div>
          <div className="flex justify-around items-center ">
            <button className="bg-yellow-300 font-bold  box-border p-2 rounded-xl">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 font-bold box-border p-2 rounded-xl m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold box-border p-2 rounded-xl">
              <Link href={'https://github.com/vitthalkokare/e-GrandMart'}>Github</Link>
            </button>
          </div>
        </div>

        {/* Center */}
        <div className="flex   w-[50vw] md:w-[90%] sm:shrink-0  overflow-hidden bg-black flex-col justify-between sm:w-[80%] relative  drop-shadow-lg  box-border p-4 h-[450px] sm:h-[500px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black text-white font-bold text-center p-2 absolute top-0 left-0 w-full">
              E-Classroom
            </h1>
            <br />
            <h1 className="w-full font-medium text-center bg-yellow-300 rounded-xl box-border p-1 ">
              FullStack
            </h1>
          </span>
          <div className="flex flex-col text-white justify-center items-center box-border p-2">
            <span className="mx-5 text-4xl whitespace-nowrap">
              <strong>E-Classroom</strong>
            </span>
           
          </div>
          <div className="flex justify-around items-center">
          <button className="bg-yellow-300 font-bold  box-border p-2 rounded-xl">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 font-bold box-border p-2 rounded-xl m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold  box-border p-2 rounded-xl">
              <Link href={'https://github.com/vitthalkokare/e-Classroom'}>Github</Link>
            </button>
          </div>
        </div>

        {/* bottom */}

        <div className="flex   w-[50vw] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[70%] relative  drop-shadow-lg border-3 rounded-l-none  box-border p-4 h-[400px] sm:h-[400px] rounded-2xl">
          <span>
            <h1 className="box-border text-center font-bold text-white bg-black  p-2 absolute top-0 left-0 w-full">
              ClipCraft
            </h1>
            <br />
            <h1 className="w-full text-center font-medium bg-yellow-300 rounded-xl box-border p-1 ">
              WebApp
            </h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
            <span className="mx-5 text-4xl">
              <strong>ClipCraft</strong>
            </span>
           
          </div>
          <div className="flex justify-around items-center">
          <button className="bg-yellow-300 font-bold  box-border p-2 rounded-xl">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 font-bold box-border p-2 rounded-xl m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold  box-border p-2 rounded-xl">
              <Link href={'https://github.com/vitthalkokare/ClipCraft'}>GitHub</Link>
            </button>
          </div>
        </div>
      </div>

      <span className='w-[70%] h-1 box-border absolute bottom-0 bg-white'>.</span>

      <div className="w-[80%] h-[80%] rounded-3xl sm:w-full sm:h-[60%] top-5 box-border m-2 bg-green-600 absolute " style={{display:`${Close}`}}>
        <button onClick={CardHandler} className="box-border px-4 py-2 absolute right-0 bg-black text-white rounded-full">X</button>
        good

      </div>

    </div>
  );
};

export default Project;
