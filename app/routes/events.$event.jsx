import { Link, useParams } from "@remix-run/react";
import React from "react";
import events from "../data/events.json";

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);
  return (
    <div className="flex flex-col min-h-full">
      <div className="text-center md:text-left text-2xl md:text-3xl pt-2">
        {eventData.title}
      </div>
    </div>
  );
};

export default MemePage;
