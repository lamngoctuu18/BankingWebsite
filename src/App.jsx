import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Security from "./pages/Security";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HeroSection from "./components/HeroSection";
import OurProducts from "./components/OurProducts";
import UseCase from "./components/UseCase";
import OurFeatures from "./components/OurFeatures";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen font-sans"
        style={{ background: "rgba(26, 26, 26, 1)", fontFamily: "Lexend, sans-serif" }}
      >
        <Header />
        <main className="mt-8 md:mt-12 px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <HeroSection />
                  <OurProducts />
                  <UseCase />
                  <OurFeatures />
                  <FAQSection />
                  <TestimonialsSection />
                  <CTASection />
                </>
              }
            />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
