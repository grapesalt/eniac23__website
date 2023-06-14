import React from "react";

const ContactInfoItem = ({ text }) => {
  return (
    <div className="text-sm md:text-md py-3 w-full md:px-8 backdrop-blur contact-info-item-bg text-center">
      {text}
    </div>
  );
};

export default ContactInfoItem;
