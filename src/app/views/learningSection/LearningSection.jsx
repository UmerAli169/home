import React from "react";
import learningData from "./data.json";
import Button from "../../../components/navbar/Button";

const LearningSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-12 gap-8">
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        {learningData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="rounded-lg w-full h-[200px] object-cover"
          />
        ))}
      </div>

      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="text-3xl font-bold leading-tight text-gray-900">
          {learningData.title}
        </h2>
        <p className="text-gray-600 mt-4">{learningData.description}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <Button
            text="Enroll now"
            className="bg-[#FF6666] text-[#FFFFFF] px-4 py-2"
          />

          <span className="text-gray-700 font-semibold">
            {learningData.phone}
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Next Class</h3>
          {Object.entries(learningData.schedule).map(([day, time]) => (
            <p key={day}>
              {day}: <span className="font-medium">{time}</span>
            </p>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Our Location</h3>
          <img
            src={learningData.mapImage}
            alt="Location Map"
            className="w-full h-[150px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
