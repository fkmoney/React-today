import React, { useState } from "react";
import Logo from "../logo.svg";
import Page from "./Page";
// import Logo from "../logo.svg";
import { pages } from "./Dummy";
import { toogleIcon } from "../Asset";

const SideBar = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  console.log(sideBarIsOpen);
  const toogleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  console.log(sideBarIsOpen);

  return (
    <div
      className={`sideBar ${sideBarIsOpen ? "w-[20%]" : "w-[5%]"} relative `}
    >
      <div
        className="brandLogo"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <div className="logo" style={{}}>
          <img src={Logo} alt="" />
        </div>

        <h1>Metrix</h1>
      </div>

      <div
        className="w-[50px] h-[50px] border-2 border-red-500 rounded-lg absolute right-0 top-0 flex items-center justify-center cursor-pointer"
        onClick={toogleSideBar}
      >
        <img src={toogleIcon} alt="" />
      </div>

      <ul>
        {pages.map((nav) => (
          <Page
            key={nav.id}
            {...nav}
            navigationPage={nav.pages}
            eachStyle={nav.style}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
