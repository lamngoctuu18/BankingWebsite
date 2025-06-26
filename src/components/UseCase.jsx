import React from "react";
import IconPersonal1 from "../assets/images/Finances.png";
import IconPersonal2 from "../assets/images/SavingFuture.png";
import IconPersonal3 from "../assets/images/HomeShip.png";
import IconPersonal4 from "../assets/images/Education.png";
import IconBusiness1 from "../assets/images/Startups.png";
import IconBusiness2 from "../assets/images/CashFlow.png";
import IconBusiness3 from "../assets/images/BusinessExpansion.png";
import IconBusiness4 from "../assets/images/Payment.png";

const neon = "#C7FF00";

const UseCase = () => (
  <section className="max-w-7xl mx-auto py-16 px-4">
    <h2 className="text-4xl font-bold text-white mb-2">
      Use <span style={{ color: neon }}>Cases</span>
    </h2>
    <p className="text-gray-300 mb-10">
      At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
    </p>
    <div className="flex flex-col gap-12">
      {/* For Individuals */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Cards */}
        <div className="flex-1 bg-[#181A1B] rounded-2xl p-8 grid grid-cols-2 gap-6 shadow-lg border border-[#232425]">
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconPersonal1} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Managing Personal Finances</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconPersonal2} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Saving for the Future</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconPersonal3} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Homeownership</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconPersonal4} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Education Funding</span>
          </div>
        </div>
        {/* Right: Text & Stats */}
        <div className="flex-1 flex flex-col justify-between bg-[#181A1B] rounded-2xl p-8 shadow-lg border border-[#232425]">
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
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Left: Text & Stats */}
        <div className="flex-1 flex flex-col justify-between bg-[#181A1B] rounded-2xl p-8 shadow-lg border border-[#232425]">
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
        <div className="flex-1 bg-[#181A1B] rounded-2xl p-8 grid grid-cols-2 gap-6 shadow-lg border border-[#232425]">
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconBusiness1} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Startups and Entrepreneurs</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconBusiness2} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Cash Flow Management</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconBusiness3} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Business Expansion</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#232425] rounded-xl py-8 shadow group hover:bg-[#232425]/80 transition">
            <img src={IconBusiness4} alt="" className="w-10 h-10 mb-4" />
            <span className="text-white font-medium text-base">Payment Solutions</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default UseCase;
