import React from "react";
import data from "./data.json";
 
const InstagramSection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-[60px] ">
    <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
      Follow Us on Instagram
    </p>
    <a className="lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] font-poppins font-normal lg:font-medium text-[#FF6666]">
      @tinytribe
    </a>
  
    {/* Centered Image Section */}
    <div className="w-full overflow-x-auto mt-6">
      <div className="flex justify-center gap-4 min-w-full">
        {data.instagramImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Instagram Post"
            className="w-[192px] h-[229px] rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default InstagramSection;
