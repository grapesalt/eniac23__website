import React from "react";
import NavItem from "./navItem";
import { Link } from "@remix-run/react";

const DesktopNav = () => {
  return (
    <nav className=" shadow-inner shadow-white items-center hidden md:flex justify-between fixed top-[3svh] w-[92lvw] max-w-[918px] rounded-full mx-auto right-[5lvw] left-[5lvw] desktop-navbar px-6 h-[56px]">
      <h1 className="text-2xl gugi">ENIAC</h1>
      <div className="flex justify-between items-center">
        <NavItem text={"Home"} href={"/"} />
        <NavItem text={"About Us"} href={"/"} canBeActive={false} />
        <NavItem text={"Team"} href={"/"} canBeActive={false} />
        <NavItem text={"Sponsors"} href={"/"} canBeActive={false} />
        <NavItem text={"Events"} href={"/events"} />
        <NavItem text={"Reach Out"} href={"/"} canBeActive={false} />
      </div>
    </nav>
  );
};

export default DesktopNav;
