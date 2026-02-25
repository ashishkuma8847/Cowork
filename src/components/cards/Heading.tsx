type HeadingProps = {
  title?: string;
  pagragraph?: string;
  cMain?: string;
  cParagraph?: string;
  cTitle?: string;
  cTitleMain?: string;
};

const Heading = ({title,pagragraph,cMain,cParagraph,cTitle,cTitleMain}:HeadingProps) => {
  return (
    <>
      <div className={` ${cMain??""} flex flex-col gap-3 md:gap-6 font-inter justify-center items-center  ${cMain??""}`}>
        <div className={`  flex w-full justify-center lg:justify-between items-start ${cTitleMain??""}`}>
          <img
            className="lg:block hidden py-[22px] w-[164px]"
            src="/svg/leftlinebar.svg"
            alt="leftlinebar"
          />
          <h4 className={`  md:font-semibold text-center font-medium font-inter text-[22px] md:text-[43px] leading-[130%] ${cTitle??""}`}>
            {title??""}
          </h4>
          <img
            className="lg:block py-[22px] hidden w-[164px]"
            src="/svg/rightlinebar.svg"
            alt="rightlinebar"
          />
        </div>
        <p className={`text-center text-[14px] font-inter md:text-xl leading-[130%] text-darkGray  ${cParagraph ?? ""}`}>
          {pagragraph??""}
        </p>
      </div>
    </>
  );
};

export default Heading;
