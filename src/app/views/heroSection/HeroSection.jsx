import React from 'react';
import HeroCard from '../../../components/heroSection/HeroCard';
import Wrapper from '../../../components/Wrapper';
import heroData from './data.json';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center text-center bg-[#FFF7F7] overflow-hidden'>
      <img src='/svg/herosection/girtsPic.svg' alt='Girl' className='absolute top-20 left-10 w-[124px] h-[129px]' />
      <img src='/svg/herosection/star2.svg' alt='Star' className='absolute top-[345px] left-[10px] w-[40px] h-[40px]' />
      <img src='/svg/herosection/star.svg' alt='Star' className='absolute top-20 right-16 w-[40px] h-[40px]' />
      <img src='/svg/herosection/arrow.svg' alt='Arrow' className='absolute right-10 top-1/2 w-[50px] h-[50px]' />

      <Wrapper>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-5xl lg:text-6xl font-lora font-bold leading-tight max-w-4xl'>
            Every child shines bright in the spotlight of learning
          </h1>
          <p className='text-lg font-poppins text-gray-700 mt-3'>
            Transform Playtime into Powerful Learning Moments
          </p>

          <div className='mt-6 flex gap-4'>
            <button className='bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium'>
              Enroll Now
            </button>
            <button className='border border-red-500 text-red-500 px-6 py-3 rounded-full text-lg font-medium'>
              Book a Visit
            </button>
          </div>

          <div className='mt-12 w-full overflow-hidden lg:overflow-visible'>
            <div className='flex gap-6 w-max mx-auto'>
              {heroData.cards.map((card, index) => (
                <HeroCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
