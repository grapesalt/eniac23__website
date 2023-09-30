// export const meta = () => {
//   return [
//     { title: "hello" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import { useOutletContext } from "@remix-run/react";
import AboutUs from "../components/sections/aboutUs/aboutUs";
import HomeHero from "../components/sections/hero";
import Sponsors from "../components/sections/sponsors/sponsors";
import Team from "../components/sections/team/team";
import SecondarySection from "../components/sections/templates/secondarySection";
import Footer from "../components/footer";

export default function Index() {
  return (
    <>
      <HomeHero />
      {/* <SecondarySection
        tagline={"see who is backing us"}
        heading={"Our Sponsors"}
        children={<Sponsors />}
        id={"sponsors"}
      /> */}
      <SecondarySection
        tagline={"get to know us"}
        heading={"About Us"}
        children={<AboutUs />}
        id={"about"}
        // className={`min-h-[calc(100svh-52px)] md:min-h-[calc(100svh))]`}
      />
      <SecondarySection
        tagline={"the people behind the scenes"}
        heading={"Our Team"}
        children={<Team />}
        id={"team"}
      />
      <main id="contact">
        <Footer id={"contact"} />
      </main>
    </>
  );
}
