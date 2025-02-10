import images from "./data.json";

const GallerySection = () => {
  console.log(images);
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">See our Gallery</h2>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
