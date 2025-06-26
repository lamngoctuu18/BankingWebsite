import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logotrangchu.png";

function Header() {
  const location = useLocation();
  const menu = [
    { label: "Home", to: "/" },
    { label: "Careers", to: "/careers" },
    { label: "About", to: "/about" },
    { label: "Security", to: "/security" },
  ];

  return (
    <header className="w-full flex justify-center pt-[30px]">
      <div
        className="flex items-center justify-between"
        style={{
          width: "1280px",
          height: "73px",
          borderRadius: "100px",
          background: "rgba(28,28,28,1)",
          border: "1px solid rgba(38,38,38,1)",
          padding: "14px 24px",
        }}
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          {/* Logo image */}
          <img src={Logo} alt="YourBank" style={{ width: 134, height: 35 }} />
        </div>
        {/* Menu */}
        <nav className="flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "px-5 py-2 text-base font-medium transition " +
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
        <div className="flex items-center gap-4">
          <Link
            to="/signup"
            className="text-white text-base font-medium hover:underline"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-[#D1FF3A] text-[#232425] font-semibold px-7 py-2 rounded-full text-base shadow transition hover:brightness-110"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;