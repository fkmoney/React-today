import React from "react";

const Dash = ({
  firsData,
  firstDataValue,
  secondValue,
  secondValueData,
  secondValueSubData,
  DashIcon,
  iconBackground,
}) => {
  return (
    <div className=" bg-white h-32 max-sm:w-[95%] w-[30%] rounded-xl p-3">
      <div className="flex justify-between items-center">
        <img
          className={`${iconBackground} rounded-xl p-2`}
          src={DashIcon}
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
          <p className=" text-textGray text-xs">{firsData}</p>
          <h1 className="text-sm font-bold pt-1">{firstDataValue}</h1>
        </div>
        <div>
          <p className=" text-textGray text-xs">{secondValue}</p>
          <h1 className="text-sm font-bold pt-1">
            {secondValueData}
            <span className=" text-xs font-medium text-[green]">
              {secondValueSubData}
            </span>
          </h1>
        </div>
        <div>
          <p className="hidden">Home</p>
        </div>
      </div>
    </div>
  );
};

export default Dash;
