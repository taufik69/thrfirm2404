import React from "react";

const Description = ({ content }) => {
  return (
    <div className="font-lora font-normal text-[18px] text-black_color leading-[176%]">
      {content ||
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s,`}
    </div>
  );
};

export default Description;
