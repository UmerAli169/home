import Wrapper from '../../../components/Wrapper';

const ContactForm = () => {
  return (
    <div className='bg-[#FFF8F8]  rounded-lg'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 py-[48px] '>
          <div className='hidden lg:block w-1/2'>
            <img src='/form/form.png' alt='Kids Playing' className='max-w-[482px] w-full 2xl:max-w-[645px] h-[645px] rounded-lg ' />
          </div>

          <div className='w-full lg:w-1/2'>
            <p className='text-[24px] lg:text-[46px] leading-[30px] lg:leading-[58px] lg:font-normal font-semibold font-lora text-[#121212]'>
              Submit and We'll be in Touch Soon!
            </p>
            <p className='text-[#3E5558] text-[14px] lg:text-[18px] leading-[21px] lg:leading-[27px] font-poppins'>
              We nurture curiosity, fuel young imaginations, and build skills to turn dreams into realities.
            </p>

            <form className='space-y-4 '>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input
                  placeholder='Name'
                  className='w-full p-3  border border-[#FFD5D5] rounded-lg text-[14px] lg:text-[16px] font-poppins'
                />
                <input
                  placeholder='Your Phone Number'
                  className='w-full p-3  border border-[#FFD5D5] rounded-lg text-[14px] lg:text-[16px] font-poppins'
                />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input
                  placeholder='Your Email'
                  className='w-full p-3  border border-[#FFD5D5] rounded-lg text-[14px] lg:text-[16px] font-poppins'
                />
                <input type='date' className='w-full p-3  border text-[#3E5558] border-[#FFD5D5] rounded-lg text-[14px] lg:text-[16px] font-poppins' />
              </div>
              <textarea
                placeholder='Description'
                className='w-full p-3 border border-[#FFD5D5] rounded-lg text-[14px] lg:text-[16px] font-poppins'
                rows={4}
              />

              <button className='lg:w-[142px] w-full bg-[#FF6666] text-white py-3 rounded-lg text-[14px] lg:text-[16px] font-medium'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
