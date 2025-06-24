import React from "react";
const neon = "#D1FF3A";
const CTASection = () => (
  <section className="max-w-5xl mx-auto my-16 rounded-2xl bg-[#232425] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">
        Start your financial journey with <span className={`text-[${neon}]`}>YourBank today!</span>
      </h2>
      <p className="text-gray-300">Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service.</p>
    </div>
    <button className={`bg-[${neon}] text-[#232425] font-semibold px-8 py-3 rounded-full text-lg shadow transition hover:brightness-110`}>
      Open Account
    </button>
  </section>
);
export default CTASection;
