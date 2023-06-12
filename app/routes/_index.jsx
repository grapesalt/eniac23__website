// export const meta = () => {
//   return [
//     { title: "hello" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import HomeHero from "../components/sections/hero";
import Sponsors from "../components/sections/sponsors/sponsors";
import SecondarySection from "../components/sections/templates/secondarySection";

export default function Index() {
  return (
    <>
      <HomeHero />
      <SecondarySection
        tagline={"seem who is backing us"}
        heading={"Our Sponsors"}
        children={<Sponsors />}
      />
    </>
  );
}
