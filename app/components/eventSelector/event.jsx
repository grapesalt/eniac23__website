import { NavLink } from "@remix-run/react";
import React from "react";

const Event = ({ title, href, passedRef }) => {
  return (
    <NavLink
      to={href}
      end
      ref={passedRef}
      className={({ isActive }) =>
        isActive
          ? "px-2 py-1 rounded-lg text-center min-w-[120px] mr-2 text-sm text-[#080808] bg-[#ffffff] transition-all duration-300"
          : "px-2 py-1 rounded-lg eventselector-event__bg text-center min-w-[120px] mr-2 text-sm transition-all duration-300"
      }
    >
      {title}
    </NavLink>
  );
};

export default Event;
