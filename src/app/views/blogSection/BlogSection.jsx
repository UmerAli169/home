import React from "react";
import blogsData from "./data.json";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{blogsData.title}</h2>
      <p className="text-gray-600 mt-4">{blogsData.description}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {blogsData.blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-left">
              <span className="text-sm text-gray-500">
                {blog.date} • {blog.category}
              </span>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium mt-2 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-full">
        View All
      </button>
    </section>
  );
};

export default BlogSection;
