import React from "react";
import FeatureCard from "../../../components/features/FeaturesCard";
import Wrapper from "../../../components/Wrapper";
import features from "./data.json";

const Features = () => {
  return (
    <section className="flex flex-col items-center p-[120px]">
      <Wrapper>
        <div className="flex flex-col items-center">
          <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] font-semibold text-[#212121] text-center">
            Every child shines bright in the spotlight of learning
          </p>
          <div className="flex flex-wrap justify-between gap-6 mt-8 w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                className="flex-1 min-w-[280px] sm:max-w-[45%] lg:max-w-[30%]"
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
