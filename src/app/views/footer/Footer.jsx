import React from "react";
import footerData from "./data.json";
import Wrapper from "../../../components/Wrapper";

const Footer = () => {
  return (
    <footer className="text-[#FFFFFF] font-poppins bg-[#FF6666] relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-blend-multiply"
        style={{ backgroundImage: `url('/footer.jpg')` }}
      />

      <Wrapper>
        {/* Top Section */}
        <div className="relative z-10 py-[35px] flex flex-wrap items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/svg/navbar/tinytribe.svg"
              alt="Tiny Tribe Logo"
              className="h-[40px]"
            />
            <span className="text-[20px] font-bold text-white">tiny tribe</span>
          </div>

          <div className="flex flex-wrap w-full sm:w-auto sm:flex-nowrap items-center gap-3">
            <span className="text-white">Subscribe to our newsletter</span>
            <div className="flex items-center w-full sm:w-80 bg-white bg-opacity-20 border border-white rounded-lg px-4 py-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
              />
              <img
                src="/svg/footer/arrow.svg"
                alt="Arrow Icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-[16px] leading-[24px] font-medium">
              {footerData.brand.description}
            </p>
            <p className="mt-6 font-medium text-[20px] leading-[28px]">
              Follow tinytribe
            </p>
            <div className="flex space-x-2 mt-2 flex-wrap">
              {footerData.socialLinks.map((social, index) => (
                <img
                  key={index}
                  src={social.icon}
                  alt={social.alt}
                  className="w-[30px] h-[30px]"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[20px] leading-[28px] font-medium">Services</h3>
            <ul className="mt-4 text-[16px] leading-[24px] font-medium space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[28px] font-medium">Info</h3>
            <ul className="mt-4 text-[16px] leading-[24px] font-medium space-y-2">
              {footerData.info.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[28px] font-medium">Contact</h3>
            <ul className="mt-4 text-[16px] leading-[24px] font-medium space-y-2">
              {footerData.contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-[20px] h-[20px]"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
