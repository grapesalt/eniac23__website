import { Link, useParams } from "@remix-run/react";
import React from "react";
import events from "../data/events.json";

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);
  return (
    <div className="flex min-h-full">
      <div className="flex flex-col min-w-[30%] bg-white/10 backdrop-blur min-h-[50%] rounded-xl mt-2 fixed">
        <div className="capitalize text-center mx-auto  text-2xl pt-2">
          {eventData.title}
        </div>
        <div className="div">logo</div>
        <Link to="/events" className="text-center mx-auto text-xl pt-2" />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default MemePage;
