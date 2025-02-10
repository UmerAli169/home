const PrimaryButton = ({ children, variant = "primary" }) => {
  const baseStyles = "px-4 py-1 rounded-full text-sm font-medium";
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-red-500 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
};

export default PrimaryButton;
