import { Link, useParams } from "@remix-run/react";
import React from "react";
import events from "../data/events.json";
import { Editor, EditorProvider } from "react-simple-wysiwyg";
import styles from "../styles/eventInfo.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);
  return (
    <div className="flex flex-col min-h-full md:mx-4 lg:mx-0">
      <div className="text-center md:text-left text-2xl md:text-3xl pt-2">
        {eventData.title}
      </div>
      <div className="events-info">
        <ol>
          <li>About the event: </li>
          <li>Maximum teams per school: </li>
          <li>Participants per team: </li>
          <li>Eligible classes: </li>
          <li>Mode (online/offline): </li>
          <li>Prelims (yes/no): </li>
          <li>Software(s) to be used: </li>
          <li>Rules: </li>
        </ol>
      </div>
    </div>
  );
};

export default MemePage;
