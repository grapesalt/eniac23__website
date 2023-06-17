import React from "react";

const NavigationButton = ({ text, clickEvent }) => {
  return (
    <>
      <div
        onClick={clickEvent}
        className="h-full eventselector__nav my-auto px-1 hover:cursor-pointer"
      >
        <p className="my-auto self-center h-full">{text}</p>
      </div>
    </>
  );
};

export default NavigationButton;
