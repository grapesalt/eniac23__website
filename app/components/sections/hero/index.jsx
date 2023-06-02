// export const meta = () => {
//   return [
//     { title: "hello" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import vr from "../../../images/vr.svg";
import dottedMap from "../../../images/dotted-map.svg";

export default function HomeHero() {
  return (
    <>
      <div className="flex h-full justify-center overflow-hidden">
        <img
          src={dottedMap}
          alt="Dotted Map bg"
          className="overflow-hidden min-w-[150vh] md:min-w-0 md:h-[80vh] md:w-full fixed top-[10px] md:bottom-[calc(16vh+14px)]"
        />
        <img
          src={vr}
          alt="Hero Image"
          className="min-w-[80vh] sm:min-w-[30vh] md:min-w-0 md:h-[75vh] md:w-full z-30 fixed bottom-[10px] md:bottom-[calc(16vh+14px)] md:right-[10vw] md:max-w-[90vw] md:max-h-[68vh]"
        />
        <div className="main-heading my-auto md:mt-[calc(35vh)] z-20">
          <h1 className="text-5xl md:text-7xl text-center mb-3 font-light z-50">
            VIRUS 2023
          </h1>
          <p className="text-secondary text-md md:text-3xl hr-lines">
            Breaking Boundaries to Metaverse
          </p>
          <p className="text-secondary text-xs md:text-md text-right">
            NEW REALITIES
          </p>
        </div>
      </div>
    </>
  );
}
