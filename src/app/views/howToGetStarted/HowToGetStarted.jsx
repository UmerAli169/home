import React from 'react';
import stepsData from './data.json';
import Wrapper from '../../../components/Wrapper';

const HowToGetStarted = () => {
  return (
    <section className=' mx-auto lg:py-[120px] text-centre py-[48px] bg-[#F4FCFF] clip-path-wave text-center '>
      <Wrapper>
        <div>
          <div className='relative mx-auto  flex items-center justify-between text-center '>
            {/* <img
              src='/svg/howTogetStart/star.svg'
              alt=''
              className='w-[50px] h-[50px] absolute left-[50px] top-[30px]'
            /> */}

            <div className='flex-1 px-6 '>
              <p className='text-[24px] leading-[30px] font-medium lg:text-[48px] lg:leading-[61.8px] lg:font-medium font-lora text-[#212121]'>
                {stepsData.title}
              </p>
              <p className='text-[14px] leading-[20px] font-normal lg:text-[18px] lg:leading-[27.8px] lg:font-medium font-poppins text-[#707070]'>
                {stepsData.description}
              </p>
            </div>

            {/* <img
              src='/svg/howTogetStart/circle.svg'
              alt=''
              className='w-[46px] h-[46px] absolute right-[190px] top-[50px]'
            />

            <img
              src='/svg/howTogetStart/circle.svg'
              alt=''
              className='w-[116px] h-[116px] absolute right-[-10px] bottom-[-10px]'
            /> */}
          </div>

          <div className='flex justify-between   min-h-[375px] items-center mt-8 flex-wrap  '>
            {/* Step 1 */}
            <div className='flex flex-col justify-between items-center max-w-[216px] max-h-[356px] '>
              <div className='relative'>
                <img src='/svg/howTogetStart/1.svg' alt='Open site' className='mx-auto' />
                <img src='/svg/howTogetStart/arrow/a.svg' alt='Open site' className='absolute  min-w-[162px]  hidden lg:block  top-[130%] left-[140%] translate-x-[-50%] translate-y-[-50%]' />

              </div>
              <div className='text-center md:mt-[50px]'>
                <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora' >
                  01 Open site
                </p>
                <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px] leading-[20px] font-poppins'>
                  Open site click on Enroll now button
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='flex flex-col justify-between items-center text-center max-w-[216px] max-h-[356px] '>
              <div>
                <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora'>
                  02 Click on
                </p>
                <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px] leading-[20px] font-poppins'>
                  Click on the Enroll now button
                </p>
              </div>
              <div className='relative text-center md:mt-[50px]'>
              <img src='/svg/howTogetStart/arrow/b.svg' alt='Open site' className='   absolute  min-w-[162px]  hidden lg:block  top-[30%] left-[150%] translate-x-[-50%] translate-y-[-50%]' />


              <img src='/svg/howTogetStart/2.svg' alt='Click on' className='mx-auto' />
              </div>
            </div>

            {/* Step 3 */}
            <div className='flex flex-col justify-between items-center max-w-[216px] max-h-[356px] '>
              <div className='relative'>
                <img src='/svg/howTogetStart/3.svg' alt='Open site' className='mx-auto' />
                <img src='/svg/howTogetStart/arrow/c.svg' alt='Open site' className='absolute  min-w-[162px]  hidden lg:block  top-[130%] left-[140%] translate-x-[-50%] translate-y-[-50%]' />

              </div>
              <div className='text-center md:mt-[50px]'>
                <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora'>
                  01 Open site
                </p>
                <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px] leading-[20px] font-poppins'>
                  Open site click on Enroll now button
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className='flex flex-col justify-between items-center text-center max-w-[216px] max-h-[356px] '>
              <div>
                <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora'>
                  02 Click on
                </p>
                <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px] leading-[20px] font-poppins'>
                  Click on the Enroll now button
                </p>
              </div>
              <div className='text-center md:mt-[50px]'>


              <img src='/svg/howTogetStart/4.svg' alt='Click on' className='mx-auto' />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HowToGetStarted;
