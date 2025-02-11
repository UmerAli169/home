const BlogCard = ({ title, description, image, category, date }) => {
    return (
      <div className="bg-white rounded-lg  overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-4 text-left">
          <span className="text-sm text-gray-500">
            {date} • {category}
          </span>
          <h3 className="text-lg font-semibold mt-2 font-lora text-[#212121]">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 font-poppins">{description}</p>
          <div className="flex justify-end">
            <a href="#" className="text-[#FF6666] font-medium mt-2 inline-block">
              Read More →
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  