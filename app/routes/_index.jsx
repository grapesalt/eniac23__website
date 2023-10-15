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
import Events from "../components/sections/events/events";

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
      <SecondarySection heading={"Results"} id={"results"}>
        <iframe
          className="m-10 w-full aspect-video"
          src="https://bluebellsinternational-my.sharepoint.com/:p:/p/adityachaturvedi11872/EURVi_IV0lpFgP57j8BflU4BXJgSn-oThN8ZwZOEsjGpjQ?e=o5E6FV&amp;action=embedview&amp;wdAr=1.7777777777777777"
          frameborder="0"
        >
          This is an embedded{" "}
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>{" "}
          presentation, powered by{" "}
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>
      </SecondarySection>
      <SecondarySection
        tagline={"get to know us"}
        heading={"About Us"}
        children={<AboutUs />}
        id={"about"}
        // className={`min-h-[calc(100svh-52px)] md:min-h-[calc(100svh))]`}
      />

      <SecondarySection
        tagline={"welcome to the show"}
        heading={"Events"}
        children={<Events />}
        id={"events"}
      />

      <SecondarySection
        tagline={"brought to you by our"}
        heading={"Sponsors"}
        children={<Sponsors />}
        id={"sponsors"}
      />

      <SecondarySection
        tagline={"the people behind the scenes"}
        heading={"Our Team"}
        children={<Team />}
        id={"team"}
      />

      <br></br>
      <main id="contact">
        <Footer id={"contact"} />
      </main>
    </>
  );
}
