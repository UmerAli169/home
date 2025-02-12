import React from 'react';
import stepsData from './data.json';
import Wrapper from '../../../components/Wrapper';

const HowToGetStarted = () => {
  return (
    <section className=' mx-auto lg:py-[120px] text-centre py-[48px] bg-[#F4FCFF] text-center '>
      <Wrapper>
        <div>
          <div className='relative mx-auto  flex items-center justify-between text-center'>
            {/* <img
              src='/svg/howTogetStart/star.svg'
              alt=''
              className='w-[40px] h-[40px] absolute left-[100px] top-[30px]'
            /> */}

            <div className='flex-1 px-6'>
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

          <div className='flex justify-center items-center gap-12 mt-8 flex-wrap'>
            {/* Step 1 */}
            <div className='text-center max-w-[242px]  '>
              <img src='/svg/howTogetStart/1.svg' alt='Open site' className='mx-auto' />
              <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora '>
                01 Open site
              </p>
              <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px]  leading-[20px] font-poppins'>
                Open site click on Enroll now button
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center max-w-[242px]  '>
              <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora   '>
                02 Click on
              </p>
              <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px]  leading-[20px] font-poppins'>
                Click on the Enroll now button
              </p>
              <img src='/svg/howTogetStart/2.svg' alt='Click on' className='mx-auto' />
            </div>

            {/* Step 3 */}
            <div className='text-center max-w-[242px]  '>
              <img src='/svg/howTogetStart/3.svg' alt='Click Confirm' className='mx-auto' />
              <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora '>
                03 Click Confirm
              </p>
              <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px]  leading-[20px] font-poppins'>
                Click on the confirm button
              </p>
            </div>

            {/* Step 4 */}
            <div className='text-center max-w-[242px]  '>
              <p className='lg:text-[32px] text-[20px] lg:leading-[48px] leading-[25px] lg:font-poppins font-medium text-[#212121] font-lora '>
                04 Wait
              </p>
              <p className='lg:text-[16px] text-[14px] lg:font-semibold font-normal text-[#858585] lg:leading-[24px]  leading-[20px] font-poppins'>
                Wait for WhatsApp to open and leave your personal information
              </p>
              <img src='/svg/howTogetStart/4.svg' alt='Wait' className='mx-auto' />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HowToGetStarted;
