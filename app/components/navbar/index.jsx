import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useState } from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPosition(-1 * (currPos.y / window.innerHeight));
  });
  return (
    <>
      <DesktopNav scrollPosition={scrollPosition} />
      <MobileNav scrollPosition={scrollPosition} />
    </>
  );
};

export default Navbar;
