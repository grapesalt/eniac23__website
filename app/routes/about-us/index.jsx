import React from "react";
import PageHeading from "../../components/pageHeading";
import About from "../../components/sections/about";
import Team from "../../components/sections/team";
import Sponsors from "../../components/sections/sponsors";
import LeftColumn from "../../components/sections/about/leftColumn";

const AboutUs = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full h-full bg-[white] justify-between">
        <LeftColumn title={"About Us"} />
        <div className="w-full md:w-[88%] h-[89%] md:h-full flex  bg-[#320c50]">
          Hello
        </div>
      </div>
    </>
  );
};

export default AboutUs;
