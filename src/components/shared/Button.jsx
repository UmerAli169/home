import React from "react";

const Button = ({ text, className, onClick ,tag}) => {
  return (
    <button
      className={`rounded-[10px]  py-[13px] px-[20px]  lg:w-[142px]  drop-shadow-custom font-poppins text-[16px] leading-[24px] font-medium cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
