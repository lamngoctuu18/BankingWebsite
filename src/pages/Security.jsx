import React from "react";
import FAQSection from "../components/FAQSection";


const IconLayers = () => (
  <span className="inline-block w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center mr-4">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <g filter="url(#layers-glow)">
        <rect x="6" y="6" width="4" height="4" rx="2" fill="#A3E635"/>
        <rect x="18" y="6" width="4" height="4" rx="2" fill="#A3E635"/>
        <rect x="6" y="18" width="4" height="4" rx="2" fill="#A3E635"/>
        <rect x="18" y="18" width="4" height="4" rx="2" fill="#A3E635"/>
      </g>
      <defs>
        <filter id="layers-glow" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  </span>
);

const IconLock = () => (
  <span className="inline-block w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center mr-4">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <g filter="url(#lock-glow)">
        <rect x="8" y="14" width="12" height="8" rx="2" fill="#A3E635"/>
        <rect x="11" y="10" width="6" height="6" rx="3" fill="#A3E635"/>
      </g>
      <defs>
        <filter id="lock-glow" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  </span>
);

const IconShield = () => (
  <span className="inline-block w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center mr-4">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <g filter="url(#shield-glow)">
        <path d="M14 4L22 8V14C22 19 14 24 14 24C14 24 6 19 6 14V8L14 4Z" fill="#A3E635"/>
      </g>
      <defs>
        <filter id="shield-glow" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  </span>
);

const IconMobile = () => (
  <span className="inline-block w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center mr-4">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <g filter="url(#mobile-glow)">
        <rect x="9" y="5" width="10" height="18" rx="2" fill="#A3E635"/>
        <circle cx="14" cy="21" r="1" fill="#181818"/>
      </g>
      <defs>
        <filter id="mobile-glow" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  </span>
);

const Security = () => {
  return (
    <div className="relative bg-[#0e0e0e] text-white py-[60px] px-[40px] overflow-hidden space-y-[60px]">
      {/* Security Container */}
      <div className="w-full max-w-[1279px] min-h-[648px] p-4 md:p-12 relative mb-12 overflow-hidden mx-auto">
        {/* Nền Hero */}
        <div className="absolute inset-0 bg-[#1C1C1C] rounded-[20px] z-0"></div>
        
        {/* Ảnh hiệu ứng góc phải */}
  <div className="absolute top-0 right-0 w-[150px] md:w-[334px] h-[150px] md:h-[317px] z-5">
    <img
      src="/src/assets/images/Abstract DesignHieuUngCham.png"
      alt="Abstract Design"
      className="w-full h-full object-cover"
    />
  </div>

        
        {/* Ảnh nền bên phải */}
        <div className="absolute top-4 md:top-12 right-4 md:right-12 w-full md:w-[715px] md:h-[568px] z-10">
          <img
            src="public/images/dienthoai.png"
            alt="Hero Visual"
            className="w-full h-full object-cover brightness-70 md:rounded-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] "
          />
        </div>
        
        {/* Thẻ chữ nằm bên trái */}
        <div
          className="absolute top-[320px] md:top-12 left-4 md:left-12 right-4 md:right-auto md:w-[658px] md:h-[384px] p-6 md:p-[60px] 
                     bg-[#181818] flex flex-col gap-5
                     rounded-[0px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-br-[60px]
                     shadow-lg z-20"
        >
          <h1 className="text-[38px] md:text-[48px] font-bold font-lexend text-gray-400 leading-tight text-white">
            Your Security is Our <br />
            <span className="text-lime-400">Top Priority</span>
          </h1>
          <p className="text-[#b3b3b3] md:w-[538px] md:h-[120px] leading-relaxed text-[16px] font-lexend md:text-base">
            At YourBank, we understand the importance of keeping your financial information secure. 
            We employ robust security measures and advanced technologies to protect your personal and financial data.
            Rest assured that when you bank with us, your security is our utmost priority.
          </p>
        </div>
      </div>

      {/* Section 2: How We Protect You */}
<div className="w-full max-w-[1280px] mx-auto mb-[60px] px-4">
  <h2 className="text-[38px] font-bold font-lexend mb-4 text-left text-white">
    How We <span className="text-lime-400">Protect You</span>
  </h2>
  <p className="text-gray-300 text-base mb-10 w-full md:w-[1030px] text-[16px] text-left">
    At YourBank, we prioritize the security and confidentiality of your financial information.
    Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.
  </p>

  {/* Background image wrapper inside the section */}
  <div className="relative bg-[#181818] rounded-[50px] w-[1280px] h-[700px] overflow-hidden">
    {/* Background image */}
    <img
      src="/images/laplanh.png"
      alt="La Planh"
      className="absolute inset-0 w-[1269px] h-[549px] object-cover opacity-10 pointer-events-none"
    />

    {/* Overlay content */}
    <div className="relative z-10 p-6 md:p-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <img
        src="/images/laplanh.png"
        alt="Card Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none rounded-[16px]"
      />
        {/* Card 1 */}
        <div className="flex flex-col bg-[#232323] rounded-[16px] p-8 h-[296px] w-full max-w-[550px] mx-auto shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center mr-4">
              <IconLayers className="text-lime-400 w-[380px] h-[30px]" />
            </div>
            <span className="text-lg font-semibold text-white text-[20px] w-[380px] h-[30px]">Secure Online Banking Platform</span>
          </div>
          <p className="text-gray-300 text-base w-[470px] h-[96px]">
            Our online banking platform is built with multiple layers of security to safeguard your information.
            We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-[#232323] rounded-[16px] p-8 h-[296px] w-full max-w-[550px] mx-auto shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center mr-4">
              <IconLock className="text-lime-400" />
            </div>
            <span className="text-lg font-semibold text-white text-[20px]">Multi-Factor Authentication</span>
          </div>
          <p className="text-gray-300 text-base">
            To enhance the security of your online banking experience, we employ multi-factor authentication.
            This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-[#232323] rounded-[16px] p-8 h-[296px] w-full max-w-[550px] mx-auto shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center mr-4">
              <IconShield className="text-lime-400" />
            </div>
            <span className="text-lg font-semibold text-white text-[20px]">Fraud Monitoring</span>
          </div>
          <p className="text-gray-300 text-base">
            We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities.
            Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col bg-[#232323] rounded-[16px] p-8 h-[296px] w-full max-w-[550px] mx-auto shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center mr-4">
              <IconMobile className="text-lime-400" />
            </div>
            <span className="text-lg font-semibold text-white text-[20px]">Secure Mobile Banking</span>
          </div>
          <p className="text-gray-300 text-base text-[16px] text-left">
            Our mobile banking app is designed with the same level of security as our online banking platform.
            You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Thành phần E - FAQ Section */}
      <FAQSection />

      
    </div>
  );
};

export default Security;