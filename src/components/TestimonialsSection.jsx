import React, { useState } from "react";
import QuoteIcon from "../assets/images/IconOT.png"; // Đường dẫn tới icon bạn vừa gửi
const neon = "#C7FF00";
const testimonials = [
  {
    quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
    name: "Sara T",
  },
  {
    quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    name: "John D",
  },
  {
    quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
    name: "Emily G",
  },
];

const tabs = [
  { label: "For Individuals" },
  { label: "For Businesses" },
];

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);

  // Hiệu ứng chuyển đổi
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-white mb-2">
        Our <span style={{ color: neon }}>Testimonials</span>
      </h2>
      <p className="text-gray-300 mb-8">
        Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
      </p>
      {/* Tabs */}
      <div className="flex gap-0 mb-12">
        <div className="flex gap-0 bg-[#232425] rounded-full p-1 w-max">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-7 py-2 rounded-full text-base font-semibold transition-all duration-200
                ${activeTab === idx
                  ? "bg-[#C7FF00] text-[#181A1B] shadow"
                  : "bg-transparent text-white hover:text-[#C7FF00]"
                }`}
              style={{
                minWidth: 140,
                outline: "none",
                border: "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Testimonials Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 w-10 h-10 rounded-full bg-[#232425] flex items-center justify-center text-[#C7FF00] hover:bg-[#C7FF00] hover:text-[#232425] transition"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.08"/>
            <path d="M12.5 15L8 10.5L12.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Testimonials */}
        <div className="flex gap-8 w-full justify-center">
          {testimonials.map((t, i) => {
            // Hiệu ứng mờ dần và scale cho các card không active
            let opacity = 0.3, scale = 0.95, filter = "blur(1.5px)";
            if (i === activeIndex) {
              opacity = 1;
              scale = 1;
              filter = "none";
            } else if (i === (activeIndex + 1) % testimonials.length || i === (activeIndex - 1 + testimonials.length) % testimonials.length) {
              opacity = 0.7;
              scale = 0.98;
              filter = "blur(0.5px)";
            }
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#181A1B] border border-[#232425] p-8 w-[350px] flex flex-col items-center text-center transition-all duration-500"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  filter,
                  zIndex: i === activeIndex ? 2 : 1,
                  boxShadow: i === activeIndex ? "0 4px 32px #C7FF0033" : "none",
                  position: "relative",
                }}
              >
                {/* Quote Icon */}
                <img src={QuoteIcon} alt="quote" className="mb-4" style={{ width: 44, height: 44 }} />
                <p className={`mb-4 ${i === activeIndex ? "text-white font-semibold" : "text-gray-400"}`} style={{ minHeight: 100 }}>
                  {t.quote}
                </p>
                <span className={`font-semibold ${i === activeIndex ? "text-[#C7FF00]" : "text-gray-500"}`}>{t.name}</span>
              </div>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 w-10 h-10 rounded-full bg-[#232425] flex items-center justify-center text-[#C7FF00] hover:bg-[#C7FF00] hover:text-[#232425] transition"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.08"/>
            <path d="M8 15L12.5 10.5L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
export default TestimonialsSection;

