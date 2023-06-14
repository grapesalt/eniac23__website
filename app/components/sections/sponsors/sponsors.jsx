import React from "react";
import Image from "./sponsorImage";

const Sponsors = () => {
  return (
    <div className="grid md:mt-10 grid-cols-2 sm:grid-cols-3 gap-y-5 md:gap-y-10">
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
