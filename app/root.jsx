import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./styles/app.generated.css";
import Navbar from "./components/navbar";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>VIRUS 2023 | ENIAC</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gugi&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex flex-col h-screen">
          <div className="content-window md:my-auto flex md:flex-col flex-col">
            <div className="mx-auto overflow-y-hidden md:border-[4px] border-[#b9b9b9] md:rounded-2xl md:h-[75vh] height-mobile md:w-[90vw] w-screen md:bg-[#320C50] bg-[#0a0524] max-w-[1100px]">
              <Outlet />
            </div>
            <div className="mx-auto md:mt-4 md:border-[4px] border-[#b9b9b9] md:rounded-xl md:h-[7vh] h-[40px] md:w-[90vw] w-screen md:shadow-none  nav-shadow md:bg-[#320C50] bg-[#1e072f] max-w-[1100px] z-20">
              <Navbar />
            </div>
          </div>
          <h1 className="text-[sm] gugi tracking-[0.5em] md:absolute md:bottom-4 text-center w-screen element-hidden md:not-hidden">
            ENIAC
          </h1>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
