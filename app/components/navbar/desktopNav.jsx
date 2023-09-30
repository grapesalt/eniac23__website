import { Link } from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import ActionButton from "../buttons/actionButton";
import NavItem from "./navItem";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../images/logo.svg";
import events from "../../data/events.json";

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
              <NavItem
                text={"Home"}
                href={"/"}
              />
              <NavItem
                text={"About"}
                href={"/#about"}
                canBeActive={false}
                // clickEvent={() => scrollToId("about")}
              />
              <NavItem
                text={"Team"}
                href={"/#team"}
                canBeActive={false}
                // clickEvent={() => scrollToId("team")}
              />

            <NavItem text={"Events"} href={`/events/${events[0].permalink}`} />
            <div className="ml-6"></div>
            <ActionButton text="contact us" className="hidden lg:flex" link="/#contact"/>
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
