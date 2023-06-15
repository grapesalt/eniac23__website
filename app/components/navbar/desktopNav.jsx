import { Link } from "@remix-run/react";
import React, { Suspense } from "react";
import ActionButton from "../buttons/actionButton";
import NavItem from "./navItem";

const DesktopNav = () => {
  return (
    <nav
      className={`items-center hidden md:flex justify-between fixed w-full mx-auto navbar px-6 h-[56px] z-[1000] top-0 `}
    >
      <Link to={"/"}>
        <h1 className="text-2xl gugi">ENIAC</h1>
      </Link>
      <div className="flex justify-between items-center">
        <NavItem text={"Home"} href={"/"} />
        <NavItem text={"About Us"} href={"/"} canBeActive={false} />
        <NavItem text={"Team"} href={"/"} canBeActive={false} />
        <NavItem text={"Sponsors"} href={"/"} canBeActive={false} />
        <NavItem text={"Events"} href={"/events"} />
        <NavItem text={"Reach Out"} href={"/"} canBeActive={false} />
        <div className="ml-6"></div>
        <ActionButton className={"hidden lg:flex"} />
      </div>
    </nav>
  );
};

export default () => (
  <Suspense fallback={"Loading"}>
    <DesktopNav />
  </Suspense>
);
