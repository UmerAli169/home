import React from 'react';
import learningData from './data.json';
import Button from '../../../components/shared/Button';
import Wrapper from '../../../components/Wrapper';

const LearningSection = () => {
  return (
    <Wrapper>
      <section className='lg:py-[120px] py-[48px] flex justify-center items-center'>
        <div className='flex flex-col lg:flex-row   items-center sm:items-start   '>
          <div className='hidden max-w-[379px] lg:flex flex-col gap-2 w-full lg:w-1/3 '>
            {learningData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className='rounded-[32px] w-full h-full object-cover'
              />
            ))}
          </div>

          <div className='w-full flex flex-col items-start justify-start p-4 max-w-[452px]'>
            <p className='lg:text-[46px] lg:leading-[58px] text-[24px] leading-[30px] font-semibold lg:font-normal font-lora text-[#212121]'>
              {learningData.title}
            </p>
            <p className='  lg:text-[18px] lg:leading-[27px] text-[14px] leading-[21px] font-poppins   font-normal lg:font-medium text-[#858585] '>
              {learningData.description}
            </p>
            <div className='mt-6 flex flex-col md:flex-row items-center gap-4 w-full'>
              <Button text='Enroll now' className='bg-[#FF6666] text-[#FFFFFF] px-4 py-2 w-full sm:w-auto' />

              <span className='flex items-center gap-2 text-[#4B4B4B] bg-[#FFECEC] font-semibold lg:px-[20px] lg:py-[13px] w-full sm:w-auto justify-center py-3  px-3 rounded-[10px]'>
                <img src='/svg/whatapp.svg' alt='WhatsApp' className='w-[24px] h-[24px]' />
                {learningData.phone}
              </span>
            </div>
          </div>

          <div className='w-full lg:w-1/3 w-full sm:max-w-[322px] flex flex-col gap-6  '>
            <div className='bg-[#E1F6FF] p-4 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Next Class</h3>
              {Object.entries(learningData.schedule).map(([day, time]) => (
                <p key={day}>
                  {day}: <span className='font-medium'>{time}</span>
                </p>
              ))}
            </div>

            <div className='bg-[#E1F6FF] p-4 rounded-lg shadow-md '>
              <h3 className='text-lg font-semibold mb-2'>Our Location</h3>
              <img
                src={learningData.mapImage}
                alt='Location Map'
                className='w-full h-[150px] rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default LearningSection;
