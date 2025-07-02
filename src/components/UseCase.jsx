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

const cardBase =
  "relative z-10 flex flex-col items-center justify-center rounded-xl py-8 md:py-12 transition-all duration-300 animate-slide-in-up shadow group hover:scale-105 font-['Lexend',sans-serif]";
const iconBase =
  "flex items-center justify-center rounded-full mb-4";
const cardBg = "bg-[#181A1B]";
const cardInnerBg = "bg-[#111112]";
const iconShadow = "shadow-[0_0_16px_2px_#C7FF00AA]";

const UseCase = () => (
  <section className="max-w-7xl mx-auto py-8 md:py-10 lg:py-8 px-2 sm:px-4 font-['Lexend',sans-serif]">
    {/* Title */}
    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-2 lg:mb-1 text-[#C7FF00]">
      Use Cases
    </h2>
    <p className="text-gray-300 mb-6 md:mb-8 lg:mb-6 text-sm md:text-base max-w-2xl">
      At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
    </p>
    <div className="flex flex-col gap-8 md:gap-8 lg:gap-6">
      {/* Main Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left: Use Case Cards */}
        <div
          className={`relative flex-1 ${cardBg} rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-lg border border-[#232425] min-h-[340px]`}
        >
          {/* Abstract Design background */}
          <img
            src={AbstractDesign}
            alt="Abstract Design"
            className="absolute left-0 top-0 w-36 md:w-52 lg:w-64 h-auto pointer-events-none select-none z-0 opacity-70"
            draggable={false}
          />
          {/* Card 1 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconPersonal1} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Managing Personal Finances
            </span>
          </div>
          {/* Card 2 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconPersonal2} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Saving for the Future
            </span>
          </div>
          {/* Card 3 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconPersonal3} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Homeownership
            </span>
          </div>
          {/* Card 4 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconPersonal4} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Education Funding
            </span>
          </div>
        </div>
        {/* Right: For Individuals */}
        <div className="flex-1 flex flex-col justify-between bg-transparent p-0 md:p-8 mt-0 md:mt-0 font-['Lexend',sans-serif]">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">For Individuals</h3>
            <p className="text-gray-300 mb-6 text-base">
              For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers
            </p>
          </div>
          {/* Stats */}
          <div className="flex flex-row gap-4 md:gap-8 mb-6 items-stretch">
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">78%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Secure Retirement Planning</div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-12 bg-[#393939] mx-[18px]" />
            </div>
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">63%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Manageable Debt Consolidation</div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-12 bg-[#393939] mx-[18px]" />
            </div>
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">91%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Reducing financial burdens</div>
            </div>
          </div>
          <button className="rounded-full border border-[#262626] px-7 py-3 text-white hover:bg-[#232425] w-max transition font-['Lexend',sans-serif]">
            Learn More
          </button>
        </div>
      </div>
      {/* For Business Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-2 font-['Lexend',sans-serif]">
        {/* Left: For Business */}
        <div className="flex-1 flex flex-col justify-between bg-transparent mb-0 md:mb-0">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">For Business</h3>
            <p className="text-gray-300 mb-6 text-base">
              For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them
            </p>
          </div>
          {/* Stats */}
          <div className="flex flex-row gap-4 md:gap-8 mb-6 items-stretch">
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">65%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Cash Flow Management</div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-12 bg-[#393939] mx-[18px]" />
            </div>
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">70%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Drive Business Expansion</div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-12 bg-[#393939] mx-[18px]" />
            </div>
            <div className="flex flex-col items-center md:items-start flex-1">
              <span className="text-3xl md:text-4xl font-bold text-[#C7FF00]">45%</span>
              <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">Streamline payroll processing</div>
            </div>
          </div>
          <button className="rounded-full border border-[#262626] px-7 py-3 text-white hover:bg-[#232425] w-max transition font-['Lexend',sans-serif]">
            Learn More
          </button>
        </div>
        {/* Right: Use Case Cards for Business */}
        <div
          className={`relative flex-1 ${cardBg} rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-lg border border-[#232425] min-h-[340px]`}
        >
          {/* AbstractDesign2 background */}
          <img
            src={AbstractDesign2}
            alt="Abstract Design 2"
            className="absolute right-0 top-0 w-36 md:w-52 lg:w-64 h-auto pointer-events-none select-none z-0 opacity-70"
            draggable={false}
          />
          {/* Card 1 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconBusiness1} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Startups and Entrepreneurs
            </span>
          </div>
          {/* Card 2 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconBusiness2} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Cash Flow Management
            </span>
          </div>
          {/* Card 3 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconBusiness3} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium text-base text-center">
              Business Expansion
            </span>
          </div>
          {/* Card 4 */}
          <div
            className={`${cardBase} ${cardInnerBg} min-h-[140px] w-full border border-[#232425] shadow-[0_0_24px_0_#000A]`}
          >
            <span
              className={`${iconBase} bg-[#181A1B] w-[82px] h-[82px] mb-4 ${iconShadow}`}
            >
              <img src={IconBusiness4} alt="" className="w-20 h-20 md:w-15 md:h-15" />
            </span>
            <span className="text-white font-medium textBase text-center">
              Payment Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default UseCase;
               