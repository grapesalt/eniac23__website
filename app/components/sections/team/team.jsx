import React from "react";
import TeamMate from "./teamMate";

const Team = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center mt-8 mx-6 lg:mx-0">
      <TeamMate />
      <TeamMate />
      <TeamMate />
      <TeamMate />
      <TeamMate />
      <TeamMate />
      <TeamMate />
      <TeamMate />
    </div>
  );
};

export default Team;
