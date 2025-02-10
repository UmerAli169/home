"use client";
import { useState } from "react";
import data from "./data.json";

const WhyTinyTribe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 border border-blue-500 rounded-lg bg-white shadow-md">
      <h2 className="text-center text-xl font-bold mb-4">
        WHY TINY TRIBE IS FOR ME
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex items-center justify-between w-full text-left font-semibold text-black"
              onClick={() => toggleAccordion(index)}
            >
              <span>
                {openIndex === index ? "−" : "+"} {item.title}
              </span>
            </button>
            {openIndex === index && item.content && (
              <p className="text-gray-600 mt-2">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTinyTribe;
