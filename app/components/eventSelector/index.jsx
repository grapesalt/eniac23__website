import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Event from "./event";
import NavigationButton from "./navigationButton";

const EventsSelector = () => {
  return (
    <>
      <div className="flex eventselector__bg w-[92lvw] md:w-[80lvw] lg:w-[70lvw] rounded-full md:rounded-xl border border-[#282727] mt-2 mx-auto fixed px-5 left-0 right-0 top-[calc(3svh+56px)] md:top-[56px]">
        <NavigationButton text={<MdKeyboardArrowLeft size={24} />} />
        <div className="w-full px-2 h-full flex overflow-auto scrollbar-hide py-2">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
        <NavigationButton text={<MdKeyboardArrowRight size={24} />} />
      </div>
    </>
  );
};

export default EventsSelector;
