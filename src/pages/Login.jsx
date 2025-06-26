import React from "react";
import LSGoogleIcon from "../assets/images/LSGoogleIcon.png";
import LSFacebookIcon from "../assets/images/LSFacebookIcon.png";
import LSAppleIcon from "../assets/images/LSAppleIcon.png";
import LSEye from "../assets/images/LSEye.png";
import AbstractDesign from "../assets/images/Abstract DesignHieuUngCham.png";

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-7xl min-h-[700px] relative mb-12">
        <div className="w-full max-w-5xl mx-auto bg-[#181818] rounded-3xl p-4 md:p-12 relative overflow-hidden">
          {/* Background Image */}
          <img
            src={AbstractDesign}
            alt=""
            className="absolute top-0 right-0 w-[150px] md:w-[300px] pointer-events-none z-0"
          />
          
          {/* Content Container - to ensure content stays above the background image */}
          <div className="relative z-10">
            {/* Text Container - scaled from 1026x103 */}
            <div className="w-full flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-10">
              {/* Heading - scaled from 1026x60 */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#CAFF33]">Login</h1>
              {/* Paragraph - scaled from 1026x23 */}
              <p className="text-base md:text-lg text-[#BFBFBF] text-center px-4 md:px-0">
                Welcome back! Please log in to access your account.
              </p>
            </div>

            {/* Form - scaled from 1026x507 */}
            <form className="w-full flex flex-col items-center gap-6 md:gap-10">
              {/* Input Fields Container - scaled from 1026x75 */}
              <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Email Input - scaled from 498x75 */}
                <div className="w-full md:flex-1">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full h-[60px] md:h-[75px] rounded-[88px] border border-[#262626] bg-[#1A1A1A] px-6 md:px-8 py-4 md:py-6 text-[#BFBFBF] placeholder-[#59595A] font-light leading-[150%] focus:outline-none text-sm md:text-base"
                  />
                </div>
                {/* Password Input - scaled from 498x75 */}
                <div className="w-full md:flex-1 relative">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full h-[60px] md:h-[75px] rounded-[88px] border border-[#262626] bg-[#1A1A1A] px-6 md:px-8 py-4 md:py-6 text-[#BFBFBF] placeholder-[#59595A] font-light leading-[150%] focus:outline-none text-sm md:text-base"
                  />
                  {/* Eye Icon */}
                  <button 
                    type="button"
                    className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2"
                  >
                    <img src={LSEye} alt="Toggle password visibility" className="w-[18px] md:w-[21.53px] h-[14px] md:h-[16.5px]" />
                  </button>
                </div>
              </div>

              {/* Forgot Password - scaled from 1026x27 */}
              <div className="w-full text-center">
                <a href="#" className="text-white hover:text-[#CAFF33] transition underline text-sm md:text-base">
                  Forgot Password?
                </a>
              </div>

              {/* Buttons Container - scaled from 1026x325 */}
              <div className="w-full flex flex-col items-center gap-4 md:gap-6">
                {/* Login Button - scaled from 518x63 */}
                <button
                  type="submit"
                  className="w-full md:w-[518px] h-[50px] md:h-[63px] rounded-[63px] bg-[#CAFF33] text-[#262626] font-semibold py-3 md:py-[18px] px-4 md:px-5 transition hover:brightness-95 text-sm md:text-base"
                >
                  Login
                </button>

                {/* Sign Up Button - scaled from 518x63 */}
                <button
                  type="button"
                  className="w-full md:w-[518px] h-[50px] md:h-[63px] rounded-[63px] bg-[#333333] text-white font-semibold py-3 md:py-[18px] px-4 md:px-5 transition hover:bg-[#444] text-sm md:text-base"
                >
                  Sign Up
                </button>

                {/* Or Continue With - scaled from 518x27 */}
                <div className="flex items-center w-full md:w-[518px] gap-4 my-6 md:my-[30px]">
                  <span className="flex-1 h-px bg-[#262626]" />
                  <span className="text-[#B3B3B3] whitespace-nowrap text-sm md:text-base">
                    Or Continue with
                  </span>
                  <span className="flex-1 h-px bg-[#262626]" />
                </div>

                {/* Social Buttons - scaled from 518x94 */}
                <div className="flex gap-4 md:gap-6 justify-center">
                  {/* Google Button */}
                  <button
                    type="button"
                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center border border-[#CAFF33]/20 bg-gradient-to-b from-[#CAFF33]/10 to-transparent hover:border-[#CAFF33]/40 transition-all"
                  >
                    <img src={LSGoogleIcon} alt="Google" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
                  </button>
                  {/* Facebook Button */}
                  <button
                    type="button"
                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center border border-[#CAFF33]/20 bg-gradient-to-b from-[#CAFF33]/10 to-transparent hover:border-[#CAFF33]/40 transition-all"
                  >
                    <img src={LSFacebookIcon} alt="Facebook" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
                  </button>
                  {/* Apple Button */}
                  <button
                    type="button"
                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center border border-[#CAFF33]/20 bg-gradient-to-b from-[#CAFF33]/10 to-transparent hover:border-[#CAFF33]/40 transition-all"
                  >
                    <img src={LSAppleIcon} alt="Apple" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;