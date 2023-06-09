import { Link } from "@remix-run/react";
import React from "react";

const MobNavItem = ({ to, text, close }) => {
  return (
    <>
      <Link
        to={to}
        prefetch="intent"
        className="text-xl text-center"
        onClick={close}
      >
        {text}
      </Link>
    </>
  );
};

export default MobNavItem;
