import React from "react";
import "../src/index.css";
import SideBar from "./Components/SideBar";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Nav />
    </div>
  );
}

export default App;
