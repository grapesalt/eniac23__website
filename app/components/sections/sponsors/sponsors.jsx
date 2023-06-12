import React from "react";
import Image from "./sponsorImage";

const Sponsors = () => {
  return (
    <div className="grid mt-10 grid-cols-2 md:grid-cols-3 gap-y-5 md:gap-y-10">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
};

export default Sponsors;
