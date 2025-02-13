import React from 'react';
import learningData from './data.json';
import Button from '../../../components/shared/Button';
import Wrapper from '../../../components/Wrapper';

const LearningSection = () => {
  return (
    <Wrapper>
     
        <div className=' lg:py-[120px] py-[48px] flex   flex-col lg:flex-row justify-center sm:justify-around   items-center lg:items-start   '>
          <div className='hidden  lg:flex flex-col gap-2  '>
            {learningData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className='rounded-[32px] w-full max-w-[379px] 2xl:max-w-[579px] h-full object-cover'
              />
            ))}
          </div>

          <div className='w-full flex flex-col items-start justify-start lg:max-w-[452px] 2xl:max-w-[579px] md:px-[32px] '>
            <p className='lg:text-[46px] lg:leading-[58px] text-[24px] leading-[30px]   font-semibold lg:font-medium font-lora text-[#212121]'>
              {learningData.title}
            </p>
            <div>
              <p className='  lg:text-[18px] lg:leading-[27px] text-[14px] leading-[21px] font-poppins   font-normal lg:font-medium text-[#858585] '>
                {learningData.description}
              </p>
              <div className=' flex flex-col md:flex-row items-center gap-4  py-[13px] w-full' >
                <Button text='Enroll now' className='bg-[#FF6666] text-[#FFFFFF] px-4 py-2 w-full sm:w-auto' />
                <span className='flex items-center gap-2 text-[#4B4B4B] bg-[#FFECEC] font-semibold lg:px-[20px] lg:py-[13px]  w-full sm:w-auto justify-center py-3  px-3 rounded-[10px]'>
                  <img src='/svg/whatapp.svg' alt='WhatsApp' className='w-[24px] h-[24px]' />
                  {learningData.phone}
                </span>
              </div>
            </div>
          </div>

          <div className='w-full mt-[30px] md:mt-[62px] lg:w-[322px] lg:h-[231px] lg:max-w-[322px] 2xl:max-w-[579px] flex flex-col gap-6  '>
            <div className='bg-[#E1F6FF] px-[24px] py-[23px] rounded-[32px] shadow-md'>
              <p className='text-[18px] text-[#212121] leading-[20.6px] font-medium mb-2'>Next Class</p>
              <div className='flex flex-col gap-2'>
                {Object.entries(learningData.schedule).map(([day, time]) => {
                  const [start, end] = time.split(' - ');
                  return (
                    <div key={day} className='flex justify-between items-center'>
                      <p className='text-[#212121] font-medium text-[16px]'>{day}</p>
                      <div className='text-[#212121] font-medium text-[16px]'>
                        <p>{start} -</p>
                        <p>{end}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='bg-[#E1F6FF]  px-[24px] py-[23px] rounded-[32px] shadow-md '>
              <p className='text-[18px] text-[#212121] leading-[21.6px] font-medium '>Our Location</p>
              <img
                src={learningData.mapImage}
                alt='Location Map'
                className='lg:w-[272px] w-full mt-[17px] h-[340px] lg:h-[272px] rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
    </Wrapper>
  );
};

export default LearningSection;
