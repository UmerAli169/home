import React from 'react';
import FeatureCard from '../../../components/features/FeaturesCard';
import Wrapper from '../../../components/Wrapper';
import features from './data.json';

const Features = () => {
  return (
    <section className='flex flex-col items-center  py-[120px] '>
      <Wrapper>
        <div className='flex flex-col items-center    '>
          <div className='flex flex-col items-center justify-center text-center   max-w-[702px]  '>
            <p className='  lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] font-lora font-semibold lg:font-medium text-[#212121] text-center'>
              We foster curiosity and cultivate a love for learning in children
            </p>
          </div>
          <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[30px] w-full  pt-[60px]   '>
            
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                className="gap-20 w-full sm:max-w-[256px] shadow-[8px] drop-shadow-custom bg-[#FFFFFF]"
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
