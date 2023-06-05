import Images from "./homePage__heroImagesFixed";
import Headings from "./homePage__mainText";

export default function HomeHero() {
  return (
    <>
      <div className="flex h-full justify-center overflow-hidden">
        <Images />
        <div className="main-heading my-auto md:mt-[calc(35vh)] z-20">
          <Headings />
        </div>
      </div>
    </>
  );
}
