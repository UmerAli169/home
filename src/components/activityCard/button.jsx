  const PrimaryButton = ({ children, variant = "primary" }) => {
  const baseStyles = "lg:px-[18px] lg:py-[3px] px-[12px] py-[4px] rounded-[43px] text-[#FFFFFF] lg:font-[12px] font-[8px] font-poppins lg:font-semibold font-normal";
  const variants = {
    secondary: "bg-[#FF6666]",
   primary: "bg-[#00A4EA]",
   tertiary: "bg-[#31C192]", 

  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
};

export default PrimaryButton;
