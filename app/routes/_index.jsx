// export const meta = () => {
//   return [
//     { title: "hello" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import AboutUs from "../components/sections/aboutUs/aboutUs";
import HomeHero from "../components/sections/hero";
import Sponsors from "../components/sections/sponsors/sponsors";
import Team from "../components/sections/team/team";
import SecondarySection from "../components/sections/templates/secondarySection";

export default function Index() {
  return (
    <>
      <HomeHero />
      <SecondarySection
        tagline={"see who is backing us"}
        heading={"Our Sponsors"}
        children={<Sponsors />}
      />
      <SecondarySection
        tagline={"get to know us"}
        heading={"About Us"}
        children={<AboutUs />}
      />
      <SecondarySection
        tagline={"the people behind the scenes"}
        heading={"Our Team"}
        children={<Team />}
      />
    </>
  );
}
