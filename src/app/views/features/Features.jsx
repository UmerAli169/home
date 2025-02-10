import React from 'react';
import FeatureCard from '../../../components/heroSection/HeroCard';
import Wrapper from '../../../components/Wrapper';

import features from './data.json';

const Features = () => {
  return (
    <section className='flex flex-col items-center p-[120px]  '>
      <Wrapper>
        <div className=' flex flex-col items-center '>
          <p className='lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px]  lg;font-medium    font-semibold  text-[#212121] '>
            Every child shines bright in the spotlight of learning
          </p>
          <div className='flex flex-wrap justify-center gap-8 mt-8  '>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
