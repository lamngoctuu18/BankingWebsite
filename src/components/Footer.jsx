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
  <footer className="bg-[#181A1B] pt-16 pb-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      {/* Logo + Brand */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <img src={Logo} alt="YourBank" style={{ width: 134, height: 35 }} />
        </div>
        <nav className="flex gap-8 mb-4">
          <a href="/" className="text-white hover:text-[#C7FF00]">Home</a>
          <a href="/careers" className="text-white hover:text-[#C7FF00]">Careers</a>
          <a href="/about" className="text-white hover:text-[#C7FF00]">About</a>
          <a href="/security" className="text-white hover:text-[#C7FF00]">Security</a>
        </nav>
      </div>
      {/* Contact */}
      <div className="flex gap-8 mb-6 text-white">
        <span className="flex items-center gap-2">
          <img src={IconMail} alt="mail" style={{ width: 20, height: 21 }} />
          hello@skillbridge.com
        </span>
        <span className="flex items-center gap-2">
          <img src={IconPhone} alt="phone" style={{ width: 20, height: 21 }} />
          +91 91813 23 2309
        </span>
        <span className="flex items-center gap-2">
          <img src={IconLocation} alt="location" style={{ width: 20, height: 21 }} />
          Somewhere in the World
        </span>
      </div>
      {/* Social + Copyright + Policy */}
      <div className="w-full border-t border-[#232425] pt-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-8 rounded-full">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconFacebook} alt="facebook" style={{ width: 20, height: 20 }} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconTwitter} alt="twitter" style={{ width: 20, height: 20 }} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: neon }}>
            <img src={IconLinkedin} alt="linkedin" style={{ width: 20, height: 20 }} />
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
