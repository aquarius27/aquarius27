import React, { ReactNode, useState } from "react";

interface Item {
  pItem: {
    btnIcon: ReactNode;
    label: string;
    onclick: (ref: any) => void;
  }[];
}

const giveMe = () => {};

const Compo: React.FC<Item> = ({ pItem }) => {
  const [Label,setLabel] = useState(0);
  return (
    <div onMouseLeave={()=>{setLabel(0)}} onMouseEnter={()=>{setLabel(60)}}  className=" box-border  h-fit w-fit p-4 relative z-50   text-white gap-5 sm:p-2      text-2xl rounded-3xl">
      {pItem.map((item, index) => (
        <button key={index}
          className="w-full relative my-8 hover:scale-110 hover:text-red-600 flex justify-around items-center outline-none"
          onClick={item.onclick}
        >
        <span  className={``} >{item.btnIcon}</span>

          <span className={`   text-start z-50 mx-2 transition-all duration-300 text-sm`} style={{width:`${Label}%`,overflow:"hidden"}}>{item.label}</span>
          
        </button>
      ))}
    </div>
  );
};

export default Compo;
