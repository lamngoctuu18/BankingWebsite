import React from "react";
const neon = "#D1FF3A";
const products = [
  {
    icon: (
      <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill={neon} /><rect x="12" y="16" width="12" height="8" rx="2" fill="#232425" /></svg>
    ),
    title: "Checking Accounts",
    desc: "Easy and convenient access to your funds with our range of checking account options.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill={neon} /><rect x="14" y="14" width="8" height="12" rx="2" fill="#232425" /></svg>
    ),
    title: "Savings Accounts",
    desc: "Build your savings with competitive interest rates and flexible options.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill={neon} /><rect x="12" y="14" width="12" height="8" rx="2" fill="#232425" /></svg>
    ),
    title: "Loans and Mortgages",
    desc: "Flexible loan and mortgage options to help you achieve your dreams.",
  },
];
const OurProducts = () => (
  <section className="max-w-7xl mx-auto py-16">
    <h2 className="text-4xl font-bold text-white mb-4">Our <span className={`text-[${neon}]`}>Products</span></h2>
    <p className="text-gray-300 mb-12">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((p, i) => (
        <div key={i} className="rounded-2xl bg-[#232425] p-8 flex flex-col items-center text-center">
          <div className="mb-4">{p.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
          <p className="text-gray-300">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default OurProducts;
