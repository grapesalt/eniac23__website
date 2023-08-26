import { useLocation } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { BarLoader } from "react-spinners";
import ContactInfoItem from "./contactInfo";

const ClientOnly = ({ children }) => {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
};

const Footer = () => {
  const path = useLocation().pathname;
  const [prevPath, setPrevPath] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    if (
      ["/", "/contact"].includes(path) &&
      !["/", "/contact"].includes(prevPath)
    ) {
      setIframeLoaded(false);
    }
    setPrevPath(path);
  }, [path]);
  return (
    <>
      <div
        className={`flex flex-col py-10 footer-bg ${
          path === "/contact" &&
          `items-center justify-center align-middle min-h-[100svh]`
        }`}
      >
        {/* <hr className="border-[#3b3b3b] border-3" /> */}
        <div className="flex flex-col content max-w-[768px] mt-10 mx-auto w-full">
          <div className="flex flex-col md:flex-row mx-6 md:mx-auto">
            <ContactInfoItem
              text={"+91-987-654-3219"}
              icon={<BsFillTelephoneFill />}
              href={"tel:+91-987-654-3219"}
            />
            <div className="mt-5 md:mr-6"></div>
            <ContactInfoItem
              text={"contactus.eniac23@gmail.com"}
              href={"mailto:contactus.eniac23@gmail.com"}
              icon={<IoMail />}
            />
          </div>
          {["/", "/contact"].includes(path) && (
            <div className="flex flex-col mt-5 mx-5 rounded-lg">
              <iframe
                onLoad={() => {
                  setIframeLoaded(true);
                }}
                className={`w-[calc(100lvw-40px)]  rounded-lg mx-auto ${
                  path === "/contact"
                    ? `min-h-[200px] md:min-h-[300px] h-[50svh] md:mb-10 md:w-[650px] `
                    : `min-h-[250px] md:w-[550px]`
                }`}
                id="gmap_canvas"
                loading="lazy"
                src="https://maps.google.com/maps?width=520&amp;height=408&amp;hl=en&amp;q=Bluebells%20School%20International%20New%20Delhi+(Bluebells%20School%20International)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              {!iframeLoaded && (
                <>
                  <div className="mx-auto text-center md:mt-0 mt-[-100px]">
                    <BarLoader color="#d8d8d8" />
                    <p className="mt-1">Loading...</p>
                  </div>
                </>
              )}
            </div>
          )}
          <p
            className={`text-center text-sm drop-shadow-lg mt-2 mb-2 ${
              path === "/contact" && `relative bottom-0 self-center`
            }`}
          >
            &#169; ENIAC CLUB
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
