import React from "react";
import SponsorItem from "./sponsorItem";

import vmc from '../../../data/images/vmc_sponsor_logo.png'
import juana from '../../../data/images/juana_sponsor_logo.png'
import creston from '../../../data/images/creston_sponsor_logo.png'
import festive from '../../../data/images/festive_sponsor_logo.png'

const Sponsors = () => {
  return (
    <>
      <div className="grid items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-y-6 lg:grid-cols-4 mt-4  sm:mt-8">
        <SponsorItem img={vmc} sponsorName={"Vidyamandir Classes"}/>
        <SponsorItem img={juana} sponsorName={"Juana"} />
        <SponsorItem img={creston} sponsorName={"Creston"} />
        <SponsorItem img={festive} sponsorName={"Festive"} />
      </div>
    </>
    // <>Will do after getting content</>
  );
};

export default Sponsors;
