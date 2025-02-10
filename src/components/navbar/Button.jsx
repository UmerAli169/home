import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`rounded-lg drop-shadow-custom font-poppins text-[16px] leading-[24px] font-medium cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
