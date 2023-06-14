import React from "react";

const TeamMate = ({ memberName, post }) => {
  post = post || "Position";
  memberName = memberName || "Member Name";
  return (
    <>
      <div className="flex flex-col team-grid-border">
        <img
          src={`https://placehold.co/500x500/png?text=${memberName}&fontsize=36`}
          alt={memberName}
          className=" rounded-xl aspect-[8/5] object-cover max-h-[180px]"
        />
        <div className="flex flex-col items-center justify-center border rounded-full mt-2">
          <p className="text-center text-sm my-1">{post}</p>
        </div>
      </div>
    </>
  );
};

export default TeamMate;
