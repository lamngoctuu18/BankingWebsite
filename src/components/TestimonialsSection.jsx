import React from "react";
const neon = "#D1FF3A";
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
const TestimonialsSection = () => (
  <section className="max-w-7xl mx-auto py-16">
    <h2 className="text-4xl font-bold text-white mb-4">Our <span className={`text-[${neon}]`}>Testimonials</span></h2>
    <p className="text-gray-300 mb-12">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service.</p>
    <div className="flex gap-8 justify-center">
      {testimonials.map((t, i) => (
        <div key={i} className="rounded-2xl bg-[#232425] p-8 w-80 flex flex-col items-center text-center">
          <span className={`text-4xl text-[${neon}] mb-4`}>&ldquo;</span>
          <p className="text-white mb-4">{t.quote}</p>
          <span className={`font-semibold text-[${neon}]`}>{t.name}</span>
        </div>
      ))}
    </div>
    {/* Navigation buttons */}
    <div className="flex justify-center gap-4 mt-8">
      <button className="w-10 h-10 rounded-full bg-[#232425] text-[${neon}] flex items-center justify-center">&larr;</button>
      <button className="w-10 h-10 rounded-full bg-[#232425] text-[${neon}] flex items-center justify-center">&rarr;</button>
    </div>
  </section>
);
export default TestimonialsSection;
