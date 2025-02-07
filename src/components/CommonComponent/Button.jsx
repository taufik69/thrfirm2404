import React from "react";

const Button = ({ content, style, fansyStyle = false }) => {
  console.log("fansyStyle", fansyStyle);
  return (
    <button className={fansyStyle ? "ourcustomBttonStyle " : `normalButton`}>
      {content || "nei"}
    </button>
  );
};

export default Button;
