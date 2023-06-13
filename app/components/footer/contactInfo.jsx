import React from "react";

const ContactInfoItem = ({ text }) => {
  return (
    <div className="py-3 px-8 backdrop-blur contact-info-item-bg text-center">
      {text}
    </div>
  );
};

export default ContactInfoItem;
