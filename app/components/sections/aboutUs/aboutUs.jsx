import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 mt-1 mx-6 lg:mx-0">
      <div className="flex flex-col">
        <h4 className="text-3xl underline underline-offset-4 mx-auto text-justify mb-4">
          VIRUS
        </h4>
        <p className="text-justify">
          'VIRUS', an eagerly anticipated event, is organized by the ENIAC club.
          The Annual IT Fiesta is a momentous occasion that celebrates the
          forefront of cutting-edge trends and advancements in the IT industry.
          It serves as a hub for a diverse community, attracting students,
          professionals, and technology enthusiasts from across the region. At
          Bluebells School International, we take immense pride in nurturing
          talent and providing opportunities for students to showcase their
          skills and knowledge. The 'VIRUS' IT Fiesta is a testament to our
          commitment to empowering our students and fostering their enthusiasm
          for technology.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-3xl underline underline-offset-4 mx-auto text-justify mb-4">
          ENIAC
        </h4>
        <p className="text-justify">
ENIAC, the esteemed computer Science club at Bluebells School International, operates as a student-driven initiative, guided by dedicated mentors who foster an environment of innovation and learning. ENIAC, originally denoting Electronic Numerical Integrator and Calculator, transcends its technical definition within our student community and symbolizes the essence of Encoding, Networking, Innovating, Achieving, and Computing epitomizing the profound passion embedded within our team.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
