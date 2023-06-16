import React from "react";

const NavigationButton = ({ text }) => {
  return (
    <>
      <div className="h-full eventselector__nav my-auto px-1">
        <p className="my-auto self-center h-full">{text}</p>
      </div>
    </>
  );
};

export default NavigationButton;
