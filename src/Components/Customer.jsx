import React from "react";
import Dash from "./Dash";
import { dashData } from "./Dummy";

const Customer = () => {
  return (
    <div>
      Customer
      {/* <Dash
        firsData={"Sales"}
        firstDataValue={"234"}
        secondValue={"Volume"}
        secondValueData={"450"}
        secondValueSubData={"+50%"}
        DashIcon={graphIcon}
        iconBackground={"bg-blue-300"}
      />
      <Dash
        firsData={"Customer"}
        firstDataValue={"#4,000,000.00"}
        secondValue={"Volume"}
        secondValueData={"450"}
        secondValueSubData={"+45%"}
        DashIcon={graphsIcon}
        iconBackground={"bg-red-500"}
      /> */}
      <div>
        {dashData.map((ola) => (
          <Dash key={ola.id} {...ola} />
        ))}
      </div>
    </div>
  );
};

export default Customer;
