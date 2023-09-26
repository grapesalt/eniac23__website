import React from "react";
import TeamMate from "./teamMate";
import team from "../../../data/team.json";

const Team = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 items-center mt-8 mx-6 lg:mx-0 align-center">
      {team.map((t, i) => (
        <>
          <TeamMate
            key={i}
            memberName={t.name}
            post={t.post}
            purl={`/team/${t.pl || t.name}.jpg`}
          />
        </>
      ))}
    </div>
  );
};

export default Team;
