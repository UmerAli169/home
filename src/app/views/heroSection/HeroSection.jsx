'use client';
import React from 'react';
import HeroCard from '../../../components/heroSection/HeroCard';
import heroData from './data.json';
import Button from '../../../components/shared/Button';
import { useEffect, useRef } from 'react';

const Hero = () => {
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
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(autoScroll, 50);

    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => {
      setInterval(autoScroll, 50);
    });

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='  relative max-h-[791px] h-full flex flex-col   text-center pb-[80px] bg-[#FFF7F7] overflow-hidden font-lora'>
      <div className='flex flex-col items-center justify-center text-center  ]  '>
        <div className='container relative pt-[48px] lg:pt-[80px]'>
          <img
            src='/svg/herosection/girtsPic.svg'
            alt='Girl'
            className='relative lg:absolute lg:top-[38px] left-0 w-[60px] lg:w-[125px]'
          />
          <div className='pb-[83px] relative flex flex-col items-center justify-center text-center  max-w-[880px] mx-auto '>
            <p className='lg:text-[60px] lg:leading-[76.8px] text-[24px] leading-[30px] font-lora font-semibold  text-[#212121]'>
              Every child shines bright in the spotlight of learning
            </p>
            <p className='lg:text-[19px] lg:leading-[28.5px] text-[`2px] leading-[18px]  font-normal font-poopins text-[#424242]  bg-[#FFFFFF] lg:px-[20px] px-[16px]  py-[10px]'>
              Transform Playtime into Powerful Learning Moments
            </p>

            <div className='mt-6 flex gap-4'>
              <Button text='Enroll now' className='bg-[#FF6666]  text-[#FFFFFF]  ' />
              <Button text='Book a visit' className='bg-[#FFECEC] text-[#3A3A3A]  ' />
            </div>
            <img
              src='/svg/herosection/star2.svg'
              alt='Star'
              className='w-[40px] hidden lg:inline-block left-0 absolute'
            />
            <img
              src='/svg/herosection/smile.svg'
              alt='smile'
              className='md:w-[53px]  lg:w-[73px] xl:w-[73px] 2xl:w-[73px] lg:top-[16px] w-[25px] lg:right-[-8%]  md:right-[0%] md:top-[-25px] right-[-5%] top-[-6px] absolute'
            />
            <img
              src='/svg/herosection/star.svg'
              alt='Star'
              className='md:w-[40px]  lg:w-[40px] xl:w-[40px] 2xl:w-[40px] lg:top-[86px] w-[16px] right-0   top-[20px] absolute'
            />
            <img
              src='/svg/herosection/arrow.svg'
              alt='Arrow'
              className='hidden lg:inline-block w-[183.01px] absolute bottom-[-40px] z-2 right-[30px]'
            />
          </div>
        </div>

        <div className='w-full relative z-3'>
          <div className='flex gap-4 px-4 lg:px-0 animate-scroll w-max'>
            {[...heroData.cards, ...heroData.cards].map((card, index) => (
              <HeroCard
                key={index}
                {...card}
                className='justify-center max-w-[320px] shadow-md lg:rounded-[32px] rounded-[16px] shadow-custom-dark bg-[#FFFFFF] flex-shrink-0'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
