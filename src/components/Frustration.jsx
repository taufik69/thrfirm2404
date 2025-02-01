import React from "react";
import Heading from "./CommonComponent/Heading";
import Description from "./CommonComponent/Description";
const Frustration = () => {
  return (
    <div className="py-[100px] bg-gray_color">
      <div className="container">
        <Heading title={"Frustration of Clients"} />
        <div className="w-1/2">
          <Description />
        </div>
      </div>
    </div>
  );
};

export default Frustration;
