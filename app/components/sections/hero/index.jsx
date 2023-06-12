import dottedPattern from "../../../images/dotted-pattern.svg";
import vr from "../../../images/faded-vr.svg";
import Headings from "./homePage__mainText";

export default function HomeHero() {
  return (
    <>
      <div
        className="min-h-[80svh]"
        style={{
          background: `url(${dottedPattern}), url(${vr})`,
          backgroundSize: "contain, 100% 80%",
          backgroundRepeat: "repeat, no-repeat",
          backgroundPosition: "center center, 30% 100%",
        }}
      >
        <div className="max-w-[918px] mx-auto">
          <Headings />
        </div>
      </div>
    </>
  );
}
