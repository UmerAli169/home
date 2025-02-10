import React from "react";
import eventsData from "./data.json";

const EventsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{eventsData.title}</h2>
      <p className="text-gray-600 mt-4">{eventsData.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {eventsData.events.map((event, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[180px] object-cover rounded-lg"
            />
            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-4">
              {event.tag}
            </span>
            <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
