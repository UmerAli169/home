import Button from "../../components/activityCard/button";

const ActivityCard = ({ title, description, ageRange, duration, image }) => {
  return (
    <div className="min-w-[100.5px]    w-full  ">
      <div className="w-full h-[123]  sm:h-[260px]" >
        <img src={image} alt={title} className="rounded-[12px] sm:rounded-[24px] w-full h-[123] sm:h-[260px] object-cover" />
      </div>
      <div className="lg:pt-3 pt-2 ">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary">Ages {ageRange}</Button>
          <Button>{duration}</Button>
        </div>
        <p className='lg:text-[24px] lg:leading-[36px] text-[16px] leading-[20px] lg:font-medium font-semibold font-lora lg:font-poppins text-[#212121]'>
        {title}</p>
        <p className="text-[#858585] lg:font-medium font-normal lg:font-poppins text-[12px] lg:text-[18px] lg:leading-[27px] leading-[18px] ">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
