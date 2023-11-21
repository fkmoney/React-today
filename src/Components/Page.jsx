import React from "react";
import Logo from "../logo.svg";

const Page = ({ pageClick, icon, navigationPage, eachStyle }) => {
  return (
    <li
      className="flex items-center gap-[5px] cursor-pointer"
      onClick={pageClick}
    >
      <div
        className={`${eachStyle} flex items-center justify-center ${
          eachStyle || "w-[50px]"
        } h-[50px]`}
      >
        <img src={icon} alt="" className={`w-[90%]`} />
      </div>

      <p className="text-[#fff] text-2xl font-bold">{navigationPage}</p>
    </li>
  );
};

export default Page;
