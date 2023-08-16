import { Link } from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import ActionButton from "../buttons/actionButton";
import NavItem from "./navItem";
import { FaAngleDown } from "react-icons/fa";

const DesktopNav = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const pointerOnHome = () => {
    setIsHomeHovered(true);
  };
  const pointerFromHome = () => {
    setIsHomeHovered(false);
  };
  return (
    <>
      <nav
        className={`items-center hidden md:flex fixed w-full mx-auto navbar px-6 z-[1000] top-0 h-[60px]`}
      >
        <div className="flex w-full justify-between xl:max-w-[80lvw] mx-auto">
          <Link to={"/"}>
            <h1 className="text-3xl gugi">ENIAC</h1>
          </Link>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <NavItem
                text={"Home"}
                icon={<FaAngleDown />}
                href={"/"}
                hovered={pointerOnHome}
                notHovered={pointerFromHome}
                noMl={true}
              />
              <div
                className={`flex flex-col ${
                  !isHomeHovered && `hidden`
                } absolute pt-7 z-10`}
                onMouseEnter={pointerOnHome}
                onMouseLeave={pointerFromHome}
              >
                <div className=" bg-black/70 p-1 m-0 rounded shadow-[#444444] shadow-inner">
                  <NavItem
                    noMl={true}
                    canBeActive={false}
                    text={"Sponsors"}
                    href={"/"}
                  />
                  <NavItem
                    noMl={true}
                    canBeActive={false}
                    text={"About"}
                    href={"/"}
                  />
                  <NavItem
                    noMl={true}
                    canBeActive={false}
                    text={"Team"}
                    href={"/"}
                  />
                </div>
              </div>
            </div>

            <NavItem text={"Events"} href={"/events"} />
            <NavItem text={"Reach Out"} href={"/contact"} canBeActive={true} />
            <div className="ml-6"></div>
            <ActionButton className={"hidden lg:flex"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default () => (
  <Suspense fallback={"Loading"}>
    <DesktopNav />
  </Suspense>
);
