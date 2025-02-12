import React from "react";
import HeroSection from "../views/heroSection/HeroSection";
import Features from "../views/features/Features";
import HolisticGrowth from "../views/activityCard/ActivityCard";
import LearningSection from "../views/learningSection/LearningSection";
import EventsSection from "../views/eventsSection/EventsSection";
import HowToGetStarted from "../views/howToGetStarted/HowToGetStarted";
import BlogSection from "../views/blogSection/BlogSection";
import GallerySection from "../views/gallerySection/GallerySection";
import ContactForm from "../views/contactForm/ContactForm";
import WhyTinyTribe from "../views/whyTinyTribe/WhyTinyTribe";
import InstagramSection from "../views/instagramSection/InstagramSection";

function page() {
  return (
    <div>
      <HeroSection />
      <Features />
      <HolisticGrowth />
      <LearningSection />
      <EventsSection />
      <HowToGetStarted />
      <BlogSection />
      <GallerySection />
      <ContactForm />
      <WhyTinyTribe />
      <InstagramSection />
    </div>
  );
}

export default page;
