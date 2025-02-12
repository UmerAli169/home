const BlogCard = ({ title, description, image, category, date }) => {
  return (
    <div className='bg-[#FFFFFF] rounded-lg w-full'>
      <img src={image} alt={title} className='w-full h-52 object-cover lg:rounded-[24px]  rounded-[12px]' />

      <div className='flex justify-between text-[12px] font-normal text-[#5C5A5D]'>
        <span className='flex items-center gap-x-1'>
          <img src='/svg/blog/cylinder.svg' alt='' className='w-4 h-4' />
          {date}
        </span>
        <span>{category}</span>
      </div>

      <p className='lg:text-[24px] lg:leading-[36px] text-[20px] leading-[25px] lg:font-medium	 font-semibold  lg:font-Poppins font-Lora text-[#212121]'>
        {title}
      </p>
      <p className='text-[#858585] lg:text-[18px] lg:leading-[27px]  leading-[21px] font-poppins lg:font-medium font-normal'>
        {description}
      </p>
      <div className='flex justify-end'>
        <a href='#' className='text-[#FF6666] font-[15px] font-[Poppins]  leading-[22.5px] font-normal inline-block'>
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
