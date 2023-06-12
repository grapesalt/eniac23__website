import React from "react";

const SecondarySection = ({ tagline, heading, children }) => {
  return (
    <>
      <div className="max-w-[918px] w-full flex flex-col mx-auto mt-8">
        <p className="mx-auto text-center uppercase text-sm md:text-lg tracking-widest grad-text z-50">
          {tagline}
        </p>
        <h3 className="serif capitalize text-[38px] md:text-6xl text-center font-extralight mt-[-10px] md:mt-[-6px]">
          {heading}
        </h3>
        {children}
      </div>
    </>
  );
};

export default SecondarySection;
