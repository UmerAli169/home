import React from "react";
import data from "./data.json";

const InstagramSection = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      <h2 className="text-[your-title-font-size] font-[your-title-font] text-black">
        Follow Us on Instagram
      </h2>
      <a
        href="https://www.instagram.com/tinytribe"
        className="text-[your-link-font-size] font-[your-link-font] text-red-500"
      >
        @tinytribe
      </a>
      <div className="w-full overflow-x-auto mt-6">
        <div className="flex gap-4 min-w-max">
          {data.instagramImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Instagram Post"
              className="w-[your-img-width] h-[your-img-height] rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
