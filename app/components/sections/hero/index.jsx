import dottedPattern from "../../../images/dotted-pattern.svg";
import vr from "../../../images/faded-vr.svg";
import Headings from "./homePage__mainText";

export default function HomeHero() {
  return (
    <>
      <div
        className="min-h-[70svh] md:min-h-[100svh] hero__bg-config"
        style={{
          background: `url(${dottedPattern}), url(${vr})`,
        }}
      >
        <div className="max-w-[918px] mx-auto">
          <Headings />
        </div>
      </div>
    </>
  );
}
