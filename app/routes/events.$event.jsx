import { useParams } from "@remix-run/react";
import React from "react";
import events from "../data/events.json";

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);
  return <div className="uppercase">{eventData.title}</div>;
};

export default MemePage;
