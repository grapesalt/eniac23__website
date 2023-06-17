import { Link } from "@remix-run/react";
import React from "react";

const Event = ({ title, href, passedRef }) => {
  return (
    <Link
      to={href}
      ref={passedRef}
      className="px-2 py-1 rounded-full eventselector_event__bg text-center min-w-[140px] mr-1 uppercase text-sm "
    >
      {title}
    </Link>
  );
};

export default Event;
