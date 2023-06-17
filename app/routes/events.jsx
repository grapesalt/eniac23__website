import { Outlet } from "@remix-run/react";
import React, { Suspense } from "react";
import EventsSelector from "../components/eventSelector";

const Events = () => {
  return (
    <>
      <div className="h-full">
        <div className="top-margin"></div>
        <Suspense children={<EventsSelector />} />

        <div className="mt-[calc(3svh+112px)] md:mt-[112px]"></div>
        <div className="w-[92lvw] md:w-full mx-auto max-w-[918px] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Events;
