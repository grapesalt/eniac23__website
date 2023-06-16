import { Outlet } from "@remix-run/react";
import React from "react";
import EventsSelector from "../components/eventSelector";

const Events = () => {
  return (
    <>
      <div className="h-full">
        <div className="top-margin"></div>
        <EventsSelector />
        <div className="mt-[calc(3svh+112px)] md:mt-[112px]"></div>
        <Outlet />
      </div>
    </>
  );
};

export default Events;
