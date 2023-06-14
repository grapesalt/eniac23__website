import React, { useEffect, useState } from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const percentageScroll = window.scrollY / window.innerHeight;
    setScrollPosition(percentageScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, handleScroll]);
  return (
    <>
      <DesktopNav scrollPosition={scrollPosition} />
      <MobileNav scrollPosition={scrollPosition} />
    </>
  );
};

export default Navbar;
