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


const fontLexend = { fontFamily: "Lexend, sans-serif" };

const HeroSection = () => (
  <main
    className="relative min-h-[700px] flex flex-col md:flex-row items-center md:items-start"
    style={{ background: darkBg, ...fontLexend }}
  >
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-4 items-center md:items-start px-2 sm:px-4 lg:px-6 py-6 md:py-8 lg:py-6" style={fontLexend}>
      {/* Left: Intro */}
      <section className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-4 pt-2 md:pt-2 w-full items-center md:items-start text-center md:text-left" style={fontLexend}>
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
            ...fontLexend,
          }}
        >
          <img src={IconCheck} alt="check" width={20} height={20} />
          <span className="text-[15px] font-medium text-white whitespace-nowrap" 
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "22px",
              letterSpacing: 0,
            }}>
            No LLC Required, No Credit Check.
          </span>
        </div>
        {/* tiêu đề */}
        <h1
          className="font-extrabold text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15]"
          style={{
            fontFamily: "Lexend, Arial, sans-serif",
            letterSpacing: 0,
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}>
          Welcome to YourBank<br />
          Empowering Your <span style={{ color: neon, display: "inline" }}>Financial Journey</span>
        </h1>
        {/* Mô tả */}
        <p
          className="text-[16px] sm:text-[17px] md:text-[18px]"
          style={{
            color: "#A3A3A3",
            maxWidth: 520,
            fontWeight: 400,
            marginBottom: "1.5rem",
            marginRight: "auto",
            lineHeight: 1.5,
            ...fontLexend,
          }}
        >
          At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
        </p>
        {/*nút Open Account */}
        <button
          className="font-bold text-[17px] rounded-full px-8 py-3 shadow-lg transition hover:brightness-110 mx-auto md:mx-0"
          style={{
            background: neon,
            color: "#181A1B",
            boxShadow: "0 2px 12px #C7FF0033",
            border: "none",
            outline: "none",
            width: "fit-content",
            ...fontLexend,
            fontSize: "14x",
            lineHeight: "150%",
            letterSpacing: 0,
            fontWeight: 400,
          }}
        >
          Open Account
        </button>
      </section>
      {/* Right: Card Widget */}
      <section className="flex-1 flex flex-col gap-6 md:gap-8 w-full max-w-md mx-auto relative mt-8 md:mt-0" style={fontLexend}>
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
            ...fontLexend,
          }}
        >
          {/* Monthly Income - Responsive */}
          <div
            className="absolute top-0 left-0 flex items-center"
            style={{
              background: "rgba(34, 37, 27, 1)",
              borderRadius: "8.26px",
              boxShadow: "0 4px 32px #0008",
              padding: "10px 18px 10px 10px",
              minWidth: "149.78px",
              minHeight: "60.73px",
              fontWeight: 600,
              gap: 10,
              zIndex: 20,
              transform: "translate(-20%, -50%) scale(0.85)",
              ...fontLexend,
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
                gap: "6.89px",
                ...fontLexend,
              }}
            >
              <img src={IconSwap} alt="swap" width={"16.57px"} height={"16.48px"} />
            </span>
            <div className="flex flex-col">
              <span style={{ color: "#FFFFFF", fontWeight: 400, fontSize: "13.77px", lineHeight: "150%",letterSpacing: 0, ...fontLexend }}>
                + $5000,00
              </span>
              <span style={{ color: "#FFFFFF", fontWeight: 300, fontSize: "11.02px",lineHeight: "150%",letterSpacing: 0, marginTop: 2, ...fontLexend }}>
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
          <div className="relative z-10" style={fontLexend}>
            <div
              className="text-white font-bold text-[17px] mb-4"
              style={{
                ...fontLexend,
                textAlign: "left",
                fontWeight: 700,
                fontSize: "17px",
                lineHeight: "22px",
                letterSpacing: 0,
              }}
            >
              Your Transactions
            </div>
            <div className="flex flex-col gap-2">
              {/* First transaction - active */}
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4"
                style={{
                  background: "rgba(26, 26, 26, 1)",
                  border: "rgba(202, 255, 51, 1)",
                  position: "relative",
                  zIndex: 2,
                  ...fontLexend,
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full"
                  style={{
                    background: neon,
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    minHeight: 44,
                    marginRight: 12,
                  }}
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span
                    className="text-[13px] font-normal"
                    style={{
                      color: "#E6E6E6",
                      ...fontLexend,
                      lineHeight: "18px",
                    }}
                  >
                    Transaction
                  </span>
                  <span
                    className="text-[18px] font-semibold"
                    style={{
                      color: "#fff",
                      ...fontLexend,
                      lineHeight: "24px",
                      marginTop: 1,
                    }}
                  >
                    Joel Kenley
                  </span>
                </div>
                <span
                  className="text-[20px] font-bold"
                  style={{
                    color: "#fff",
                    ...fontLexend,
                    lineHeight: "24px",
                  }}
                >
                  -$68.00
                </span>
              </div>
              {/* Other transactions - faded */}
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4"
                style={{
                  background: "#181A1B",
                  opacity: 0.35,
                  filter: "blur(0.5px)",
                  ...fontLexend,
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full"
                  style={{
                    background: neon,
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    minHeight: 44,
                    marginRight: 12,
                  }}
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span
                    className="text-[13px] font-normal"
                    style={{
                      color: "#E6E6E6",
                      ...fontLexend,
                      lineHeight: "18px",
                    }}
                  >
                    Transaction
                  </span>
                  <span
                    className="text-[18px] font-semibold"
                    style={{
                      color: "#fff",
                      ...fontLexend,
                      lineHeight: "24px",
                      marginTop: 1,
                    }}
                  >
                    Mark Smith
                  </span>
                </div>
                <span
                  className="text-[20px] font-bold"
                  style={{
                    color: "#fff",
                    ...fontLexend,
                    lineHeight: "24px",
                  }}
                >
                  -$68.00
                </span>
              </div>
              <div
                className="flex items-center gap-3 rounded-[16px] px-5 py-4"
                style={{
                  background: "#181A1B",
                  opacity: 0.18,
                  filter: "blur(1px)",
                  ...fontLexend,
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full"
                  style={{
                    background: neon,
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    minHeight: 44,
                    marginRight: 12,
                  }}
                >
                  <img src={IconTransaction} alt="transaction" width={22} height={22} />
                </span>
                <div className="flex flex-col flex-1 justify-center">
                  <span
                    className="text-[13px] font-normal"
                    style={{
                      color: "#E6E6E6",
                      ...fontLexend,
                      lineHeight: "18px",
                    }}
                  >
                    Transaction
                  </span>
                  <span
                    className="text-[18px] font-semibold"
                    style={{
                      color: "#fff",
                      ...fontLexend,
                      lineHeight: "24px",
                      marginTop: 1,
                    }}
                  >
                    Lenen Roy
                  </span>
                </div>
                <span
                  className="text-[20px] font-bold"
                  style={{
                    color: "#fff",
                    ...fontLexend,
                    lineHeight: "24px",
                  }}
                >
                  -$68.00
                </span>
              </div>
            </div>
            {/* Money Exchange */}
            <div className="mt-6 sm:mt-8" style={fontLexend}>
              <div className="text-white font-bold mb-3 sm:mb-4 text-base" style={fontLexend}>Money Exchange</div>
              <div
                className="grid grid-cols-2 grid-rows-2 rounded-[10px] sm:rounded-[12px] border border-[#333] overflow-hidden"
                style={{
                  background: "#232425",
                  ...fontLexend,
                }}
              >
                {/* INR - Top Left */}
                <div className="flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-3 border-b border-r border-[#333]" style={fontLexend}>
                  <img src="https://flagcdn.com/in.svg" alt="INR" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#232425]" />
                  <div>
                    <span className="text-white font-medium text-[13px] sm:text-base" style={fontLexend}>INR</span>
                    <div className="text-xs text-gray-400" style={fontLexend}>Indian Rupees</div>
                  </div>
                </div>
                {/* USD - Top Right */}
                <div className="flex items-center gap-2 px-2 py-2 sm:px-4 sm:py-3 border-b border-[#333]" style={fontLexend}>
                  <img src="https://flagcdn.com/us.svg" alt="USD" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#232425]" />
                  <div>
                    <span className="text-white font-medium text-[13px] sm:text-base" style={fontLexend}>USD</span>
                    <div className="text-xs text-gray-400" style={fontLexend}>United States Dollar</div>
                  </div>
                </div>
                {/* INR Value - Bottom Left */}
                <div className="flex items-center px-2 py-2 sm:px-4 sm:py-3 border-r border-[#333]" style={fontLexend}>
                  <span className="text-white font-bold text-lg sm:text-xl" style={fontLexend}>5,0000</span>
                </div>
                {/* USD Value - Bottom Right */}
                <div className="flex items-center px-2 py-2 sm:px-4 sm:py-3" style={fontLexend}>
                  <span className="text-white font-bold text-lg sm:text-xl" style={fontLexend}>12.00</span>
                </div>
              </div>
              <button
                className="w-full font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-[14px] sm:rounded-[18px] text-base transition mt-2"
                style={{
                  background: "rgba(199,255,0,0.08)",
                  color: neon,
                  fontWeight: 700,
                  marginTop: "14px",
                  marginBottom: "8px",
                  fontSize: "1rem",
                  ...fontLexend,
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
              transform: "translateX(40px)",
              fontSize: "0.95rem",
              ...fontLexend,
            }}
          >
            <span className="text-white text-sm sm:text-base font-medium mr-2" style={fontLexend}>
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
                    ...fontLexend,
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





