import React from "react";
const neon = "#D1FF3A";
const Footer = () => (
  <footer className="bg-[#181A1B] pt-16 pb-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      {/* Logo + Brand */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="4" width="10" height="10" rx="2" fill={neon} />
            <rect x="22" y="4" width="10" height="10" rx="2" fill={neon} />
            <rect x="4" y="22" width="10" height="10" rx="2" fill={neon} />
            <rect x="22" y="22" width="10" height="10" rx="2" fill={neon} />
            <rect x="10" y="10" width="16" height="16" rx="4" fill="#181A1B" />
          </svg>
          <span className="text-white text-xl font-semibold tracking-wide select-none">YourBanK</span>
        </div>
        <nav className="flex gap-8 mb-4">
          <a href="/" className="text-white hover:text-[${neon}]">Home</a>
          <a href="/careers" className="text-white hover:text-[${neon}]">Careers</a>
          <a href="/about" className="text-white hover:text-[${neon}]">About</a>
          <a href="/security" className="text-white hover:text-[${neon}]">Security</a>
        </nav>
      </div>
      {/* Contact */}
      <div className="flex gap-8 mb-6 text-white">
        <span className="flex items-center gap-2">
          <svg width="18" height="18" fill={neon}><rect width="18" height="12" y="3" rx="2" fill={neon}/></svg>
          hello@skillbridge.com
        </span>
        <span className="flex items-center gap-2">
          <svg width="18" height="18" fill={neon}><circle cx="9" cy="9" r="9" fill={neon}/></svg>
          +91 91813 23 2309
        </span>
        <span className="flex items-center gap-2">
          <svg width="18" height="18" fill={neon}><circle cx="9" cy="9" r="9" fill={neon}/></svg>
          Somewhere in the World
        </span>
      </div>
      {/* Social + Copyright + Policy */}
      <div className="w-full border-t border-[#232425] pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-[${neon}] flex items-center justify-center text-[#232425]">
            {/* Facebook icon */}
            <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#232425"/><path d="M12 6h-1a1 1 0 0 0-1 1v1H8v2h2v4h2v-4h2l.5-2H12V7a.5.5 0 0 1 .5-.5H14V6z" fill={neon}/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[${neon}] flex items-center justify-center text-[#232425]">
            {/* Twitter icon */}
            <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#232425"/><path d="M15 7.5a3.38 3.38 0 0 1-1 .27 1.64 1.64 0 0 0 .72-.9 3.28 3.28 0 0 1-1.04.4A1.64 1.64 0 0 0 8.5 9.03a4.65 4.65 0 0 1-3.38-1.71 1.65 1.65 0 0 0 .51 2.2A1.6 1.6 0 0 1 5 9.13v.02a1.65 1.65 0 0 0 1.32 1.62c-.2.05-.41.07-.62.03a1.65 1.65 0 0 0 1.54 1.14A3.3 3.3 0 0 1 5 13.29a4.65 4.65 0 0 0 2.52.74c3.02 0 4.67-2.5 4.67-4.67 0-.07 0-.14-.01-.21A3.32 3.32 0 0 0 15 7.5z" fill={neon}/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[${neon}] flex items-center justify-center text-[#232425]">
            {/* LinkedIn icon */}
            <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#232425"/><rect x="6" y="8" width="2" height="6" fill={neon}/><rect x="12" y="8" width="2" height="6" fill={neon}/><rect x="6" y="6" width="2" height="2" fill={neon}/></svg>
          </a>
        </div>
        <div className="text-gray-400 text-sm">YourBank All Rights Reserved</div>
        <div className="flex gap-4 text-gray-400 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
