import React from "react";
import RightColumn from "../../components/sections/aboutUs/rightColumn";
import LeftColumn from "../../components/sections/aboutUs/leftColumn";

const AboutUs = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full h-full bg-[white] justify-between">
        <LeftColumn title={"About Us"} />
        <RightColumn />
      </div>
    </>
  );
};

export default AboutUs;
