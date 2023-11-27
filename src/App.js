import React from "react";
import "../src/index.css";
import SideBar from "./Components/SideBar";
// import Nav from "./Components/Nav";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Customer from "./Components/Customer";
import Order from "./Components/Order";
import Inventory from "./Components/Inventory";
import Conversation from "./Components/Conversation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideBar />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="tunji" element={<Inventory />}></Route>
        <Route path="conversation" element={<Conversation />}></Route>
        {/* <Route path="page" element={<Page />}></Route> */}
      </Route>
    )
  );
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
