import Images from "./homePage__heroImagesFixed";
import Headings from "./homePage__mainText";
import dottedPattern from "../../../images/dotted-pattern.svg";
import vr from "../../../images/vr.svg";

export default function HomeHero() {
  return (
    <>
      <div
        className="h-[80svh]"
        style={{ backgroundImage: `url(${dottedPattern})` }}
      >
        <div className="h-[60svh] mt-[20svh] top-0 w-full z-20 mx-auto absolute fade-bg-bottom bg-no-repeat"></div>
        <div className="max-w-[918px] mx-auto">
          <div
            style={{
              backgroundImage: `url(${vr})`,
              backgroundSize: "contain",
              backgroundPosition: "10%",
            }}
            className="h-[65svh] top-0 mt-[15svh] w-full max-w-[918px] mx-auto absolute bg-no-repeat"
          ></div>

          <div className="main-heading text-center mt-[35svh] w-[100%]">
            <h1 className="hero-text">VIRUS</h1>
            <div className="inline-block">
              <h2 className="sub-hero-text text-[45px]">
                New Realities: Metaverse
              </h2>
              <p className="text-right uppercase text-md tracking-[0.2em] grad-text ml-auto mt-[-10px]">
                Breaking Boundaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
