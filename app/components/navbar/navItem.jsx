import { NavLink } from "@remix-run/react";
import React from "react";

const NavItem = ({ text, href, canBeActive }) => {
  canBeActive = canBeActive ?? true;
  return (
    <NavLink
      to={href}
      prefetch="intent"
      className={({ isActive }) => {
        return canBeActive && isActive
          ? `ml-6 text-white nav-item-shadow text-sm transition-all duration-300`
          : `ml-6 text-[#d9d9d9] text-sm hover:text-white transition-all duration-300`;
      }}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
