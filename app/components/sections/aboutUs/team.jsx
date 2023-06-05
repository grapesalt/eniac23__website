import React from "react";
import PageHeading from "../../pageHeading";
import Layout from "../../aboutSectionsLayout";

const Team = () => {
  return (
    <>
      <PageHeading title={"Our Team"} eid={"team"} />
      <Layout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
          justo sed orci luctus efficitur. Etiam sed lectus eget eros luctus
          volutpat quis ut neque. Morbi at ligula vel velit luctus dapibus a in
          leo. Nunc consequat odio leo. Sed sed pulvinar metus. Aenean quis
          dolor mattis, ultricies elit sollicitudin, elementum elit.
        </p>
        <p>
          Cras vitae mollis velit, nec efficitur odio. Phasellus semper turpis
          vitae mattis lobortis. Vivamus ultrices, tortor sit amet placerat
          aliquet, dui elit interdum nulla, at bibendum arcu mauris ut purus.
          Nullam sit amet efficitur neque. Vivamus facilisis facilisis dolor,
          quis pretium dui sollicitudin sed. Quisque massa quam, eleifend nec
          lectus at, mattis convallis quam. Ut eu sapien nec neque lacinia
          volutpat vel in tellus.
        </p>
        <p>
          Maecenas lobortis ut est in semper. Quisque laoreet velit et magna
          iaculis commodo. Cras molestie tempus accumsan. Etiam pretium pretium
          euismod. Ut ultricies euismod sapien, nec rutrum mi porttitor quis.
          Vivamus aliquet enim ligula, eget viverra ipsum venenatis in. Vivamus
          dapibus lorem vel suscipit tempor. Sed sodales volutpat erat, eu
          fermentum eros mollis mattis. Nunc dignissim eu mauris a tristique.
        </p>
      </Layout>
    </>
  );
};

export default Team;
