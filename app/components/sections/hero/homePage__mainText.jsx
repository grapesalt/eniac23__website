import ActionButton from "../../buttons/actionButton";

const Headings = () => {
  return (
    <>
      <div className="main-heading text-center mt-[45svh] w-[100%]">
        <h1 className="hero-text text-[52px] sm:text-[75px] md:text-[100px]">
          VIRUS 2023
        </h1>
        <div className="inline-block">
          <h2 className="sub-hero-text text-[14px] md:text-[36px]">
            New Realities : Breaking Boundaries
          </h2>
          <p className="font-semibold text-right uppercase text-[12px] md:text-2xl tracking-widest md:tracking-[0.1em] grad-text ml-auto mt-[-5px] md:mt-[-10px]">
            to metaverse
          </p>
        </div>
        <div className="z-50">
          <ActionButton
            text={"enter now"}
            className={
              "w-[160px] mx-auto hero-button z-50 md:py-[9px] text-sm md:text-md mt-2"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Headings;
