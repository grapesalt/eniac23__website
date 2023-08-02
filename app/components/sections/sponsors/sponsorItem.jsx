import React, { useState } from "react";

const SponsorItem = ({ sponsorName }) => {
  sponsorName = sponsorName || "Sponsor";
  return (
    <>
      <div className="flex flex-col team-grid-border team-mate w-full p-auto">
        <div className="sponsor-item-bg rounded-full max-h-[120px] max-w-[120px] mx-auto">
          <img
            src={`https://placehold.co/500x500/png?text=Sponsor&fontsize=36`}
            alt={sponsorName}
            className="rounded-full aspect-[1/1] object-cover max-h-[115px] z-[100] transition-all duration-300 ease-in-out"
          />
        </div>

        <p className="text-center text-sm my-1 transition-all">{sponsorName}</p>
      </div>
      {/* <Tooltip
        anchorSelect=".team-mate"
        closeOnScroll={true}
        style={{
          backgroundColor: "#363636",
          boxShadow: "2px 3px 1px 0px #888888",
        }}
      >
        {memberName}
      </Tooltip> */}
    </>
  );
};

export default SponsorItem;
