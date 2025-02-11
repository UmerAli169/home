'use client';
import data from './data.json';
import Wrapper from '../../../components/Wrapper';

const WhyTinyTribe = () => {
  return (
    <div className='w-full  '>
      <Wrapper>
        <div className=' py-[60px] w-full mx-auto  rounded-lg bg-white '>
          <p className='text-center text-[24px] lg:text-[35px] lg:leading-[44px] leading-[30px] lg:font-medium  font-semibold font-lora text-[#121212]'>
            Why tiny tribe is for me
          </p>
          <p className=' text-center lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]'>
            Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink dock arr line gaff tea. Arr tea rum crimp
            go
          </p>

          <div className='space-y-1 lg:py-[65px] py-[25px] '>
            {data.map((item, index) => (
              <div key={index} className='border-b pb-2 bg-[#FFF8F8]  p-[25px] '>
                <div className='flex items-center justify-between w-full text-left text-[16px] lg:text-[18px] font-semibold  text-black font-poppins '>
                  <span>+ {item.title}</span>
                </div>
                <p className='text-gray-600 text-[14px] lg:text-[16px] mt-2 font-abeezee'>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyTinyTribe;
