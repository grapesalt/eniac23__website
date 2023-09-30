import ActionButton from "../../buttons/actionButton";

const Headings = () => {
  return (
    <>
      <div className="main-heading text-center mt-[39svh] sm:mt-[42svh] w-[100%]">
        <h1 className="hero-text text-[48px] sm:text-[78px] md:text-[100px] lg:text-[130px]">
          VIRUS 2023
        </h1>
        <div className="inline-block ">
          <h2 className="sub-hero-text text-[14px] sm:text-[20px] md:text-[28px] lg:text-[36px]">
            New Realities: Breaking Boundaries
          </h2>
          <p className="text-right uppercase md:capitalize text-[10px] font-semibold md:font-normal sm:text-[14px] md:text-[18px] lg:text-[25px] tracking-widest md:tracking-[0.1em] grad-text ml-auto mt-[-5px] md:mt-[-10px]">
            to metaverse
          </p>
        </div>
        <div className="z-50">
          <ActionButton
            text={"enter now"}
            link="/events/meme-o-mania"
            className={
              "w-[125px] sm:w-[160px] mx-auto hero-button z-50 py-[6px] md:py-[9px] text-xs md:text-md mt-2"
            }

          />
        </div>
      </div>
    </>
  );
};

export default Headings;
