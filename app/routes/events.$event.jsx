import { Link, useParams } from "@remix-run/react";
import React, { useEffect, useRef } from "react";
import events from "../data/events.json";
import { Editor, EditorProvider } from "react-simple-wysiwyg";
import styles from "../styles/eventInfo.css";
const base64 = require("js-base64");

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);

  const es = base64.decode(eventData.data);
  return (
    <div className="flex flex-col min-h-full md:mx-4 lg:mx-0">
      <div className="text-center md:text-left text-2xl md:text-3xl pt-2">
        {eventData.title}
      </div>
      <EditorProvider>
        <Editor value={es} contentEditable={false} />
      </EditorProvider>
      {/* <div
        className="events-info"
        dangerouslySetInnerHTML={{ __html: sei }}
      ></div> */}
    </div>
  );
};

export default MemePage;
