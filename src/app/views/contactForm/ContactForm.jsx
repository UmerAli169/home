"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-lg rounded-lg">
      <img
        src="/form/form.png"
        alt="Kids Playing"
        className="w-full md:w-1/2 rounded-lg"
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold">
          Submit and We'll be in Touch Soon!
        </h2>
        <p className="text-gray-600">
          We nurture curiosity, fuel young imaginations, and build skills to
          turn dreams into realities.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.phone}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.description}
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
