import React, { useState } from "react";
// import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Page = ({ pageClick, icon, navigationPage, eachStyle, pageLink }) => {
  return (
    <Link to={pageLink}>
      <li
        className={`${eachStyle} flex items-center font-sans gap-[8px] cursor-pointer pl-5 mx-5 my-2`}
        onClick={pageClick}
      >
        <div className={`flex items-center justify-center w-[50px] h-[50px]`}>
          <img src={icon} alt="" className={`w-[100] h-[100]`} />
        </div>

        <p
          className={`${eachStyle} text-sm font-normal
          ${eachStyle ? "" : " hover:text-blue-300 text-slate-600"}`}
        >
          {navigationPage}
        </p>
      </li>
    </Link>
  );
};

export default Page;
