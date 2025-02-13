"use client";
import React, { useEffect, useRef } from "react";
import data from "./data.json";

const InstagramSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    let direction = 1;

    const autoScroll = () => {
      if (slider) {
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          direction = -1;
        } else if (scrollAmount <= 0) {
          direction = 1;
        }
        scrollAmount += direction * 2;
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 50);

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => {
      setInterval(autoScroll, 50);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center py-[48px] px-[12px]">
      <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-medium font-semibold font-lora text-[#212121]">
        Follow Us on Instagram
      </p>
      <a className="lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] font-poppins font-normal lg:font-medium underline text-[#FF6666]">
        @tinytribe
      </a>

      <div className="w-full overflow-hidden mt-6">
        <div ref={sliderRef} className="flex justify-center gap-[12px] min-w-full overflow-x-auto no-scrollbar">
          {[...data.instagramImages, ...data.instagramImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Instagram Post"
              className="w-[192px] h-[229px] rounded-[12px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
