import React from "react";
import Logo from "../logo.svg";
import Page from "./Page";
// import Logo from "../logo.svg";
import { pages } from "./Dummy";

const SideBar = () => {
  return (
    <div className="sideBar">
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

      <ul>
        {pages.map((nav) => (
          <Page key={nav.id} {...nav} navigationPage={nav.pagesg} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
