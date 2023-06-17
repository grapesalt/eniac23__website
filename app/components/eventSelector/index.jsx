import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import events from "../../data/events.json";
import Event from "./event";
import NavigationButton from "./navigationButton";

const EventsSelector = () => {
  const ref = React.useRef(null);

  const scroll = (dir) => {
    const clientWidth = ref.current.clientWidth;
    if (dir === "right") {
      ref.current.scrollLeft += clientWidth;
    } else {
      ref.current.scrollLeft -= clientWidth;
    }
    ref.current.scrollBehaviour = "smooth";
  };

  return (
    <>
      <div className="flex eventselector__bg w-[92lvw] md:w-[80lvw] lg:w-[70lvw] rounded-full md:rounded-xl border border-[#282727] mt-2 mx-auto fixed px-5 left-0 right-0 top-[calc(3svh+56px)] md:top-[56px]">
        <NavigationButton
          clickEvent={() => scroll("left")}
          text={<MdKeyboardArrowLeft size={24} />}
        />
        <div
          ref={ref}
          className="w-full px-2 h-full flex overflow-auto scrollbar-hide py-2 scroll-smooth "
        >
          {events.map((e, i) => (
            <Event key={i} href={e.permalink} title={e.title} />
          ))}
        </div>
        <NavigationButton
          clickEvent={() => scroll("right")}
          text={<MdKeyboardArrowRight size={24} />}
        />
      </div>
    </>
  );
};

export default EventsSelector;
