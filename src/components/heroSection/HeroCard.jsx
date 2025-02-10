import React from "react";



const HeroCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white">
      <img src={icon} alt={title} width={40} height={40} />
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default HeroCard;
