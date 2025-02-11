import blogsData from "./data.json";
import BlogCard from "../../../components/blogsCard/BlogsCards";
import Wrapper from "../../../components/Wrapper";

const BlogSection = () => {
  return (
    <div className="mx-auto ">
      <Wrapper>
      <div className="lg:py-[120px] text-centre py-[48px] ">
      <div className="text-center max-w-[683px] mx-auto ">
          <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
            {blogsData.title}
          </p>
          <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]">
            {blogsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogsData.blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        </div>
        
      </Wrapper>
      
    </div>
  );
};

export default BlogSection;
