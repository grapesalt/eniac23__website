import { Link } from "@remix-run/react";
import Hamburger from "hamburger-react";
import React, { Suspense, useEffect, useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";
import MobNavItem from "./mobNavItem";
// let Drawer = lazy(() => import("react-modern-drawer"));

const ClientOnly = ({ children }) => {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
};

const MobileNav = ({ scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <ClientOnly>
        <Suspense fallback={"Loading"}>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="md:hidden z-[1000]"
          >
            <div className="flex flex-col h-full bg-[#080808] pt-[15px] shadow-md shadow-[#6f6f6f] z-[1000]">
              {/* <h1 className="text-4xl gugi mx-auto">ENIAC</h1> */}
              {/* <div className="mt-4" /> */}
              <MobNavItem close={toggleDrawer} to={"/"} text={"Home"} />
              <div className="mt-[14px]" />
              <MobNavItem close={toggleDrawer} to={"/events"} text={"Events"} />
              <div className="mt-[14px]" />
              <MobNavItem
                close={toggleDrawer}
                to={"/contact"}
                text={"Reach Out"}
              />
            </div>
          </Drawer>
        </Suspense>
      </ClientOnly>
      <nav
        className={`z-[100]  items-center md:hidden justify-between fixed shadow-white nav-animation ${
          scrollPosition > 0.6
            ? `top-0  w-full h-[52px] `
            : `top-[3svh] w-[92lvw] rounded-full right-[0] left-[0] h-[56px] shadow-inner `
        } max-w-[918px]  mx-auto navbar px-6  flex transition-all duration-300`}
      >
        <h1 className="text-2xl gugi flex items-center my-auto">
          <Link to={"/"} prefetch="intent" className="mt-1">
            ENIAC
          </Link>
        </h1>
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
