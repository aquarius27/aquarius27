import Link from "next/link";
import React, { useState } from "react";

const Project = () => {

  const [Close,Open] = useState('none');



  function CardHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    Close === 'none' ? Open('flex') : Open('none');
  }

  return (
    <div className=" md:h-fit w-full  drop-shadow-2xl shadow-2xl   flex flex-col  sm:flex-col mx-auto rounded-3xl justify-center   relative items-center    box-border ">
      <div className=" box-border text-white sm:text-xl p-4 mt-4">
        <h1 className="text-2xl sm:text-xl">"Showcasing my skills, experiences, and accomplishments"</h1>
      </div>

      {/* Top */}
      <div className="flex w-full srl    scr md:w-full  sm:w-full overflow-x-scroll p-4   items-center relative   box-border ">
        <div className="flex h-[500px]   w-[30%] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[70%] relative  drop-shadow-lg  rounded-r-none  box-border p-4  sm:h-[400px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black font-bold text-center text-white p-2 absolute top-0 left-0 w-full">
              E-GrandMart
            </h1>
            <br />
            <h1 className="w-full font-medium text-center bg-yellow-300 rounded-md box-border p-1 ">
             MERN Stack
            </h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
            <span className="mx-5 md:text-2xl text-3xl whitespace-nowrap">
              <strong>E-GrandMart</strong>
            </span>
            
          </div>
          <div className="flex box-border md:text-md p-2 justify-around items-center ">
            <button className="bg-yellow-300 font-bold  box-border outline-none p-2 rounded-md">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 outline-none font-bold box-border p-2 rounded-md m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold outline-none box-border p-2 rounded-md">
              <Link href={'https://github.com/vitthalkokare/e-GrandMart'}>Github</Link>
            </button>
          </div>
        </div>

        {/* Center */}
        <div className="flex h-[550px]  w-[40%]  sm:shrink-0  overflow-hidden bg-black flex-col justify-between sm:w-[80%] relative  drop-shadow-lg  box-border p-4  sm:h-[500px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black text-white font-bold text-center p-2 absolute top-0 left-0 w-full">
              E-Classroom
            </h1>
            <br />
            <h1 className="w-full font-medium text-center bg-yellow-300 rounded-md box-border p-1 ">
              FullStack
            </h1>
          </span>
          <div className="flex flex-col text-white justify-center items-center box-border p-2">
            <span className="mx-5 md:text-2xl text-4xl whitespace-nowrap">
              <strong>E-Classroom</strong>
            </span>
           
          </div>
          <div className="flex box-border p-2 justify-around items-center">
          <button className="bg-yellow-300 font-bold outline-none box-border p-2 rounded-md">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 outline-none font-bold box-border  p-2 rounded-md m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold  box-border outline-none p-2 rounded-md">
              <Link href={'https://github.com/vitthalkokare/e-Classroom'}>Github</Link>
            </button>
          </div>
        </div>

        {/* bottom */}

        <div className="flex h-[500px]  w-[30%] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[70%] relative  drop-shadow-lg border-3 rounded-l-none  box-border p-4  sm:h-[400px] rounded-2xl">
          <span>
            <h1 className="box-border text-center font-bold text-white bg-black  p-2 absolute top-0 left-0 w-full">
              ClipCraft
            </h1>
            <br />
            <h1 className="w-full text-center font-medium bg-yellow-300 rounded-md box-border p-1 ">
              WebApp
            </h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
            <span className="mx-5 md:text-2xl text-4xl">
              <strong>ClipCraft</strong>
            </span>
           
          </div>
          <div className="flex box-border p-2 justify-around items-center">
          <button className="bg-yellow-300 font-bold outline-none  box-border p-2 rounded-md">
              Live
            </button>
            <button onClick={CardHandler} className="bg-green-400 outline-none font-bold box-border p-2 rounded-md m-1">
              More
            </button>
            <button className="bg-yellow-300 font-bold outline-none  box-border p-2 rounded-md">
              <Link href={'https://github.com/vitthalkokare/ClipCraft'}>GitHub</Link>
            </button>
          </div>
        </div>
      </div>

      <span className='w-[70%] h-1 box-border absolute bottom-0 bg-white'>.</span>

      <div className="w-[80%] h-[80%] p-4 rounded-3xl sm:w-full sm:h-[60%] top-5 box-border m-2 bg-white drop-shadow-xl absolute " style={{display:`${Close}`}}>
        <button onClick={CardHandler} className="box-border px-4 py-2 absolute right-0 bg-black text-white rounded-full">X</button>
          Description:

      </div>

    </div>
  );
};

export default Project;
