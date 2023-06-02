import React from "react";
import PageHeading from "../../components/pageHeading";
import About from "../../components/sections/about";
import Team from "../../components/sections/team";
import Sponsors from "../../components/sections/sponsors";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div>
          <About />
        </div>
        <div>
          <Team />
        </div>
        <div className="mb-4">
          <Sponsors />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
