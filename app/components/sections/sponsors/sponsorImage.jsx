import React from "react";
import unacademy from "../../../images/sponsors/byjus.png";

const Image = () => {
  return (
    <div className="w-[140px] md:w-[200px] aspect-square border-2 border-[#49494912] rounded-full flex sponsor-image-bg mx-auto">
      <img
        src={unacademy}
        loading="lazy"
        alt="Unacademy"
        className="aspect-square h-auto object-contain grayscale-[60%] md:opacity-50 hover:grayscale-0 md:hover:opacity-100 transition-all duration-300 ease-in-out mx-auto"
      />
    </div>
  );
};

export default Image;
