import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const menu = [
    { label: "Home", to: "/" },
    { label: "Careers", to: "/careers" },
    { label: "About", to: "/about" },
    { label: "Security", to: "/security" },
  ];

  return (
    <header className="bg-[#181A1B] w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-[#232425] px-8 py-3 shadow-lg border border-[#232425]">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          {/* Logo shape */}
          <div className="w-9 h-9 flex items-center justify-center rounded-md bg-transparent">
            {/* Neon green logo (SVG) */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="4" width="10" height="10" rx="2" fill="#D1FF3A" />
              <rect x="22" y="4" width="10" height="10" rx="2" fill="#D1FF3A" />
              <rect x="4" y="22" width="10" height="10" rx="2" fill="#D1FF3A" />
              <rect x="22" y="22" width="10" height="10" rx="2" fill="#D1FF3A" />
              <rect x="10" y="10" width="16" height="16" rx="4" fill="#181A1B" />
            </svg>
          </div>
          <span className="text-white text-xl font-semibold tracking-wide select-none">
            YourBanK
          </span>
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