import React, { useState } from "react";
import Page from "./Page";
import { pages } from "./Dummy";
import { toogleIcon, graphIcon } from "../Asset";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  let eachPage;
  pages.forEach((item) => {
    eachPage = item;
  });

  console.log(eachPage);

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  console.log(sideBarIsOpen);
  const toogleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  console.log(sideBarIsOpen);

  return (
    <div className="flex">
      <div
        className={`sideBar ease-in-out duration-500 transition h-screen hover:scale-95 shadow-xl ring-2 ring-slate-900/5 relative ${
          sideBarIsOpen ? "w-[20%] pt-6" : "w-[10%] pt-10 "
        }`}
      >
        <div
          className={`brandLogo`}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <div className="logo pl-6 ">
            <img src={graphIcon} alt="" />
          </div>

          <h1
            className={` text-black text-2xl font-semibold pl-3 ${
              sideBarIsOpen ? "" : "no"
            }`}
          >
            Metrix
          </h1>
        </div>

        <div
          className={`w-[50px] h-[50px] rounded-lg absolute right-0 top-0 flex items-center justify-center cursor-pointer ${
            sideBarIsOpen ? "" : " right-0"
          }`}
          onClick={toogleSideBar}
        >
          <img src={toogleIcon} alt="" />
        </div>

        <ul className={`py-5`}>
          {pages.map((nav) => (
            <Page
              key={nav.id}
              {...nav}
              navigationPage={`${sideBarIsOpen ? `${nav.pages}` : ""}`}
              eachStyle={nav.style}
              pageLink={nav.pageLink}
            />
          ))}
        </ul>
        {/* <div className=" bg-green-300 rounded-md mx-6 text-center py-2 pl-6 pr-2">
          <div className="flex items-center gap-3 text-black">
            <img className="w-[35px] h-[35px]" src={giftIcon} />
            <h6 className="text-sm font-light">Free Gifts Awaits You</h6>
          </div>
          <div className="flex items-center gap-6 pt-1 text-black">
            <p className=" text-xs font-thin">Upgrade your account</p>
            <img src={chevronIcon} alt="" />
          </div>
        </div> */}
      </div>
      <div className={`${sideBarIsOpen ? "w-[80%]" : "w-[90%]"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
