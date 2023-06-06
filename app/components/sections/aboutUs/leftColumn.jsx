import React from "react";

const LeftColumn = ({ title }) => {
  return (
    <div className="w-full md:w-[11%] h-[10.5%] md:h-full bg-[#320c50]">
      <div className="h-full flex">
        <p className="uppercase text-4xl md:text-[72px] lg:text-[86px] font-medium whitespace-nowrap m-auto md:mt-auto md:mb-[20px] md:-rotate-90 md:max-w-[40px] md:ml-[30px] ">
          {title || "About Us"}
        </p>
      </div>
    </div>
  );
};

export default LeftColumn;
