import React, { useState } from "react";

const SponsorItem = ({ sponsorName, img }) => {
  sponsorName = sponsorName || "Sponsor";
  return (
    <>
      <div className="flex flex-col w-full p-auto">
        <div className="mx-auto">
          <img
            src={img}
            alt={sponsorName}
            className="w-[90%] h-[90%] md:w-full md:h-full z-[100] transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default SponsorItem;
