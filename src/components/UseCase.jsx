import React from "react";
import IconPersonal1 from "../assets/images/Finances.png";
import IconPersonal2 from "../assets/images/SavingFuture.png";
import IconPersonal3 from "../assets/images/HomeShip.png";
import IconPersonal4 from "../assets/images/Education.png";
import IconBusiness1 from "../assets/images/Startups.png";
import IconBusiness2 from "../assets/images/CashFlow.png";
import IconBusiness3 from "../assets/images/BusinessExpansion.png";
import IconBusiness4 from "../assets/images/Payment.png";
import AbstractDesign from "../assets/images/Abstract Design.png"; 
import AbstractDesign2 from "../assets/images/Abstract Design (1).png"; 
const neon = "#C7FF00";

const UseCase = () => (
  <section className="max-w-7xl mx-auto py-8 md:py-10 lg:py-8 px-2 sm:px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-2 lg:mb-1">
      Use <span style={{ color: neon }}>Cases</span>
    </h2>
    <p className="text-gray-300 mb-6 md:mb-8 lg:mb-6 text-sm md:text-base">
      At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
    </p>
    <div className="flex flex-col gap-8 md:gap-8 lg:gap-6">
      {/* For Individuals */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-3">
        {/* Left: Cards */}
        <div className="relative flex-1 bg-[#181A1B] rounded-2xl p-4 md:p-6 lg:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-3 lg:gap-2 shadow-lg border border-[#232425] animate-slide-in-left mb-4 md:mb-0">
          {/* Abstract Design background */}
          <img
            src={AbstractDesign}
            alt="Abstract Design"
            className="absolute left-0 top-0 w-28 md:w-40 lg:w-48 h-auto pointer-events-none select-none"
            style={{
              zIndex: 0,
              opacity: 0.7,
              // Điều chỉnh opacity và size nếu muốn
            }}
            draggable={false}
          />
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconPersonal1} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Managing Personal Finances</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconPersonal2} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Saving for the Future</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconPersonal3} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Homeownership</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconPersonal4} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Education Funding</span>
          </div>
        </div>
        {/* Right: Text & Stats */}
        <div className="flex-1 flex flex-col justify-between bg-[#181A1B] rounded-2xl p-4 md:p-6 lg:p-4 shadow-lg border border-[#232425] mt-0 md:mt-0">
          <div>
            <h3 className="text-white font-semibold text-xl mb-2">For Individuals</h3>
            <p className="text-gray-300 mb-6 text-base">
              For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers
            </p>
          </div>
          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>78%</span>
              <div className="text-gray-400 text-xs">Secure Retirement Planning</div>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>63%</span>
              <div className="text-gray-400 text-xs">Manageable Debt Consolidation</div>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>91%</span>
              <div className="text-gray-400 text-xs">Reducing financial burdens</div>
            </div>
          </div>
          <button className="rounded-full border border-[#232425] px-6 py-2 text-white hover:bg-[#232425] w-max">
            Learn More
          </button>
        </div>
      </div>
      {/* For Business */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-3 mt-4 md:mt-6 lg:mt-4">
        {/* Left: Text & Stats */}
        <div className="flex-1 flex flex-col justify-between bg-[#181A1B] rounded-2xl p-4 md:p-6 lg:p-4 shadow-lg border border-[#232425] mb-0 md:mb-0">
          <div>
            <h3 className="text-white font-semibold text-xl mb-2">For Business</h3>
            <p className="text-gray-300 mb-6 text-base">
              For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them
            </p>
          </div>
          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>65%</span>
              <div className="text-gray-400 text-xs">Cash Flow Management</div>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>70%</span>
              <div className="text-gray-400 text-xs">Drive Business Expansion</div>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: neon }}>45%</span>
              <div className="text-gray-400 text-xs">Streamline payroll processing</div>
            </div>
          </div>
          <button className="rounded-full border border-[#232425] px-6 py-2 text-white hover:bg-[#232425] w-max">
            Learn More
          </button>
        </div>
        {/* Right: Cards */}
        <div className="relative flex-1 bg-[#181A1B] rounded-2xl p-4 md:p-6 lg:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-3 lg:gap-2 shadow-lg border border-[#232425] animate-slide-in-right">
          {/* AbstractDesign2 background */}
          <img
            src={AbstractDesign2}
            alt="Abstract Design 2"
            className="absolute right-0 top-0 w-28 md:w-40 lg:w-48 h-auto pointer-events-none select-none"
            style={{
              zIndex: 0,
              opacity: 0.7,
            }}
            draggable={false}
          />
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconBusiness1} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Startups and Entrepreneurs</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconBusiness2} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Cash Flow Management</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconBusiness3} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Business Expansion</span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-[#232425] rounded-xl py-4 md:py-8 shadow group hover:bg-[#232425]/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
            <img src={IconBusiness4} alt="" className="w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-medium text-sm md:text-base text-center">Payment Solutions</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default UseCase;
