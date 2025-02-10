import React from "react";
import stepsData from "./data.json";

const HowToGetStarted = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{stepsData.title}</h2>
      <p className="text-gray-600 mt-4">{stepsData.description}</p>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {stepsData.steps.map((step, index) => (
          <div key={index} className="text-center max-w-[200px]">
            <div
              className={`w-[80px] h-[80px] flex items-center justify-center rounded-full border-4 border-${step.color}-500 bg-${step.color}-100`}
            >
              <img src={step.icon} alt={step.title} className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mt-4">
              {step.id} {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToGetStarted;
