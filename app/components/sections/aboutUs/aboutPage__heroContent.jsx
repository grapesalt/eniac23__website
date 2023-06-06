import React from "react";

const IntroSection = ({ refs }) => {
  // a function to make refs scroll into view
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="flex flex-col justify-evenly min-h-full ">
        <Heading
          onClick={() => {
            scrollToRef(refs.virus);
          }}
          text={"VIRUS 2023"}
        />
        <Heading
          onClick={() => {
            scrollToRef(refs.eniac);
          }}
          text={"ENIAC Club"}
        />
        <Heading
          onClick={() => {
            scrollToRef(refs.team);
          }}
          text={"The Team"}
        />
        <Heading
          onClick={() => {
            scrollToRef(refs.sponsors);
          }}
          text={"Our Sponsors"}
        />
      </div>
    </>
  );
};

export default IntroSection;

const Heading = ({ text, onClick }) => {
  return (
    <h3
      onClick={onClick}
      className="transition hover:cursor-pointer text-6xl md:text-7xl lg:text-8xl text-[#b9b9b9] font-semibold md:font-bold text-center md:text-left tracking-tight md:tracking-normal"
    >
      {text}
    </h3>
  );
};
