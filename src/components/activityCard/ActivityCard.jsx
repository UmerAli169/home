import Button from "../../components/activityCard/button";

const ActivityCard = ({ title, description, ageRange, duration, image }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm bg-white">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <Button variant="secondary">Ages {ageRange}</Button>
          <Button>{duration}</Button>
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
