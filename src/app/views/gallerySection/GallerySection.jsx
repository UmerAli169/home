// import imagesData from "./data.json";
// import Wrapper from "../../../components/Wrapper";

// const GallerySection = () => {
//   return (
//     <section className="flex flex-col items-center  py-[120px] ">
//       <Wrapper>
//         <div className="text-center max-w-[683px] mx-auto ">
//           <p className="lg:text-[32px] lg:leading-[40.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
//             See our Gallery
//           </p>
//           <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]">
//             Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink
//             dock arr line gaff tea. Arr tea rum crimp go{" "}
//           </p>
//         </div>
//         <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
//           {imagesData.images.map((src, index) => (
//             <div key={index} className="overflow-hidden rounded-[12px] ">
//               <img
//                 src={src}
//                 alt={`Gallery Image ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </Wrapper>
//     </section>
//   );
// };

// export default GallerySection;

import imagesData from "./data.json";
import Wrapper from "../../../components/Wrapper";

const GallerySection = () => {
  return (
    <section className="flex flex-col items-center  pt-[48px] ">
        <div className="text-center max-w-[683px] mx-auto">
          <p className="lg:text-[46px] lg:leading-[58.8px] text-[24px] leading-[30px] lg:font-normal font-medium font-lora text-[#212121]">
            See our Gallery
          </p>
          <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[21px] font-normal font-poppins text-[#707070]">
            Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink
            dock arr line gaff tea. Arr tea rum crimp go{" "}
          </p>
        </div>
      <Wrapper>

        <div className="grid gap-4 max-w-full mx-auto py-[24px]">
          <div className="grid grid-cols-[1.5fr_1fr_0.5fr] gap-4">
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[0]} alt="Gallery Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[1]} alt="Gallery Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[2]} alt="Gallery Image 3" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[3]} alt="Gallery Image 4" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[4]} alt="Gallery Image 5" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[12px] overflow-hidden">
              <img src={imagesData.images[5]} alt="Gallery Image 6" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default GallerySection;

