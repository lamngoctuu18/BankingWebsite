import React from "react";
import GroupImg from "../assets/images/Group.png";
import IconSwap from "../assets/images/DauCong.png";
import IconEth from "../assets/images/kimcuong.png";
import IconEur from "../assets/images/euro.png";
import IconUsd from "../assets/images/dola.png";
import IconCheck from "../assets/images/NoLLc.png";
import IconBtc from "../assets/images/bicoin.png";
import IconTransaction from "../assets/images/Transacion.png"; // thêm dòng này
const neon = "#C7FF00";
const darkBg = "#181A1B";
const cardBg = "#232425";
const currencies = [
  { icon: <img src={IconUsd} alt="USD" width={28} height={28} />, label: "USD" },
  { icon: <img src={IconEur} alt="EUR" width={28} height={28} />, label: "EUR" },
  { icon: <img src={IconBtc} alt="BTC" width={28} height={28} />, label: "BTC" },
  { icon: <img src={IconEth} alt="ETH" width={28} height={28} />, label: "ETH" },
];

const HeroSection = () => (
  <main
    className="relative min-h-[700px] flex flex-col md:flex-row items-center md:items-start"
    style={{ background: darkBg }}
  >
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-4 items-center md:items-start px-2 sm:px-4 lg:px-6 py-6 md:py-8 lg:py-6">
      {/* Left: Intro */}
      <section className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-4 pt-2 md:pt-2 w-full items-center md:items-start text-center md:text-left">
        {/* Badge */}
        <div
          className="inline-flex items-center rounded-full bg-[#232425] mx-auto md:mx-0"
          style={{
            fontWeight: 500,
            marginBottom: "18px",
            padding: "8px 16px 8px 8px",
            width: "fit-content",
            minWidth: 0,
            maxWidth: "100%",
            gap: "8px",
            marginLeft: 0,
          }}
        >
          <img src={IconCheck} alt="check" width={20} height={20} />
          <span className="text-sm font-medium text-white whitespace-nowrap">
            No LLC Required, No Credit Check.
          </span>
        </div>
        {/* Title */}
        <h1
          className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            letterSpacing: "-1px",
            marginBottom: "0.5rem",
          }}
        >
          Welcome to <br className="block sm:hidden" />
          YourBank
          <br className="block sm:hidden" />
          Empowering Your <span style={{ color: neon, display: "inline" }}>Financial Journey</span>
        </h1>
        {/* Description */}
        <p
          className="text-base sm:text-lg"
          style={{
            color: "#A3A3A3",
            maxWidth: 520,
            fontWeight: 400,
            marginBottom: "1.5rem",
            marginRight: "auto",
            lineHeight: 1.5,
          }}
        >
          At YourBank, we’re dedicated to delivering complete banking solutions that empower both individuals and businesses to reach their financial goals. Our commitment is to provide personalized, innovative services that put our customers’ needs at the forefront.
        </p>
        {/* Open Account Button */}
        <button
          className="font-bold text-base rounded-full px-7 py-3 shadow-lg transition hover:brightness-110 mx-auto md:mx-0"
          style={{
            background: neon,
            color: "#181A1B",
            boxShadow: "0 2px 12px #C7FF0033",
            border: "none",
            outline: "none",
            width: "fit-content",
            fontSize: "0.9rem",
          }}
        >
          Open Account
        </button>
      </section>
      {/* Right: Card Widget */}
      <section className="flex-1 flex flex-col gap-6 md:gap-8 w-full max-w-md mx-auto relative mt-8 md:mt-0">
        {/* Card Widget */}
        <div
          className="rounded-[18px] relative w-full overflow-visible"
          style={{
            background: cardBg,
            boxShadow: "0 8px 40px 0 #000a, 0 0 0 2px #C7FF0033",
            border: `1.5px solid #232425`,
            padding: "2rem 0.5rem 1.5rem 0.5rem", // giảm padding trên mobile
            minWidth: 0,
            minHeight: 340,
            maxWidth: "100%",
            zIndex: 0,
          }}
        >
          {/* Monthly Income - Responsive */}
          <div
            className="absolute top-0 left-0 flex items-center"
            style={{
              background: "#222222",
              borderRadius: "8.26px",
              boxShadow: "0 4px 32px #0008",
              padding: "10px 18px 10px 10px",
              minWidth: 140,
              minHeight: 44,
              fontWeight: 600,
              gap: 10,
              zIndex: 20,
              transform: "translate(-20%, -50%) scale(0.85)", // scale nhỏ lại trên mobile
            }}
          >
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                background: "#C7FF00",
                width: 40,
                height: 40,
                marginRight: 10,
                fontSize: 18,
                color: "#C7FF00",
                fontWeight: 700,
                gap: "6.89px"
              }}
            >
              <img src={IconSwap} alt="swap" width={16} height={16} />
            </span>
            <div className="flex flex-col">
              <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15, lineHeight: 1 }}>
                + $5000,00
              </span>
              <span style={{ color: "#FFFFFF", fontWeight: 400, fontSize: 11, marginTop: 2 }}>
                Monthly Income
              </span>
            </div>
          </div>
          {/* Neon arrows illustration */}
          <div
            className="absolute top-6 right-0 md:top-8 md:right-[-80px] lg:top-8 lg:right-[-120px] w-28 h-28 md:w-56 md:h-56 lg:w-72 lg:h-72 pointer-events-none"
            style={{
              zIndex: 0,
              filter: "drop-shadow(0 0 32px #C7FF00AA)",
            }}
          >
            <img
              src={GroupImg}
              alt="Neon Arrows"
              className="w-full h-full object-contain"
              draggable={false}
              style={{ zIndex: 0 }}
            />
          </div>
          {/* Transactions */}
          <div className="relative z-10">
            <div className="text-white font-bold text-base mb-3">Your Transactions</div>
            <div className="flex flex-col gap-2">
              {/* First transaction - active */}
              <div
                className="flex items-center gap-3 rounded-[10px] px-3 py-2 sm:gap-4 sm:rounded-[12px] sm:px-4 sm:py-3"
                style={{
                  background: "#232425",
                  boxShadow: `0 0 0 2px ${neon}`,
                  filter: "drop-shadow(0 2px 12px #C7FF0033)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full" style={{ background: neon }}>
                  <img src={IconTransaction} alt="transaction" width={18} height={18} />
                </span>
                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] sm:text-xs text-white font-medium">Transaction</span>
                  <span className="text-white font-semibold text-[15px] sm:text-base">Joel Kenley</span>
                </div>
                <span className="text-white font-bold text-[15px] sm:text-base">- $68.00</span>
              </div>
              {/* Other transactions - faded */}
              <div
                className="flex items-center gap-3 rounded-[10px] px-3 py-2 sm:gap-4 sm:rounded-[12px] sm:px-4 sm:py-3"
                style={{
                  opacity: 0.35,
                  background: "#232425",
                }}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full" style={{ background: neon }}>
                  <img src={IconTransaction} alt="transaction" width={18} height={18} />
                </span>
                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] sm:text-xs text-white font-medium">Transaction</span>
                  <span className="text-white font-semibold text-[15px] sm:text-base">Mark Smith</span>
                </div>
                <span className="text-white font-bold text-[15px] sm:text-base">- $68.00</span>
              </div>
              <div
                className="flex items-center gap-3 rounded-[10px] px-3 py-2 sm:gap-4 sm:rounded-[12px] sm:px-4 sm:py-3"
                style={{
                  opacity: 0.18,
                  background: "#232425",
                }}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full" style={{ background: neon }}>
                  <img src={IconTransaction} alt="transaction" width={18} height={18} />
                </span>
                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] sm:text-xs text-white font-medium">Transaction</span>
                  <span className="text-white font-semibold text-[15px] sm:text-base">Lenen Roy</span>
                </div>
                <span className="text-white font-bold text-[15px] sm:text-base">- $68.00</span>
              </div>
            </div>
            {/* Money Exchange */}
            <div className="mt-6 sm:mt-8">
              <div className="text-white font-bold mb-3 sm:mb-4 text-base">Money Exchange</div>
              <div
                className="grid grid-cols-2 grid-rows-2 rounded-[10px] sm:rounded-[12px] border border-[#333] overflow-hidden"
                style={{
                  background: "#232425",
                  boxShadow: "0 2px 12px #C7FF0033",
                }}
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
                className="w-full font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-[14px] sm:rounded-[18px] text-base transition mt-2"
                style={{
                  background: "rgba(199,255,0,0.08)",
                  border: `2px solid ${neon}`,
                  color: neon,
                  boxShadow: "0 2px 12px #C7FF0033",
                  fontWeight: 700,
                  marginTop: "14px",
                  marginBottom: "8px",
                  fontSize: "1rem",
                }}
              >
                Exchange
              </button>
            </div>
          </div>
          {/* Supported Currency Bar - Responsive */}
          <div
            className="flex items-center justify-between rounded-full px-3 py-2 sm:px-6 sm:py-2 shadow-lg border absolute right-1 left-1 sm:right-2 sm:left-2 sm:bottom-[-76px] bottom-[-54px] min-w-[180px] sm:min-w-[200px] w-max z-30"
            style={{
              background: "#232425",
              border: `1.5px solid #232425`,
              boxShadow: "0 2px 12px #C7FF0033",
              transform: "translateX(40px)", // lệch phải một chút
              fontSize: "0.95rem",
            }}
          >
            <span className="text-white text-sm sm:text-base font-medium mr-2">
              Supported Currency
            </span>
            <div className="flex items-center gap-1 sm:gap-2 ml-2">
              {currencies.map((c, i) => (
                <span
                  key={c.label}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full"
                  style={{
                    background: "#181A1B",
                    border: `2px solid ${neon}`,
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: i === 0 ? "0 0 12px #C7FF00" : undefined,
                  }}
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





