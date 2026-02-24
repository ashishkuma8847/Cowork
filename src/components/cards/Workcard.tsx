type Props = {
  logo?: string;
  title?: string;
  text?: string;
//   worktitle?: string;
//   workparagraph?: string;
};

const WorkCard = ({
  logo,
  title,
  text,
//   worktitle,
//   workparagraph,
}: Props) => {
  return (
    <>
      {/* {worktitle && <h1>{worktitle}</h1>}
      {workparagraph && <p>{workparagraph}</p>} */}

      <div className="bg-lightGray max-w-[410px] border border-dark-gray w-full rounded-[24px] p-5 lg:p-[30px] shadow-sm">
        {logo && (
          <img
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            src={logo}
            alt={title || "logo"}
          />
        )}

        {title && (
          <h5 className="lg:pb-4 py-5 lg:pt-[30px] font-inter font-medium text-base md:text-[24px] leading-[130%] line-clamp-2">
            {title}
          </h5>
        )}

        {text && (
          <p className="text-darkGray text-sm lg:text-lg leading-[130%] font-inter font-medium line-clamp-2">
            {text}
          </p>
        )}
      </div>
    </>
  );
};

export default WorkCard;