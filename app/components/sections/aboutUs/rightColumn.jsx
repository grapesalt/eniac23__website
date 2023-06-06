import React from "react";
import IntroSection from "./aboutPage__heroContent";
import Virus from "./virus";
import EniacClub from "./eniacClub";
import Team from "./team";
import Sponsors from "./sponsors";

const RightColumn = ({ refs }) => {
  return (
    <div className="w-full md:w-[88%] h-[89%] md:pl-2 md:h-full flex flex-col  bg-[#320c50] overflow-y-auto overflow-x-hidden">
      <IntroSection refs={refs} />
      <div className="mt-[100px]"></div>
      <Virus extRef={refs.virus} />
      <div className="mt-[100px]"></div>
      <EniacClub extRef={refs.eniac} />
      <div className="mt-[100px]"></div>
      <Team extRef={refs.team} />
      <div className="mt-[100px]"></div>
      <Sponsors extRef={refs.sponsors} />
    </div>
  );
};

export default RightColumn;
