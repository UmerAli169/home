import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-[16px] lg:px-[120px] container mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;
