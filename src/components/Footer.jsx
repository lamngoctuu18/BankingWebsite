import React from "react";
import Logo from "../assets/images/logotrangchu.png";
import IconMail from "../assets/images/Email.png";
import IconPhone from "../assets/images/Sdt.png";
import IconLocation from "../assets/images/ViTri.png";
import IconTwitter from "../assets/images/X.png";
import IconFacebook from "../assets/images/FB.png";
import IconLinkedin from "../assets/images/Ins.png";

const neon = "#C7FF00";

const Footer = () => (
  <footer className="bg-[#181A1B] pt-10 pb-6 md:pt-16 md:pb-8" style={{ fontFamily: "Lexend, sans-serif" }}>
    <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
      {/* Logo + Brand */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <img src={Logo} alt="YourBank" style={{ width: 134, height: 35 }} />
        </div>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 justify-center items-center">
          <a href="/" className="text-white hover:text-[#C7FF00]" style={{ fontFamily: "Lexend, sans-serif" }}>Home</a>
          <a href="/careers" className="text-white hover:text-[#C7FF00]" style={{ fontFamily: "Lexend, sans-serif" }}>Careers</a>
          <a href="/about" className="text-white hover:text-[#C7FF00]" style={{ fontFamily: "Lexend, sans-serif" }}>About</a>
          <a href="/security" className="text-white hover:text-[#C7FF00]" style={{ fontFamily: "Lexend, sans-serif" }}>Security</a>
        </nav>
      </div>
      {/* Contact */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 mb-6 text-white items-center text-center" style={{ fontFamily: "Lexend, sans-serif" }}>
        <span className="flex items-center gap-2 justify-center">
          <img src={IconMail} alt="mail" style={{ width: 20, height: 21 }} />
          hello@skillbridge.com
        </span>
        <span className="flex items-center gap-2 justify-center">
          <img src={IconPhone} alt="phone" style={{ width: 20, height: 21 }} />
          +91 91813 23 2309
        </span>
        <span className="flex items-center gap-2 justify-center">
          <img src={IconLocation} alt="location" style={{ width: 20, height: 21 }} />
          Somewhere in the World
        </span>
      </div>
      {/* Social + Copyright + Policy */}
      <div className="w-full border-t border-[#232425] pt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-6 mt-8 rounded-full" style={{ fontFamily: "Lexend, sans-serif" }}>
        <div className="flex gap-4 md:gap-4 mb-2 md:mb-0">
          <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconFacebook} alt="facebook" style={{ width: 24, height: 24 }} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconTwitter} alt="twitter" style={{ width: 24, height: 24 }} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconLinkedin} alt="linkedin" style={{ width: 24, height: 24 }} />
          </a>
        </div>
        <div className="text-gray-400 text-xs md:text-sm text-center" style={{ fontFamily: "Lexend, sans-serif" }}>YourBank All Rights Reserved</div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-gray-400 text-xs md:text-sm items-center" style={{ fontFamily: "Lexend, sans-serif" }}>
          <a href="#" className="hover:text-white" style={{ fontFamily: "Lexend, sans-serif" }}>Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-white" style={{ fontFamily: "Lexend, sans-serif" }}>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;