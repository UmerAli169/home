import Button from '../activityCard/button';

const EventCard = ({ title, description, image, tag }) => {
  return (
    <div className='overflow-hidden w-full   '>
      <div className='w-full h-48'>
        <img src={image} alt={title} className='lg:rounded-[24px] rounded-[12px] w-full h-full object-cover' />
      </div>
      <Button variant='tertiary'>{tag}</Button>
      <p className='lg:text-[24px] lg:leading-[36px] text-[20px] leading-[25px] lg:font-medium  font-semibold font-lora text-[#212121]'>
        {title}
      </p>
      <p className='text-[#858585] lg:text-[18px] lg;leading-[27px]  text-[14px] leading-[21px] font-Poppins font-normal lg:font-medium'>
        {description}
      </p>
    </div>
  );
};

export default EventCard;
