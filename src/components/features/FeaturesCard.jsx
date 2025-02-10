import React from "react";

const HeroCard = ({ icon, title, description, className = "" }) => {
  return (
    <div
      className={`flex flex-col p-4 sm:px-8 sm:pt-8 sm:pb-4 gap-4 sm:gap-[33px] items-start ${className}`}
    >
      <div className="">
        <img src={icon} alt={title} className="w-[40px] h-[40px]" />
      </div>
      <div className=" flex flex-col items-start justify-start">
        <p className="lg:text-[24px] lg:leading-[30px] text-[16px] leading-[30px] font-medium text-[#232323]">
          {title}
        </p>
        <p className="lg:text-[14px] text-left lg:leading-[21px] text-[12px] leading-[18px] font-normal text-[#9AA0A6]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
