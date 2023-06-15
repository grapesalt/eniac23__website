import { useLocation } from "@remix-run/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import ContactInfoItem from "./contactInfo";

const Footer = () => {
  const cl = useLocation();
  return (
    <>
      <div className="flex flex-col py-10 footer-bg min-h-[200px]">
        {/* <hr className="border-[#3b3b3b] border-3" /> */}
        <div className="flex flex-col content max-w-[768px] mt-10 mx-auto w-full">
          <div className="flex flex-col md:flex-row mx-6 md:mx-auto">
            <ContactInfoItem
              text={"+91-987-654-3219"}
              icon={<BsFillTelephoneFill />}
            />
            <div className="mt-5 md:mr-6"></div>
            <ContactInfoItem
              text={"contactus.eniac23@gmail.com"}
              icon={<IoMail />}
            />
          </div>
          {(cl.pathname === "/" || cl.pathname === "/contact") && (
            <div className="flex mt-5 mx-5 rounded-lg">
              <iframe
                className="w-[calc(100lvw-40px)] md:w-[550px] min-h-[250px] rounded-lg mx-auto"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=408&amp;hl=en&amp;q=Bluebells%20School%20International%20New%20Delhi+(Bluebells%20School%20International)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          )}
          <p
            className={`text-center text-sm drop-shadow-lg mt-2 ${
              cl.pathname === "/contact" && `fixed bottom-10 self-center`
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
