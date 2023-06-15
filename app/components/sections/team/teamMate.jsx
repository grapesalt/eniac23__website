import React from "react";

const TeamMate = ({ memberName, post }) => {
  post = post || "Position";
  memberName = memberName || "Member Name";
  return (
    <>
      <div className="flex flex-col team-grid-border team-mate">
        <div className="team-mate-bg rounded-xl ">
          <img
            src={`https://placehold.co/500x500/png?text=Placehold+Image&fontsize=36`}
            alt={memberName}
            className=" rounded-xl aspect-[8/5] object-cover max-h-[240px] z-[100] border team-mate-border transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-center justify-center border rounded-full mt-2 bg-[#1a1a1a]">
          <p className="text-center text-sm my-1">{post}</p>
        </div>
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
