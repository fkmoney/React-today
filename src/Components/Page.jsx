import React from "react";
import Logo from "../logo.svg";

const Page = ({ pageClick, icon, navigationPage }) => {
  return (
    <li
      className="flex items-center gap-[5px] cursor-pointer"
      onClick={pageClick}
    >
      <div className="flex items-center justify-center w-[80px] h-[80px]">
        <img src={icon} alt="" className="w-[90%]" />
      </div>

      <p className="text-[#fff] text-2xl font-bold">{navigationPage}</p>
    </li>
  );
};

export default Page;
