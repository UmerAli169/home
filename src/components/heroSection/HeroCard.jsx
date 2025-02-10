import React from 'react';

const HeroCard = ({ icon, title, description }) => {
  return (
    <div className='  flex flex-col items-start justify-center shadow-lg lg:rounded-[32px] rounded-[16px] lg:w-[320px]  lg:h-[196px] w-[265px]  h-[160px] bg-[#FFFFFF]'>
      <div className=' pl-7'>
        {' '}
        <img src={icon} alt={title} className='w-[40px] h-[40px] ' />
      </div>
      <div className=' pl-6 flex flex-col items-start justify-center '>
        <p className='p-2 lg:text-[24px] lg:leading-[30px] text-[16px] leading-[30px]  font-medium  text-[#232323]'>
          {title}
        </p>
        <p className='lg:text-[14px] lg:leading-[21px] text-[12px] leading-[18px]  font-normal  text-[#9AA0A6]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
