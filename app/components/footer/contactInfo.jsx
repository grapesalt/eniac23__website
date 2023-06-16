import { Link } from "@remix-run/react";
import React from "react";

const ContactInfoItem = ({ text, icon, href }) => {
  return (
    <Link
      to={href}
      className="flex text-xs md:text-sm tracking-tight py-2 items-center w-full md:px-4 justify-center backdrop-blur contact-info-item-bg text-center"
    >
      <div className="my-auto backdrop-blur px-3 py-2 mr-2 rounded-full">
        {icon}
      </div>
      <p>{text}</p>
    </Link>
  );
};

export default ContactInfoItem;
