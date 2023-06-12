import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ActionButton = ({ text, className }) => {
  text = text ?? "Register";
  return (
    <div
      className={`flex text-center justify-center uppercase action-button-bg py-[6.9px] px-5 text-sm hover:cursor-pointer transition-all duration-300 ${className}`}
    >
      {text}
      <BsArrowUpRight className="ml-2 my-auto" />
    </div>
  );
};

export default ActionButton;
