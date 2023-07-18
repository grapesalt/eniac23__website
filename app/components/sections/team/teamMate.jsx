import React, { useState } from "react";

const TeamMate = ({ memberName, post }) => {
  post = post || "Position";
  memberName = memberName || "Member Name";

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="flex flex-col team-grid-border team-mate w-full p-auto">
        <div
          className="team-mate-bg rounded-3xl max-h-[170px] max-w-[170px] mx-auto"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src={`https://placehold.co/500x500/png?text=Placehold+Image&fontsize=36`}
            alt={memberName}
            className="rounded-3xl aspect-[1/1] object-cover max-h-[165px] z-[100] transition-all duration-300 ease-in-out"
          />
        </div>

        <p className="text-center text-sm my-1 transition-all">
          {isHovered ? memberName : post}
        </p>
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

export default TeamMate;
