// import Button from "../Button";

import Button from "../activityCard/button";

const EventCard = ({ title, description, image, tag }) => {
  return (
    <div className="overflow-hidden w-full   ">
      <div className="relative h-48">
        <img src={image} alt={title} className="rounded-[24px] w-full h-full object-cover" />
      </div>
      <div className="p-4 ">

        <Button variant="tertiary">{tag}</Button>
        <p className="lg:text-[24px] lg:leading-[36px] text-[20px] leading-[25px] font-bold font-lora text-[#212121]">
          {title}
        </p>
        <p className="text-[#858585] lg:text-[18px] text-[14px] leading-[21px] font-Poppins lg:font-normal font-medium">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
