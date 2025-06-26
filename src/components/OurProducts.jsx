import React, { useState } from "react";
import Icon1 from "../assets/images/CheckingAccounts.png";
import Icon2 from "../assets/images/SavingAccounts.png";
import Icon3 from "../assets/images/loans.png";
const neon = "#C7FF00";
const products = [
  {
    icon: <img src={Icon1} alt="Checking Accounts" style={{ width: 72, height: 72 }} />,
    title: "Checking Accounts",
    desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    icon: <img src={Icon2} alt="Savings Accounts" style={{ width: 72, height: 72 }} />,
    title: "Savings Accounts",
    desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    icon: <img src={Icon3} alt="Loans and Mortgages" style={{ width: 72, height: 72 }} />,
    title: "Loans and Mortgages",
    desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];

const tabs = [
  { label: "For Individuals" },
  { label: "For Businesses" },
];

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#181A1B] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title & Desc */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Our <span style={{ color: neon }}>Products</span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations
            </p>
          </div>
          {/* Tabs */}
          <div className="flex gap-0 mt-6 md:mt-0 bg-[#232425] rounded-full p-1 w-max">
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
        {/* Products */}
        <div className="grid md:grid-cols-3 gap-0 bg-transparent">
          {products.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-8 py-12`}
              style={{
                background: "transparent",
                borderRight: i < 2 ? "1px solid #232425" : "none",
                borderLeft: "none",
                borderTop: "none",
                borderBottom: "none",
                minHeight: 340,
              }}
            >
              <div className="mb-6 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-gray-300 text-base">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
             