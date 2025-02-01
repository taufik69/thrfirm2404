import React from "react";

const Heading = ({ title = "Missing" }) => {
  const titleArray = title?.split(" ");
  const titleLast = titleArray[titleArray.length - 1];
  const titleFirst = title?.replace(titleLast, "");

  return (
    <h1 className="font-nunito font-black text-[44px] text-black_color">
      {titleFirst ? titleFirst : "Missing First Item"}
      <span className="navitemstyle2 inline-block cursor-pointer">
        {titleLast || "nei"}
      </span>
    </h1>
  );
};

export default Heading;
