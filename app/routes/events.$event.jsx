import { Link, useParams } from "@remix-run/react";
import React, { useEffect, useRef } from "react";
import events from "../data/events.json";
import { Editor, EditorProvider } from "react-simple-wysiwyg";
import styles from "../styles/eventInfo.css";
const base64 = require("js-base64");

import armageddon from '../data/images/armageddon_logo.png'
import brainstorm from '../data/images/brainstorm_logo.png'
import cinephoria from '../data/images/cinephoria_logo.png'
import click_clash from '../data/images/click-clash_logo.png'
import codequest from '../data/images/codequest_logo.png'
import educraft from '../data/images/educraft_logo.png'
import meme_o_mania from '../data/images/meme-o-mania_logo.png'
import surprise from '../data/images/surprise_logo.png'

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const MemePage = () => {
  const params = useParams();
  const eventData = events.find((e) => e.permalink === params.event);

  const images = {
    'surprise': surprise,
    'meme-o-mania': meme_o_mania,
    'educraft': educraft,
    'codequest': codequest,
    'click-clash': click_clash,
    'cinephoria': cinephoria,
    'brainstorm': brainstorm,
    'armageddon' : armageddon,
  }

  const es = base64.decode(eventData.data);

  return (
    <div className="flex flex-col min-h-full md:mx-4 lg:mx-0">
      <div className="text-center md:text-left text-2xl md:text-3xl pt-2">
        {eventData.title}
      </div>
      <img className="m-10 w-[15rem] h-[15rem]" src={images[eventData.permalink]} alt={eventData.title} /> 

      <div
        className="events-info"
        dangerouslySetInnerHTML={{ __html: es }}
      ></div>
    </div>
  );
};

export default MemePage;
