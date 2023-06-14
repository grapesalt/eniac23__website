import dottedPattern from "../../../images/dotted-pattern.svg";
import vr from "../../../images/faded-vr.svg";
import Headings from "./homePage__mainText";

export default function HomeHero() {
  return (
    <>
      <div
        className="min-h-[80svh] md:min-h-[100svh]"
        style={{
          background: `url(${dottedPattern}), url(${vr})`,
          backgroundSize: "contain, 100% 70%",
          backgroundRepeat: "repeat, no-repeat",
          backgroundPosition: "center center, 30% 50%",
        }}
      >
        <div className="max-w-[918px] mx-auto">
          <Headings />
        </div>
      </div>
    </>
  );
}
