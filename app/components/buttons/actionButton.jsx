import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ActionButton = ({ text, className, link }) => {

  return (
    <div
      className={`flex text-center justify-center uppercase action-button-bg py-[6.9px] px-5 text-sm hover:cursor-pointer transition-all duration-300 ${className}`}
    >
      <Link className="flex" to={link}>
        {text}
        <BsArrowUpRight className="ml-2 my-auto" />
      </Link>
    </div>
  );
};

export default ActionButton;
