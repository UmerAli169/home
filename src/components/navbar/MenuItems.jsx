import React from "react";

const MenuItem = ({ label, enabled = false }) => {
  return (
    <li className="relative">
      <button className={`text-[16px] leading-[24px] font-medium
${enabled ? "text-red-500 font-semibold" : "text-black"}`}>
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
