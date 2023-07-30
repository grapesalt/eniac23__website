import { NavLink } from "@remix-run/react";
import React from "react";

const NavItem = ({
  text,
  href,
  canBeActive,
  icon,
  hovered,
  notHovered,
  noMl,
}) => {
  canBeActive = canBeActive ?? true;
  return (
    <NavLink
      to={href}
      prefetch="intent"
      onMouseEnter={hovered && hovered}
      onMouseLeave={notHovered && notHovered}
      className={({ isActive }) => {
        return canBeActive && isActive
          ? `${
              !noMl && `ml-6`
            } text-white nav-item-shadow text-sm transition-all duration-300 flex items-center z-50`
          : `${
              !noMl && `ml-6`
            } text-[#d9d9d9] text-sm hover:text-white transition-all duration-300 flex items-center z-50`;
      }}
    >
      {text}
      {icon && (
        <>
          <div className="ml-[2px]">{icon}</div>
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
