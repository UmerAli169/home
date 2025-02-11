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
    <section className=' relative max-h-[791px] h-full flex flex-col   text-center py-[38px] bg-[#FFF7F7] overflow-hidden font-lora'>
     {/* <div>
     <img src='/svg/herosection/girtsPic.svg' alt='Girl' className='xl:ml-[20%] lg:ml-[18%] md:ml-[15%] sm:ml-[12%] ml-[5%]' />
      <img src='/svg/herosection/star2.svg' alt='Star'  className=' xl:ml-[20%] lg:ml-[18%] md:ml-[15%] sm:ml-[12%] ml-[5%] top-[200px] left-[630px] w-[40px] h-[40px]' />
      <img src='/svg/herosection/star.svg' alt='Star' className='xl:right-[320px]  top-[160px] right-[30px]  sm:right-[10px] absolute md:right-[50px] lg:right-[150px] w-[40px] h-[40px]' />
      <img src='/svg/herosection/arrow.svg' alt='Arrow' className='absolute right-[520px] top-[327px] w-[183.01px] h-[196px]' />
     </div> */}


        <div className='flex flex-col items-center justify-center text-center  ] overflow-hidden'>
          <div className='flex flex-col items-center justify-center text-center  max-w-[880px]  '>
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
            <div className='flex gap-4 px-4 lg:px-0 animate-scroll w-max'>
              {[...heroData.cards, ...heroData.cards].map((card, index) => (
                <HeroCard
                  key={index}
                  {...card}
                  className='justify-center max-w-[320px] shadow-md lg:rounded-[32px] rounded-[16px]  bg-[#FFFFFF] flex-shrink-0'
                />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
