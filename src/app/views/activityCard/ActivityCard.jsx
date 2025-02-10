import activities from "./data.json";
import ActivityCard from "../../../components/activityCard/ActivityCard";

const HolisticGrowth = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Service for Holistic Growth</h2>
        <p className="text-gray-600">
          Our holistic growth service supports students in all areas of their
          development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default HolisticGrowth;
