import React from 'react';
import footerData from './data.json';
const Footer = () => {
  return (
    <footer className='bg-[#FF6666] text-[#FFFFFF] py-12  font-poppins px-10'>
      <div className='container   mx-auto  grid grid-cols-1 md:grid-cols-4 gap-8 '>
        <div>
          <p className='text-[16px] leading-[24px] font-medium '>{footerData.brand.description}</p>

          <p className='mt-6 font-medium text-[24px] leading-[30px]'>Follow tinytribe {footerData.brand.name}</p>
          <div className='flex space-x-2 mt-2 '>
            {footerData.socialLinks.map((social, index) => (
              <img key={index} src={social.icon} alt={social.alt} className='w-[40px] h-[40px] rounded-[2px]' />
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-[24px] leading-[30px] font-medium'>Services</h3>
          <ul className='mt-4 text-[18px] leading-[27px] font-medium space-y-2 '>
            {footerData.services.map((service, index) => (
              <li key={index}>
                <a href='#' className='hover:underline'>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-[24px] leading-[30px] font-medium'>Info</h3>
          <ul className='mt-4 text-[18px] leading-[27px] font-medium space-y-2'>
            {footerData.info.map((item, index) => (
              <li key={index}>
                <a href='#' className='hover:underline'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-[24px] leading-[30px] font-medium'>Contact</h3>
          <ul className='mt-4 text-[18px] leading-[27px] font-medium space-y-2'>
            <ul className='mt-4 space-y-2'>
              {footerData.contact.map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <img src={item.icon} alt='Icon' className='w-[20px] h-[20px]' />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
