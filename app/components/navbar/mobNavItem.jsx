import { NavLink } from "@remix-run/react";
import React from "react";

const MobNavItem = ({ to, text, close }) => {
  return (
    <>
      <NavLink
        to={to}
        prefetch="intent"
        className={({ isActive }) => {
          return isActive ? `text-[#f6f6f6]` : `text-[#d4d4d4]`;
        }}
        onClick={close}
      >
        <p className="text-[28px] font-light pl-6">{text}</p>
      </NavLink>
    </>
  );
};

export default MobNavItem;
