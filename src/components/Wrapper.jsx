import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-[16px] lg:px-[100px] w-full mx-auto  ">
      {children}
    </div>
  );
};

export default Wrapper;
