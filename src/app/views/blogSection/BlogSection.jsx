import blogsData from './data.json';
import BlogCard from '../../../components/blogsCard/BlogsCards';
import Wrapper from '../../../components/Wrapper';

const BlogSection = () => {
  return (
    <div className='mx-auto '>
      <Wrapper>
        <div className='lg:py-[120px] text-centre py-[48px] '>
          <div className='text-center max-w-[683px] mx-auto '>
            <p className='lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]'>
              {blogsData.title}
            </p>
            <p className='lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]'>
              {blogsData.description}
            </p>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            {blogsData.blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
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

export default BlogSection;
