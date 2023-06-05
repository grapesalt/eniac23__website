import React from "react";

const LeftColumn = ({ title }) => {
  return (
    <div className="w-full md:w-[11%] h-[10.5%] md:h-full flex bg-[#320c50]">
      <p className="uppercase text-4xl md:text-[90px] mx-auto my-auto font-medium align-middle text-center md:whitespace-nowrap md:-rotate-90 lg:ml-[-155px] md:ml-[-168px]">
        {title || "About Us"}
      </p>
    </div>
  );
};

export default LeftColumn;
