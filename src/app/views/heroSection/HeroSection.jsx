import React from 'react';
import HeroCard from '../../../components/heroSection/HeroCard';
import Wrapper from '../../../components/Wrapper';
import heroData from './data.json';
import Button from '../../../components/navbar/Button';

const Hero = () => {
  return (
    <section className=' relative min-h-screen flex flex-col items-center  text-center bg-[#FFF7F7] overflow-hidden font-lora'>
      <img src='/svg/herosection/girtsPic.svg' alt='Girl' className='absolute top-[70px] left-[370px] w-[124px] h-[129px]' />
      <img src='/svg/herosection/star2.svg' alt='Star'  className='absolute top-[200px] left-[630px] w-[40px] h-[40px]' />
      <img src='/svg/herosection/star.svg' alt='Star' className='absolute top-[160px] right-[480px] w-[40px] h-[40px]' />
      <img src='/svg/herosection/arrow.svg' alt='Arrow' className='absolute right-[520px] top-[327px] w-[183.01px] h-[196px]' />

      <Wrapper>
        <div className='flex flex-col items-center justify-center text-center '>
          <div className='flex flex-col items-center justify-center text-center  max-w-[880px]  mt-[100px]'>
            <p className='lg:text-[60px] lg:leading-[76.8px] text-[24px] leading-[30px]  font-semibold  text-[#212121]'>
              Every child shines bright in the spotlight of learning
            </p>
            <p className='lg:text-[19px] lg:leading-[28.5px] text-[`2px] leading-[18px]  font-normal font-poopins text-[#424242]  bg-[#FFFFFF] lg:px-[20px] px-[16px]  py-[10px]'>
              Transform Playtime into Powerful Learning Moments
            </p>

            <div className='mt-6 flex gap-4'>
              <Button text='Enroll now' className='bg-[#FF6666]  text-[#FFFFFF]  ' />
              <Button text='Book a visit' className='bg-[#FFECEC] text-[#3A3A3A]  ' />
            </div>
          </div>

          <div className='mt-[110px] w-full '>
            <div className='flex gap-4 overflow-x-auto lg:overflow-visible scrollbar px-4 lg:px-0 '>
              {heroData.cards.map((card, index) => (
                <div key={index} className='w-[265px] lg:w-auto flex-shrink-0'>
                  <HeroCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
