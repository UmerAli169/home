import React from 'react';

const HeroCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`w-full flex flex-col lg:p-[30px] px-4  py-[30px]   ${className}`}>
        <div>
          <img src={icon} alt={title} className='lg:w-[100px] lg:h-[100px] w-[85px] h-[85px] ' />
        </div>
        <div className=' flex flex-col items-start justify-start '>
        
            <p className='lg:text-[20px] lg:leading-[30px] text-[18px] leading-[27px] font-medium  font-Poppins text-[#322F37]'>
              {title}
            </p>
      
    
            <p className='text-left lg:leading-[21px] text-[12px] leading-[18px] font-normal text-[#858585] '>
              {description}
            </p>
          
        </div>
      </div>
 
  );
};

export default HeroCard;
