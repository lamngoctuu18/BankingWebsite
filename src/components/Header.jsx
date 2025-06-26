import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logotrangchu.png";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menu = [
    { label: "Home", to: "/" },
    { label: "Careers", to: "/careers" },
    { label: "About", to: "/about" },
    { label: "Security", to: "/security" },
  ];

  return (
    <header className="w-full flex justify-center pt-6 md:pt-[30px]">
      <div
        className="flex items-center justify-between w-full max-w-[1280px] h-[73px] rounded-full bg-[#1C1C1C] border border-[#262626] px-4 md:px-6 lg:px-8 py-2 md:py-[14px] relative"
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src={Logo} alt="YourBank" style={{ width: 134, height: 35 }} />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-[#232425] transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Menu */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "px-4 lg:px-5 py-2 text-base font-medium transition " +
                (location.pathname === item.to
                  ? "bg-[#232425] text-white rounded-full"
                  : "text-white hover:text-[#D1FF3A]")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link
            to="/signup"
            className="text-white text-base font-medium hover:underline"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-[#D1FF3A] text-[#232425] font-semibold px-5 lg:px-7 py-2 rounded-full text-base shadow transition hover:brightness-110"
          >
            Login
          </Link>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#1C1C1C] border-t border-[#232425] flex flex-col z-50 md:hidden animate-fadeIn">
            <nav className="flex flex-col gap-1 py-2 px-4">
              {menu.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "block px-4 py-2 text-base font-medium rounded-full transition " +
                    (location.pathname === item.to
                      ? "bg-[#232425] text-white"
                      : "text-white hover:text-[#D1FF3A]")
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-1 px-4 pb-3">
              <Link
                to="/signup"
                className="text-white text-base font-medium hover:underline py-2"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-[#D1FF3A] text-[#232425] font-semibold px-5 py-2 rounded-full text-base shadow transition hover:brightness-110"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;