import { Link } from "@remix-run/react";
import events from "../../../data/events.json";

import armageddon from '../../../data/images/armageddon.png'
import brainstorm from '../../../data/images/brainstorm.png'
import cinephoria from '../../../data/images/cinephoria.png'
import click_clash from '../../../data/images/click-clash.png'
import codequest from '../../../data/images/codequest.png'
import educraft from '../../../data/images/educraft.jpg'
import meme_o_mania from '../../../data/images/meme-o-mania.png'
import surprise from '../../../data/images/surprise.png'

const Events = () => {
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
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 mt-10">
      {events.map((event) => {
        return (
          <Link to={`/events/${event.permalink}`}>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="md:rounded-md object-cover h-full w-full" src={images[event.permalink]} alt="" />
              <div className="absolute rounded-md bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Events;
