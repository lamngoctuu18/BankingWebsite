import React from "react";
const neon = "#C7FF00";
const CTASection = () => (
  <section
    className="max-w-5xl mx-auto my-16 rounded-2xl flex items-center"
    style={{
      background: "#232425",
      minHeight: 160,
      boxShadow: "0 0 0 1.5px #C7FF0033",
      padding: "2.5rem 2.5rem 2.5rem 2.5rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Gradient dots background effect */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "40%",
        background: "radial-gradient(circle at 0% 0%, #C7FF0033 0%, transparent 80%)",
        pointerEvents: "none",
        borderRadius: "inherit",
        zIndex: 0,
      }}
    />
    <div className="flex-1 z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Start your financial journey with{" "}
        <span style={{ color: neon }}>YourBank today!</span>
      </h2>
      <p className="text-gray-300 text-base md:text-[15px] max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.
      </p>
    </div>
    <div className="flex-shrink-0 z-10 flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
      <button
        className="rounded-full px-8 py-2 font-semibold text-base"
        style={{
          background: neon,
          color: "#232425",
          boxShadow: "0 2px 16px #C7FF0033",
          minWidth: 130,
          transition: "filter 0.2s",
        }}
      >
        Open Account
      </button>
    </div>
  </section>
);
export default CTASection;
