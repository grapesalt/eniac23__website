import React from "react";
import ContactInfoItem from "./contactInfo";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-10 footer-bg">
        {/* <hr className="border-[#3b3b3b] border-3" /> */}
        <div className="flex flex-col content max-w-[768px] mt-10 mx-auto">
          <div className="flex flex-col md:flex-row mx-auto">
            <ContactInfoItem text={"+91-987-654-3219"} />
            <div className="mt-5 md:mr-6"></div>
            <ContactInfoItem text={"contactus.eniac23@gmail.com"} />
          </div>
          <div className="flex mt-5 mx-10 rounded-lg">
            <iframe
              className="w-[calc(100lvw-80px)] min-h-[400px] rounded-lg"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=408&amp;hl=en&amp;q=Bluebells%20School%20International%20New%20Delhi+(Bluebells%20School%20International)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
