import Button from "../../components/activityCard/button";

const ActivityCard = ({ title, description, ageRange, duration, image }) => {
  return (
    <div className=" overflow-hidden w-full  ">
      <div className="relative h-48">
        <img src={image} alt={title} className="rounded-[24px] w-full h-full object-cover" />
      </div>
      <div className="p-1 space-y-1">
        <div className="flex gap-2">
          <Button variant="secondary">Ages {ageRange}</Button>
          <Button>{duration}</Button>
        </div>
        <p className='lg:text-[20px] lg:leading-[36px] text-[16px] leading-[20px] font-bold  font-lora text-[#322F37]'>
        {title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
