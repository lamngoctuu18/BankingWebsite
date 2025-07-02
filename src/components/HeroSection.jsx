import React from "react";
import GroupImg from "../assets/images/Group.png";
import IconSwap from "../assets/images/DauCong.png";
import IconEth from "../assets/images/kimcuong.png";
import IconEur from "../assets/images/euro.png";
import IconUsd from "../assets/images/dola.png";
import IconCheck from "../assets/images/NoLLc.png";
import IconBtc from "../assets/images/bicoin.png";
import IconTransaction from "../assets/images/Transacion.png";
const neon = "#C7FF00";
const darkBg = "#181A1B";
const cardBg = "#232425";
const currencies = [
  { icon: <img src={IconUsd} alt="USD" width={28} height={28} />, label: "USD" },
  { icon: <img src={IconEur} alt="EUR" width={28} height={28} />, label: "EUR" },
  { icon: <img src={IconBtc} alt="BTC" width={28} height={28} />, label: "BTC" },
  { icon: <img src={IconEth} alt="ETH" width={28} height={28} />, label: "ETH" },
];

const fontLexend = "font-['Lexend',sans-serif]";

const HeroSection = () => (
  <main
    className={`relative min-h-[700px] flex flex-col md:flex-row items-center md:items-start ${fontLexend}`}
    style={{ background: darkBg }}
  >
    <div className={`max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-4 items-center md:items-start px-2 sm:px-4 lg:px-6 py-6 md:py-8 lg:py-6 ${fontLexend}`}>
      {/* Left: Intro */}
      <section className={`flex-1 flex flex-col gap-4 md:gap-6 lg:gap-4 pt-2 md:pt-2 w-full items-center md:items-start text-center md:text-left ${fontLexend}`}>
        {/* Badge */}
        <div
          className="inline-flex items-center rounded-full bg-[#232425] mx-auto md:mx-0 font-medium mb-[18px] px-4 py-2 gap-2"
        >
          <img src={IconCheck} alt="check" width={20} height={20} />
          <span className="text-[15px] font-medium text-white whitespace-nowrap font-['Lexend',sans-serif]">
            No LLC Required, No Credit Check.
          </span>
        </div>
        {/* tiêu đề */}
        <h1
          className="font-extrabold text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] font-['Lexend',sans-serif] mb-2"
        >
          Welcome to YourBank<br />
          Empowering Your <span style={{ color: neon }}>Financial Journey</span>
        </h1>
        {/* Mô tả */}
        <p
          className="text-[16px] sm:text-[17px] md:text-[18px] text-[#A3A3A3] max-w-[520px] font-normal mb-6 mr-auto leading-[1.5] font-['Lexend',sans-serif]"
        >
          At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
        </p>
        {/*nút Open Account */}
        <button
          className="font-bold text-[17px] rounded-full px-8 py-3 shadow-lg transition hover:brightness-110 mx-auto md:mx-0 font-['Lexend',sans-serif] bg-[#C7FF00] text-[#181A1B] border-none outline-none w-fit"
        >
          Open Account
        </button>
      </section>
      {/* Right: Card Widget */}
      <section className={`flex-1 flex flex-col gap-6 md:gap-8 w-full max-w-md mx-auto relative mt-8 md:mt-0 ${fontLexend}`}>
        {/* Card Widget */}
        <div
          className="rounded-[18px] relative w-full overflow-visible"
          style={{
            background: cardBg,
            boxShadow: "0 8px 40px 0 #000a, 0 0 0 2px #C7FF0033",
            border: `1.5px solid #232425`,
            padding: "2rem 0.5rem 1.5rem 0.5rem",
            minWidth: 0,
            minHeight: 340,
            maxWidth: "100%",
            zIndex: 0,
          }}
        >
          {/* Monthly Income - Responsive */}
          <div
            className="absolute top-0 left-0 flex items-center bg-[#222] rounded-[8.26px] shadow-lg px-4 py-2 min-w-[150px] min-h-[44px] font-semibold gap-2 z-20"
            style={{
              boxShadow: "0 4px 32px #0008",
              transform: "translate(-20%, -50%) scale(0.85)",
            }}
          >
            <span
              className="flex items-center justify-center rounded-full bg-[#C7FF00] w-10 h-10 mr-2 font-bold"
            >
              <img src={IconSwap} alt="swap" width={16} height={16} />
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[15px] leading-none font-['Lexend',sans-serif]">
                + $5000,00
              </span>
              <span className="text-white font-normal text-[11px] mt-1 font-['Lexend',sans-serif]">
                Monthly Income
              </span>
            </div>
          </div>
          {/* Neon arrows illustration */}
          <div
            className="absolute top-6 right-0 md:top-8 md:right-[-80px] lg:top-8 lg:right-[-120px] w-28 h-28 md:w-56 md:h-56 lg:w-72 lg:h-72 pointer-events-none z-0"
            style={{
              filter: "drop-shadow(0 0 32px #C7FF00AA)",
            }}
          >
            <img
              src={GroupImg}
              alt="Neon Arrows"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
          {/* Transactions */}
          <div className="relative z-10 font-['Lexend',sans-serif]">
            <div className="text-white font-bold text-[17px] mb-4 text-left font-['Lexend',sans-serif]">
              Your Transactions
            </div>
            <div className="flex flex-col gap-2">
              {/* First transaction - active */}
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4 bg-[#1A1A1A] border border-[#CAFF33] relative z-2"
              >
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[#C7FF00] w-11 h-11 min-w-[44px] min-h-[44px] mr-3"
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span className="text-[13px] font-normal text-[#E6E6E6] leading-[18px] font-['Lexend',sans-serif]">
                    Transaction
                  </span>
                  <span className="text-[18px] font-semibold text-white leading-[24px] mt-1 font-['Lexend',sans-serif]">
                    Joel Kenley
                  </span>
                </div>
                <span className="text-[20px] font-bold text-white leading-[24px] font-['Lexend',sans-serif]">
                  -$68.00
                </span>
              </div>
              {/* Other transactions - faded */}
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4 bg-[#181A1B] opacity-35 blur-[0.5px]"
              >
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[#C7FF00] w-11 h-11 min-w-[44px] min-h-[44px] mr-3"
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span className="text-[13px] font-normal text-[#E6E6E6] leading-[18px] font-['Lexend',sans-serif]">
                    Transaction
                  </span>
                  <span className="text-[18px] font-semibold text-white leading-[24px] mt-1 font-['Lexend',sans-serif]">
                    Mark Smith
                  </span>
                </div>
                <span className="text-[20px] font-bold text-white leading-[24px] font-['Lexend',sans-serif]">
                  -$68.00
                </span>
              </div>
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4 bg-[#181A1B] opacity-20 blur-[1px]"
              >
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[#C7FF00] w-11 h-11 min-w-[44px] min-h-[44px] mr-3"
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span className="text-[13px] font-normal text-[#E6E6E6] leading-[18px] font-['Lexend',sans-serif]">
                    Transaction
                  </span>
                  <span className="text-[18px] font-semibold text-white leading-[24px] mt-1 font-['Lexend',sans-serif]">
                    Lenen Roy
                  </span>
                </div>
                <span className="text-[20px] font-bold text-white leading-[24px] font-['Lexend',sans-serif]">
                  -$68.00
                </span>
              </div>
            </div>
            {/* Money Exchange */}
            <div className="mt-6 sm:mt-8 font-['Lexend',sans-serif]">
              <div className="text-white font-bold mb-3 sm:mb-4 text-base font-['Lexend',sans-serif]">Money Exchange</div>
              <div
                className="grid grid-cols-2 grid-rows-2 rounded-[10px] sm:rounded-[12px] border border-[#333] overflow-hidden bg-[#232425] font-['Lexend',sans-serif]"
              >
                {/* INR - Top Left */}
                <div className="flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-3 border-b border-r border-[#333]">
                  <img src="https://flagcdn.com/in.svg" alt="INR" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#232425]" />
                  <div>
                    <span className="text-white font-medium text-[13px] sm:text-base">INR</span>
                    <div className="text-xs text-gray-400">Indian Rupees</div>
                  </div>
                </div>
                {/* USD - Top Right */}
                <div className="flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-3 border-b border-[#333]">
                  <img src="https://flagcdn.com/us.svg" alt="USD" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#232425]" />
                  <div>
                    <span className="text-white font-medium text-[13px] sm:text-base">USD</span>
                    <div className="text-xs text-gray-400">United States Dollar</div>
                  </div>
                </div>
                {/* INR Value - Bottom Left */}
                <div className="flex items-center px-2 py-2 sm:px-4 sm:py-3 border-r border-[#333]">
                  <span className="text-white font-bold text-lg sm:text-xl">5,0000</span>
                </div>
                {/* USD Value - Bottom Right */}
                <div className="flex items-center px-2 py-2 sm:px-4 sm:py-3">
                  <span className="text-white font-bold text-lg sm:text-xl">12.00</span>
                </div>
              </div>
              <button
                className="w-full font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-[14px] sm:rounded-[18px] text-base transition mt-2 bg-[#C7FF0020] border-2 border-[#C7FF00] text-[#C7FF00] shadow font-['Lexend',sans-serif]"
              >
                Exchange
              </button>
            </div>
          </div>
          {/* Supported Currency Bar - Responsive */}
          <div
            className="flex items-center justify-between rounded-full px-3 py-2 sm:px-6 sm:py-2 shadow-lg border absolute right-1 left-1 sm:right-2 sm:left-2 sm:bottom-[-76px] bottom-[-54px] min-w-[180px] sm:min-w-[200px] w-max z-30 bg-[#232425] border-[#232425] font-['Lexend',sans-serif]"
            style={{
              boxShadow: "0 2px 12px #C7FF0033",
              transform: "translateX(40px)",
              fontSize: "0.95rem",
            }}
          >
            <span className="text-white text-sm sm:text-base font-medium mr-2 font-['Lexend',sans-serif]">
              Supported Currency
            </span>
            <div className="flex items-center gap-1 sm:gap-2 ml-2">
              {currencies.map((c, i) => (
                <span
                  key={c.label}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#181A1B] border-2 ${i === 0 ? "border-[#C7FF00] shadow-[0_0_12px_#C7FF00]" : "border-[#C7FF00]"}`}
                >
                  {c.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default HeroSection;
                   