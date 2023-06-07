import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import RightColumn from "../../components/sections/aboutUs/rightColumn";
import LeftColumn from "../../components/sections/aboutUs/leftColumn";
// import useIsInViewport from "../../hooks/useIsInViewport";

const AboutUs = () => {
  const [heading, setHeading] = useState("About Us");

  const virus = useRef(null);
  const eniac = useRef(null);
  const team = useRef(null);
  const sponsors = useRef(null);

  const refObj = {
    virus,
    eniac,
    team,
    sponsors,
  };

  const virusVisible = useIsVisible(virus);
  const eniacVisible = useIsVisible(eniac);
  const teamVisible = useIsVisible(team);
  const sponsorsVisible = useIsVisible(sponsors);

  useEffect(() => {
    if (sponsorsVisible) {
      setHeading("Sponsors");
    } else if (teamVisible) {
      setHeading("Team");
    } else if (eniacVisible) {
      setHeading("Eniac Club");
    } else if (virusVisible) {
      setHeading("Virus 2023");
    } else {
      setHeading("About Us");
    }
  }, [virusVisible, eniacVisible, teamVisible, sponsorsVisible]);

  return (
    <>
      <div className="flex md:flex-row flex-col w-full h-full bg-[white] justify-between">
        <LeftColumn title={heading || "About Us"} />
        <RightColumn refs={refObj} />
      </div>
    </>
  );
};

export default AboutUs;

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
