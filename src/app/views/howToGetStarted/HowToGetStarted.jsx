import React from "react";
import stepsData from "./data.json";
import Wrapper from '../../../components/Wrapper';

const HowToGetStarted = () => {
  return (
    <section className=" mx-auto lg:py-[120px] text-centre py-[48px] bg-[#F4FCFF] text-center ">
      <Wrapper>
        <div >

        
        <div className="text-center max-w-[683px] mx-auto ">
            <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
            {stepsData.title}
            </p>
            <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]">
            {stepsData.description}            </p>
          </div>
     

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
      </div></div></Wrapper>
    </section>
  );
};

export default HowToGetStarted;
