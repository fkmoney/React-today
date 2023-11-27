import React from "react";
import {
  bagIcons,
  folderIcon,
  graphsIcon,
  homeIcon,
  itemIcon,
  itemsIcon,
  notificationIcon,
  profileIcon,
  userIcon,
} from "../Asset";

const Dashboard = () => {
  return (
    <main className=" h-screen">
      <div className="flex justify-between px-5 py-2 shadow-sm ring-1 ring-slate-200 ">
        <div>
          <h1 className=" font-normal text-base font-sans">Dashboard</h1>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <li>
              <select className="bg-[#f7e9d0] max-sm:hidden px-5 py-2 rounded-md font-thin text-slate-700 text-sm font-serif">
                <option selected>Nanny's Shop</option>
                <option></option>
                <option></option>
              </select>
            </li>
            <li>
              <img
                src={notificationIcon}
                width={25}
                height={25}
                alt="notification"
              />
            </li>
            <li>
              <img src={profileIcon} width={30} height={30} alt="profile" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-1 px-5 py-1 shadow-sm ring-1 ring-slate-200">
        <img src={homeIcon} alt="Home" />
        <p className="text-sm font-light">/ Dashboard</p>
      </div>
      <section className=" bg-[#F4F5FA] max-sm:px-1 pt-2 px-5 h-[87%]">
        <div className="flex max-sm:flex-col gap-6">
          <div className=" bg-white h-32 max-sm:w-[95%] w-[30%] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <img
                className=" bg-blue-300 rounded-xl p-2"
                src={graphsIcon}
                width={35}
                alt="Graph"
                height={35}
              />
              <select className=" text-textGray bg-white text-xs font-serif">
                <option selected>This week</option>
                <option></option>
              </select>
            </div>
            <div className=" flex justify-between mt-5">
              <div>
                <p className=" text-textGray text-xs">Sales</p>
                <h1 className="text-sm font-bold pt-1">#4,000,000.00</h1>
              </div>
              <div>
                <p className=" text-textGray text-xs">Volume</p>
                <h1 className="text-sm font-bold pt-1">
                  450
                  <span className=" text-xs font-medium text-[green]">
                    +20.00%
                  </span>
                </h1>
              </div>
              <div>
                <p className="hidden">Home</p>
              </div>
            </div>
          </div>
          <div className=" bg-white h-32 max-sm:w-[95%] w-[30%] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <img
                className=" bg-[wheat] rounded-xl p-2"
                src={userIcon}
                alt=""
                width={35}
                height={35}
              />
              <select className=" text-textGray bg-white text-xs font-serif">
                <option selected>This week</option>
                <option></option>
              </select>
            </div>
            <div className=" flex justify-between mt-5">
              <div>
                <p className=" text-textGray text-xs">Customer</p>
                <h1 className="text-sm font-bold pt-1">
                  1,250
                  <span className="text-xs text-[green] font-medium">
                    +15.80%
                  </span>
                </h1>
              </div>
              <div>
                <p className=" text-textGray text-xs">Active</p>
                <h1 className="text-sm font-bold pt-1">
                  1,180
                  <span className=" text-xs text-[green] font-medium">
                    +85%
                  </span>
                </h1>
              </div>
              <div>
                <p className="hidden">Home</p>
              </div>
            </div>
          </div>
          <div className=" bg-white h-32 max-sm:w-[95%] w-[35%] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <img
                className=" bg-[wheat] rounded-xl p-2"
                src={bagIcons}
                alt=""
                width={35}
                height={35}
              />
              <select className=" text-textGray bg-white text-xs font-serif">
                <option selected>This week</option>
                <option></option>
              </select>
            </div>
            <div className=" flex justify-between mt-5">
              <div>
                <p className=" text-textGray text-xs">All Order</p>
                <h1 className="text-sm font-bold pt-1">450</h1>
              </div>
              <div>
                <p className=" text-textGray text-xs">Pending</p>
                <h1 className="text-sm font-bold pt-1">5</h1>
              </div>
              <div>
                <p className=" text-textGray text-xs">Completed</p>
                <h1 className="text-sm font-bold pt-1">445</h1>
              </div>
              <div>
                <p className="hidden">hello</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-between max-sm:flex-col max-sm:gap-4  mt-2">
          <div className="bg-white rounded-2xl max-sm:w-[90%] max-sm:m-auto w-[30%] h-44 p-3">
            <div className=" flex justify-between items-center">
              <p>Marketing</p>
              <select className=" font-light bg-white text-sm font-serif">
                <option selected>Last & days</option>
                <option></option>
                <option></option>
              </select>
            </div>
            {/* <div className=" w-full h-[90%] relative">
              <div className=" w-full h-full relative"></div>
            </div> */}
          </div>
          <div className=" grid grid-rows-3 max-sm:grid-rows-1 max-sm:m-auto max-sm:w-[90%] max-sm:gap-2 gap-1.5 w-[30%]">
            <div className=" bg-blue-500 rounded-2xl w-[100%] h-24 p-1 px-3 text-white">
              <div className=" flex justify-between items-center">
                <div>
                  <img
                    className=" bg-white rounded-xl p-2"
                    src={folderIcon}
                    width={35}
                    height={35}
                    alt=""
                  />
                </div>
                <select className=" text-textGray bg-white text-xs p-1 font-serif">
                  <option selected>This week</option>
                  <option></option>
                  <option></option>
                </select>
              </div>

              <div className=" flex justify-between mt-3">
                <div>
                  <p className="text-xs">All Products</p>
                  <h1 className="text-sm font-bold pt-1">45</h1>
                </div>
                <div>
                  <p className="text-xs">Volume</p>
                  <h1 className="text-sm font-bold pt-1">
                    32
                    <span className=" text-xs font-medium text-slate-600">
                      +24%
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="hidden">Home</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl w-[100%] h-24 py-1 px-3">
              <div className=" flex justify-between items-center">
                <div>
                  <img
                    className=" bg-blue-200 rounded-xl p-2"
                    src={graphsIcon}
                    width={35}
                    height={35}
                    alt=""
                  />
                </div>
                <select className=" text-textGray bg-white text-xs font-serif">
                  <option selected>This week</option>
                  <option></option>
                  <option></option>
                </select>
              </div>

              <div className=" flex justify-between items-center mt-3">
                <div>
                  <p className=" text-textGray text-xs">Abandon Carts</p>
                  <h1 className="text-sm font-bold pt-1">45</h1>
                </div>
                <div>
                  <p className=" text-textGray text-xs">Volume</p>
                  <h1 className="text-sm font-bold pt-1">
                    32
                    <span className=" text-xs font-medium text-[green]">
                      +24%
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="hidden">Home</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl max-sm:w-[90%] max-sm:m-auto h-[375px] w-[35%] p-3">
            <div className=" pb-3">
              <p className=" text-base font-thin">Recent Order</p>
            </div>
            <div className=" w-[100%] filt flex-col h-[90%] flex gap-2">
              <div className=" flex items-center justify-between border shadow-lg ring-1 ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-orange-400 text-xs font-thin bg-[wheat] w-16 pl-3 mt-2 rounded-lg">
                    pending
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border shadow-lg ring-1 ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-green-600 text-xs font-light bg-green-300 w-20 pl-3 mt-2 rounded-lg">
                    completed
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border ring-1 shadow-lg ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemsIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-orange-500 text-xs font-extralight bg-[wheat] w-16 pl-3 mt-2 rounded-lg">
                    pending
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border shadow-lg ring-1 ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-orange-500 text-xs font-extralight bg-[wheat] w-16 pl-3 mt-2 rounded-lg">
                    pending
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border ring-1 shadow-lg ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemsIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-green-600 text-xs font-extralight bg-green-300 w-20 pl-3 mt-2 rounded-lg">
                    completed
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border ring-1 ring-slate-100 shadow-lg">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-green-600 text-xs font-extralight bg-green-300 w-20 pl-3 mt-2 rounded-lg">
                    completed
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border shadow-lg ring-1 ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemsIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-orange-500 text-xs font-extralight bg-[wheat] w-16 pl-3 mt-2 rounded-lg">
                    pending
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border ring-1 ring-slate-100 shadow-lg">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-green-600 text-xs font-extralight bg-green-300 w-20 pl-3 mt-2 rounded-lg">
                    completed
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between border shadow-lg ring-1 ring-slate-100">
                <div className=" flex items-center gap-2">
                  <div className=" h-[40px] w-[40px] rounded-lg border">
                    <img src={itemIcon} alt="" />
                  </div>
                  <div>
                    <h1 className=" text-xs font-sans text-slate-600">
                      Iphone 13
                    </h1>
                    <p className="text-xs font-thin font-serif mt-1">
                      #700,000.00 * 1
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-light text-xs font-sans">12 sept 2022</p>
                  <p className=" text-green-600 text-xs font-light bg-green-300 w-20 pl-3 mt-2 rounded-lg">
                    completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
