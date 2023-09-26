import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
// import Footer from "./components/footer";
// import Navbar from "./components/navbar";
import { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import tailwindStyles from "./styles/app.generated.css";
import scrollbarStyle from "./styles/scrollbar.css";
import useWindowPosition from "./hooks/useWindowPosition";
import stylesheet from "./styles/styles.css";
import reactDrawerStyle from "react-modern-drawer/dist/index.css";
import Footer from "./components/footer";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: reactDrawerStyle },
  { rel: "stylesheet", href: scrollbarStyle },
  { rel: "stylesheet", href: tailwindStyles },
];

// lazy load footer
// const Footer = lazy(() => import("./components/footer"));

export default function App() {
  const scrollPosition = useWindowPosition();
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
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400..900&family=Gugi&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar scrollPosition={scrollPosition} />
        <div className="flex flex-col h-[100svh] overflow-auto scroll-smooth">
          <Outlet context={[scrollPosition]} />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script>
          let ed = document.querySelectorAll(".rsw-ce"); ed.contenteditable =
          "false";
        </script>
      </body>
    </html>
  );
}
export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-center">
          {caught.status} {caught.statusText}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
