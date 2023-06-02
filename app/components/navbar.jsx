import React from "react";
import NavItem from "./navItem";

const Navbar = () => {
  return (
    <>
      <div className="nav justify-evenly my-auto h-full">
        <NavItem name={"About Us"} to={"/about-us#about"} />
        <NavItem name={"Team"} to={"/about-us#team"} />
        <NavItem name={"Sponsors"} to={"/about-us#sponsors"} />
        <NavItem name={"Events"} to={"/events"} />
        <NavItem name={"Reach Out"} to={"/contact"} />
      </div>
      <div className="my-auto h-full flex align-middle md:hidden">
        <div className="absolute bottom-[9px] left-[8px]">H</div>
        <p className="text-xl my-auto flex justify-center flex-1 text-center align- w-full gugi tracking-[0.5em]">
          ENIAC
        </p>
      </div>
    </>
  );
};

export default Navbar;
