import React from "react";
import SponsorItem from "./sponsorItem";

const Sponsors = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 sm:gap-y-6 lg:grid-cols-6 mt-6 sm:mt-8">
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
      </div>
    </>
    // <>Will do after getting content</>
  );
};

export default Sponsors;
