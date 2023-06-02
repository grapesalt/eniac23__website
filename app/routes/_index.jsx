// export const meta = () => {
//   return [
//     { title: "hello" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import HomeHero from "../components/sections/hero";

export default function Index() {
  return (
    <>
      <HomeHero />
    </>
  );
}
