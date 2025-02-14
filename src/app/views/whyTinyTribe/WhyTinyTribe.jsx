'use client';
import data from './data.json';
import Wrapper from '../../../components/Wrapper';

const WhyTinyTribe = () => {
  return (
    <div className='w-full  '>
      <Wrapper>
        <div className=' py-[48px] w-full mx-auto   bg-[#FFFFFF] '>
          <p className='text-center text-[24px] lg:text-[35px] lg:leading-[44px] leading-[30px] lg:font-medium  font-semibold font-lora text-[#121212]'>
            Why tiny tribe is for me
          </p>
          <p className=' text-center lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]'>
            Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink dock arr line gaff tea. Arr tea rum crimp
            go
          </p>

          <div className='space-y-[20px] lg:py-[65px] pt-[30px]  '>
            {data.map((item, index) => (
              <div key={index} className='border border-[#DBE7ED] bg-[#FFF8F8]  lg:px-[40px] lg:py-[24px]  p-[16px] rounded-[12px]  '>
                <div className='flex items-center justify-between w-full text-left text-[20px] lg:text-[28px] font-semibold lg:font-medium leading-[25px]  text-[#212121] font-poppins '>
                  <span>+ {item.title}</span>
                </div>
                <p className='text-[#858585] text-[14px] lg:text-[20px] leading-[26px] font-medium lg:font-normal mt-2 '>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyTinyTribe;
