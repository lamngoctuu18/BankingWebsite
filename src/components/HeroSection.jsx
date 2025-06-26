import React from "react";
import GroupImg from "../assets/images/Group.png";
import IconSwap from "../assets/images/Transacion.png";
import IconEth from "../assets/images/kimcuong.png";
import IconEur from "../assets/images/euro.png";
import IconUsd from "../assets/images/dola.png";
import IconCheck from "../assets/images/NoLLc.png";
import IconBtc from "../assets/images/bicoin.png";
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
      <section className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-4 pt-2 md:pt-2 w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full"
          style={{
            background: "#232425",
            fontWeight: 600,
            minWidth: 200,
            marginBottom: "18px",
          }}
        >
            <img src={IconCheck} alt="check" width={20} height={20} />
          <span className="text-sm font-medium text-white">
            No LLC Required, No Credit Check.
          </span>
        </div>
        {/* Title */}
        <h1
          className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            lineHeight: 1.15,
            fontFamily: "Inter, Arial, sans-serif",
            letterSpacing: "-1px",
            marginBottom: "0.5rem",
          }}
        >
          Welcome to YourBank<br />
          Empowering Your <span style={{ color: neon, display: "inline" }}>Financial Journey</span>
        </h1>
        {/* Description */}
        <p
          className="text-base"
          style={{
            color: "#A3A3A3",
            maxWidth: 520,
            fontWeight: 400,
            marginBottom: "1.5rem",
          }}
        >
          At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
        </p>
        {/* Open Account Button */}
        <button
          className="font-bold text-base rounded-full px-7 py-2 shadow-lg transition hover:brightness-110"
          style={{
            background: neon,
            color: "#181A1B",
            boxShadow: "0 2px 12px #C7FF0033",
            border: "none",
            outline: "none",
            width: "fit-content",
          }}
        >
          Open Account
        </button>
      </section>
      {/* Right: Card Widget */}
      <section className="flex-1 flex flex-col gap-6 md:gap-8 w-full max-w-md mx-auto relative mt-8 md:mt-0">
        {/* Monthly Income Badge */}
        <div
          className="absolute -top-12 left-0 z-30 hidden sm:flex"
          style={{
            background: "#232425",
            borderRadius: "16px",
            boxShadow: "0 4px 32px #0008",
            padding: "18px 32px 18px 24px",
            display: "flex",
            alignItems: "center",
            minWidth: 200,
            minHeight: 64,
            fontWeight: 600,
            gap: 16,
          }}
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              background: neon,
              width: 40,
              height: 40,
              marginRight: 18,
              fontSize: 28,
              color: "#232425",
              fontWeight: 700,
            }}
          >
            <img src={IconSwap} alt="swap" width={22} height={22} />
          </span>
          <div className="flex flex-col">
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 20, lineHeight: 1 }}>
              + $5000,00
            </span>
            <span style={{ color: "#A3A3A3", fontWeight: 400, fontSize: 15, marginTop: 2 }}>
              Monthly Income
            </span>
          </div>
        </div>
        {/* Card Widget */}
        <div
          className="rounded-[18px] relative w-full overflow-visible"
          style={{
            background: cardBg,
            boxShadow: "0 8px 40px 0 #000a, 0 0 0 2px #C7FF0033",
            border: `1.5px solid #232425`,
            padding: "2.5rem 1rem 2rem 1rem",
            minWidth: 0,
            minHeight: 380,
            maxWidth: "100%",
            zIndex: 0, // Đảm bảo lớp này thấp hơn các nội dung khác
          }}
        >
          {/* Neon arrows illustration */}
          <div
            className="absolute top-6 right-0 md:top-8 md:right-[-80px] lg:top-8 lg:right-[-120px] w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 pointer-events-none"
            style={{
              zIndex: 0, // Đặt zIndex thấp để icon Group.png lùi xuống dưới các nội dung khác
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
                className="flex items-center gap-4 rounded-[12px] px-4 py-3"
                style={{
                  background: "#232425",
                  boxShadow: `0 0 0 2px ${neon}`,
                  filter: "drop-shadow(0 2px 12px #C7FF0033)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{ background: neon }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill={neon} />
                    <path d="M7 10.5l2 2 4-4" stroke="#232425" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-white font-semibold text-base">Joel Kenley</div>
                  <div className="text-xs text-gray-400">Transaction</div>
                </div>
                <span className="text-white font-bold text-base">- $68.00</span>
              </div>
              {/* Other transactions - faded */}
              <div className="flex items-center gap-4 rounded-[12px] px-4 py-3" style={{ opacity: 0.35 }}>
                <div className="w-8 h-8" />
                <div className="flex-1">
                  <div className="text-white font-semibold text-base">Mark Smith</div>
                  <div className="text-xs text-gray-400">Transaction</div>
                </div>
                <span className="text-white font-bold text-base">- $68.00</span>
              </div>
              <div className="flex items-center gap-4 rounded-[12px] px-4 py-3" style={{ opacity: 0.18 }}>
                <div className="w-8 h-8" />
                <div className="flex-1">
                  <div className="text-white font-semibold text-base">Lenen Roy</div>
                  <div className="text-xs text-gray-400">Transaction</div>
                </div>
                <span className="text-white font-bold text-base">- $68.00</span>
              </div>
            </div>
            {/* Money Exchange */}
            <div className="mt-8">
              <div className="text-white font-bold mb-4 text-base">Money Exchange</div>
              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 rounded-[12px] border bg-[#232425] px-4 py-4"
                style={{
                  border: "1.5px solid #444",
                  boxShadow: "0 2px 12px #C7FF0033",
                }}
              >
                {/* INR */}
                <div className="flex flex-col items-center flex-1">
                  <span className="flex items-center gap-2">
                    <img src="https://flagcdn.com/in.svg" alt="INR" className="w-6 h-6 rounded-full border border-[#232425]" />
                    <span className="text-white font-medium">INR</span>
                  </span>
                  <span className="text-xs text-gray-400 mt-1">Indian Rupees</span>
                  <span className="text-white font-bold text-xl mt-2">5,0000</span>
                </div>
                {/* USD */}
                <div className="flex flex-col items-center flex-1">
                  <span className="flex items-center gap-2">
                    <img src="https://flagcdn.com/us.svg" alt="USD" className="w-6 h-6 rounded-full border border-[#232425]" />
                    <span className="text-white font-medium">USD</span>
                  </span>
                  <span className="text-xs text-gray-400 mt-1">United States Dollar</span>
                  <span className="text-white font-bold text-xl mt-2">12.00</span>
                </div>
              </div>
              <button
                className="w-full font-bold px-8 py-3 rounded-[18px] text-base transition mt-2"
                style={{
                  background: "rgba(199,255,0,0.08)",
                  border: `2px solid ${neon}`,
                  color: neon,
                  boxShadow: "0 2px 12px #C7FF0033",
                  fontWeight: 700,
                  marginTop: "18px",
                  marginBottom: "10px",
                }}
              >
                Exchange
              </button>
            </div>
          </div>
          {/* Supported Currency Bar */}
          <div
            className="flex items-center justify-between rounded-full px-6 py-2 shadow-lg border absolute right-2 left-2 sm:right-8 sm:left-auto sm:bottom-[-76px] bottom-[-60px] min-w-[200px] sm:min-w-[260px] w-max z-30"
            style={{
              background: "#232425",
              border: `1.5px solid #232425`,
              boxShadow: "0 2px 12px #C7FF0033",
              transform: "none",
            }}
          >
            <span className="text-white text-base font-medium mr-2">
              Supported Currency
            </span>
            <div className="flex items-center gap-2 ml-2">
              {currencies.map((c, i) => (
                <span
                  key={c.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{
                    background: "#181A1B",
                    border: `2px solid ${neon}`,
                    fontWeight: 700,
                    fontSize: "1.1rem",
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





