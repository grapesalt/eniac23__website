import React from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav scrollPosition={1} />
      <MobileNav scrollPosition={1} />
    </>
  );
};

export default Navbar;
