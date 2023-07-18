import React from "react";

const SecondarySection = ({ tagline, heading, children, className }) => {
  return (
    <>
      <div
        className={`max-w-[918px] w-full flex flex-col mx-auto mt-8 ${
          className ? className : ``
        }`}
      >
        <p className="mx-auto text-center uppercase text-xs sm:text-sm md:text-md tracking-wide grad-text z-50">
          {tagline}
        </p>
        <h3 className="serif uppercase text-[38px] md:text-6xl text-center font-extralight mt-[-10px] md:mt-[-2px]">
          {heading}
        </h3>
        {children}
      </div>
    </>
  );
};

export default SecondarySection;
