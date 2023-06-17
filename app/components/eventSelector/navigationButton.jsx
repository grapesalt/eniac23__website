import React from "react";

const NavigationButton = ({ text, clickEvent }) => {
  return (
    <>
      <div
        onClick={clickEvent}
        className="h-full eventselector__nav my-auto hover:cursor-pointer rounded-full hover:bg-[#ffffff17] transition-all duration-200 md:mx-1"
      >
        <p className="my-auto self-center h-full">{text}</p>
      </div>
    </>
  );
};

export default NavigationButton;
