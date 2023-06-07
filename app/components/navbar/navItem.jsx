import { NavLink } from "@remix-run/react";
import React, { useEffect, useState } from "react";

const NavItem = ({ name, to, selected }) => {
  return (
    <>
      <NavLink to={to} prefetch="intent" className={"w-full l-nav-item"}>
        <div
          className={`h-full flex nav-item px-auto rounded-full hover:cursor-pointer transition-all ${
            selected && `border-[#b9b9b9]`
          }`}
        >
          <p className="ntext text-[20px] font-light my-auto mx-auto">{name}</p>
        </div>
      </NavLink>
    </>
  );
};

export default NavItem;
