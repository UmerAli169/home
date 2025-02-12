import blogsData from './data.json';
import BlogCard from '../../../components/blogsCard/BlogsCards';
import Wrapper from '../../../components/Wrapper';

const BlogSection = () => {
  return (
    <div className='mx-auto lg:py-[100px] py-[40px]  '>
      <Wrapper>
        <div className='text-center max-w-[683px] mx-auto  text-centre py-10'>
          <p className='lg:text-[46px] lg:leading-[58.8px] text-[24px] leading-[30px] font-semibold lg:font-medium font-lora text-[#212121]'>
            {blogsData.title}
          </p>
          <p className='lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[20px] font-normal lg:font-medium font-poppins text-[#707070]'>
            {blogsData.description}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {blogsData.blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className='flex justify-center pt-[28px]'>
          <button className='lg:px-[40px] lg:py-[14px] py-[12px]  px-[20px] bg-[#FFECEC] text-[#3A3A3A] font-Poppins lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px]  rounded-[10px] '>
            View all
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogSection;
