import vr from "../../../images/vr.svg";
import dottedMap from "../../../images/dotted-map.svg";

const Images = () => {
  return (
    <>
      <img
        src={dottedMap}
        alt="Dotted Map"
        loading="lazy"
        className="overflow-hidden min-w-[150vh] md:min-w-0 md:h-[80vh] md:w-full fixed top-[10px] md:bottom-[calc(16vh+14px)]"
      />
      <img
        src={vr}
        alt="Hero Image"
        loading="lazy"
        className="min-w-[80vh] sm:min-w-[30vh] md:min-w-0 md:h-[75vh] md:w-full z-30 fixed bottom-[10px] md:bottom-[calc(16vh+14px)] md:right-[10vw] md:max-w-[90vw] md:max-h-[68vh]"
      />
    </>
  );
};

export default Images;
