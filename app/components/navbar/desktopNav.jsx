import { Link } from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import ActionButton from "../buttons/actionButton";
import NavItem from "./navItem";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../images/logo.svg";

const DesktopNav = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const pointerOnHome = () => {
    setIsHomeHovered(true);
  };
  const pointerFromHome = () => {
    setIsHomeHovered(false);
  };
  const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <nav
        className={`items-center hidden md:flex fixed w-full mx-auto navbar px-6 z-[1000] top-0 h-[60px]`}
      >
        <div className="flex w-full justify-between xl:max-w-[80lvw] mx-auto">
          <Link to={"/"}>
            <div className="flex max-h-full ">
              <img
                src={logo}
                alt="ENIAC logo"
                className="max-h-[36px] self-center"
              />
              <h1 className="self-center ml-2 text-3xl font-thin">ENIAC</h1>
            </div>
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
                    href={"/#sponsors"}
                    // clickEvent={() => scrollToId("sponsors")}
                  />
                  <NavItem
                    noMl={true}
                    canBeActive={false}
                    text={"About"}
                    href={"/#about"}
                    // clickEvent={() => scrollToId("about")}
                  />
                  <NavItem
                    noMl={true}
                    canBeActive={false}
                    text={"Team"}
                    href={"/#team"}
                    // clickEvent={() => scrollToId("team")}
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
