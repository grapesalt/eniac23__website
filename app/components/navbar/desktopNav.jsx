import React from "react";
import NavItem from "./navItem";

const DesktopNav = () => {
  return (
    <div className="desktop-nav justify-evenly my-auto h-full">
      <NavItem name={"About Us"} to={"/about-us"} />
      {/* <NavItem name={"Team"} to={"/about-us#team"} />
        <NavItem name={"Sponsors"} to={"/about-us#sponsors"} /> */}
      <NavItem name={"Events"} to={"/events"} />
      <NavItem name={"Reach Out"} to={"/contact"} />
    </div>
  );
};

export default DesktopNav;
