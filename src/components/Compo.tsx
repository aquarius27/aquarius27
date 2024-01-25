import React, { ReactNode } from "react";

interface Item {
  pItem: {
    btnIcon: ReactNode;
    label: string;
    onclick: (ref: any) => void;
  }[];
}

const giveMe = () => {};

const Compo: React.FC<Item> = ({ pItem }) => {
  return (
    <div className=" box-border  h-fit w-fit p-4    text-white gap-5 sm:p-2      text-2xl rounded-3xl">
      {pItem.map((item, index) => (
        <button key={index}
          className="w-full relative my-8 hover:scale-110 hover:text-red-600 flex justify-around items-center outline-none"
          onClick={item.onclick}
        >
          <span className=" md:flex w-[50%]  hidden  text-start  mx-2 sm:flex text-sm">{item.label}</span>
          {item.btnIcon}
          
        </button>
      ))}
    </div>
  );
};

export default Compo;
