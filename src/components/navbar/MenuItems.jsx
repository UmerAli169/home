import React from "react";

const MenuItem = ({ label, index, totalItems }) => {
  const isLogin = label.toLowerCase() === "login";
  const isHome = label.toLowerCase() === "home";

  return (
    <li className={`relative w-full ${isLogin ? "md:hidden" : ""}`}>
      <button className={`flex items-center space-x-2 text-[16px] leading-[24px] font-medium w-full text-left 
        ${isHome ? "md:text-[#FF6666] md:font-semibold text-black" : ""}
        ${isLogin ? "text-[#FF6666] font-semibold" : "text-black"}`}>
        
        {isLogin && <img src="/svg/navbar/phone.svg" alt="Login Icon" className="w-[16px] h-[16px]  " />}

        <span>{label}</span>
      </button>

      {index !== totalItems - 1 && <div className="border-b border-[#E9E9E9] mt-[16px] md:hidden"></div>}
    </li>
  );
};

export default MenuItem;
