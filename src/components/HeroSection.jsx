import React from "react";

const neon = "#D1FF3A";
const darkBg = "bg-[#181A1B]";
const cardBg = "bg-[#232425]";
const textGray = "text-gray-300";

const HeroSection = () => (
  <main className={`${darkBg} min-h-screen py-12 px-4`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
      {/* Left: Intro */}
      <section className="flex-1 flex flex-col gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#232425] w-max mb-2">
          {/* Check icon */}
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
            <circle cx="9" cy="9" r="9" fill={neon} />
            <path
              d="M6 9.5l2 2 4-4"
              stroke="#232425"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium text-white">
            No LLC Required, No Credit Check.
          </span>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Welcome to YourBank
          <br />
          Empowering Your{" "}
          <span className={`text-[${neon}]`}>Financial Journey</span>
        </h1>
        {/* Description */}
        <p className={`max-w-xl ${textGray} text-base md:text-lg`}>
          At YourBank, we are committed to providing secure, convenient, and
          innovative banking solutions for everyone. Join us and take control of
          your financial future with confidence.
        </p>
        {/* Open Account Button */}
        <button
          className={`mt-2 bg-[${neon}] text-[#232425] font-semibold px-8 py-3 rounded-full text-lg shadow transition hover:brightness-110 w-max`}
        >
          Open Account
        </button>
      </section>
      {/* Right: Widgets */}
      <section className="flex-1 flex flex-col gap-8 w-full max-w-md mx-auto">
        {/* Transactions Widget */}
        <div className={`${cardBg} rounded-3xl p-6 shadow-lg`}>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-flex items-center justify-center rounded-full bg-[${neon}] text-[#232425] font-bold px-3 py-1 text-xs`}>
              + $5000,00 Monthly Income
            </span>
          </div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Your Transactions
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              {/* Icon */}
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[${neon}]`}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <circle cx="9" cy="9" r="9" fill={neon} />
                  <path
                    d="M6 9.5l2 2 4-4"
                    stroke="#232425"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <span className="text-white font-medium">Joel Kenley</span>
                <span className={`block text-xs ${textGray}`}>Payment</span>
              </div>
              <span className="text-red-400 font-semibold">- $68.00</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[${neon}]`}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <circle cx="9" cy="9" r="9" fill={neon} />
                  <path
                    d="M6 9.5l2 2 4-4"
                    stroke="#232425"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <span className="text-white font-medium">Bank Interest</span>
                <span className={`block text-xs ${textGray}`}>Deposit</span>
              </div>
              <span className="text-green-400 font-semibold">+ $120.00</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[${neon}]`}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <circle cx="9" cy="9" r="9" fill={neon} />
                  <path
                    d="M6 9.5l2 2 4-4"
                    stroke="#232425"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <span className="text-white font-medium">Anna Smith</span>
                <span className={`block text-xs ${textGray}`}>Transfer</span>
              </div>
              <span className="text-red-400 font-semibold">- $250.00</span>
            </li>
          </ul>
        </div>
        {/* Money Exchange Widget */}
        <div className={`${cardBg} rounded-3xl p-6 shadow-lg`}>
          <h2 className="text-lg font-semibold text-white mb-4">
            Money Exchange
          </h2>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="block text-xs text-gray-400">From</span>
              <span className="text-white font-medium">INR</span>
            </div>
            <span className="text-2xl font-bold text-white">5,000</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="block text-xs text-gray-400">To</span>
              <span className="text-white font-medium">USD</span>
            </div>
            <span className="text-2xl font-bold text-white">12.00</span>
          </div>
          <div className="text-center text-sm text-gray-400 mb-4">
            5,000 INR = 12.00 USD
          </div>
          <button
            className={`w-full border-2 border-[${neon}] text-[${neon}] font-semibold px-8 py-2 rounded-full text-base transition hover:bg-[${neon}] hover:text-[#232425]`}
          >
            Exchange
          </button>
        </div>
      </section>
    </div>
  </main>
);

export default HeroSection;
