import activities from './data.json';
import ActivityCard from '../../../components/activityCard/ActivityCard';
import Wrapper from '../../../components/Wrapper';

const HolisticGrowth = () => {
  return (
    <div className='  mx-auto bg-[#FFF8F8]'>
      <Wrapper>
        <div className='lg:py-[120px] py-[48px]'>
          <div className='text-center '>
            <p className='lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora    text-[#212121]'>
              Service for Holistic Growth
            </p>
            <p className='lg:text-[18px] lg:leading-[27 .5px] text-[14px] leading-[21px]  font-normal font-poopins text-[#707070]   '>
              Our holistic growth service supports students in all areas of their development.
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(345px,1fr))]  gap-6 lg:py-[40px] py-[20px]'>
            {activities.map((activity, index) => (
              <div className='overflow-x-auto'>
                <ActivityCard key={index} {...activity} />
              </div>

            ))}
          </div>
        </div>
        <div className='flex justify-center '>
          <button className='lg:px-[20px] lg:py-[13px] py-[12px]  px-[20px] bg-[#FFECEC] text-[#3A3A3A] font-Poppins lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px]  rounded-[10px] '>
            View More
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default HolisticGrowth;
