import { Link } from "@remix-run/react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";
import MobNavItem from "./mobNavItem";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="md:hidden"
      >
        <div className="flex flex-col h-full bg-[#080808] pl-[15px] pt-[15px] shadow-2xl shadow-[#6f6f6f]">
          <MobNavItem close={toggleDrawer} to={"/"} text={"Home"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/about-us"} text={"About Us"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/events"} text={"Events"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/contact"} text={"Reach Out"} />
        </div>
      </Drawer>
      <nav className=" shadow-inner shadow-white items-center md:hidden justify-between fixed top-[3svh] w-[92lvw] max-w-[918px] rounded-full mx-auto right-[5lvw] left-[5lvw] navbar px-6 h-[56px] flex">
        <h1 className="text-2xl gugi">ENIAC</h1>
        <div className="flex items-center">
          <div className="z-[1000] my-auto">
            <Hamburger size={24} onToggle={toggleDrawer} toggled={isOpen} />
          </div>
        </div>
      </nav>
      {/* <div className="my-auto h-full flex align-middle md:hidden">
        <div className="z-[1000] my-auto">
          <Hamburger size={24} onToggle={toggleDrawer} toggled={isOpen} />
        </div>

        <Link
          to={"/"}
          prefetch="intent"
          className="text-xl my-auto flex left-[38%] flex-1 text-center gugi tracking-[0.5em] absolute bottom-[20px]"
        >
          <p>ENIAC</p>
        </Link>
      </div> */}
    </>
  );
};

export default MobileNav;
