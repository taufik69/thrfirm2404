import React from "react";

const Button = ({ content, style }) => {
  return (
    <button
      className={`px-5 py-2.5 rounded font-nunito font-bold text-lg text-whtie_color hover:bg-red-400 hover:text-purple-400 cursor-pointer  transition ${style}`}
    >
      {content || "nei"}
    </button>
  );
};

export default Button;
