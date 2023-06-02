import React from "react";

const PageHeading = ({ title, eid }) => {
  return (
    <>
      <div
        className="esticky flex pt-[1vh] pb-[2vh] sticky top-0 w-full bg-[#0a0524] md:bg-[#320C50] rounded-xl px-7 justify-center "
        id={eid}
      >
        <h1 className="text-4xl rounded-full uppercase z-20 underline underline-offset-8 font-medium">
          {title}
        </h1>
      </div>
    </>
  );
};

export default PageHeading;
