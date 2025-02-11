import imagesData from "./data.json";
import Wrapper from "../../../components/Wrapper";

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center  py-[120px] ">
      <Wrapper>
        <div className="text-center max-w-[683px] mx-auto ">
          <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
            See our Gallery
          </p>
          <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]">
            Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink
            dock arr line gaff tea. Arr tea rum crimp go{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {imagesData.images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg ">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default GallerySection;
