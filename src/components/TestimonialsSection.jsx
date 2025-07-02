import React, { useState } from "react";
import QuoteIcon from "../assets/images/IconOT.png";
const neon = "#C7FF00";
const testimonials = [
	{
		quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
		name: "Sara T",
	},
	{
		quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
		name: "John D",
	},
	{
		quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
		name: "Emily G",
	},
];

const tabs = [
	{ label: "For Individuals" },
	{ label: "For Businesses" },
];

const TestimonialsSection = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeIndex, setActiveIndex] = useState(1);

	// Hiệu ứng chuyển đổi
	const handlePrev = () =>
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	const handleNext = () =>
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

	// Lấy chỉ số của 3 card cần hiển thị trên desktop
	const getDesktopIndexes = () => {
		const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
		const next = (activeIndex + 1) % testimonials.length;
		return [prev, activeIndex, next];
	};

	return (
		<section className="max-w-7xl mx-auto py-8 md:py-10 lg:py-8 px-2 sm:px-4 font-['Lexend',sans-serif]">
			<h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-2 lg:mb-1">
				Our <span className="text-[#C7FF00]">Testimonials</span>
			</h2>
			<p className="text-gray-300 mb-6 md:mb-8 lg:mb-6 text-sm md:text-base">
				Discover how YourBank has transformed lives with innovative digital
				solutions and personalized customer service. See why our clients trust us
				for a secure and prosperous financial journey
			</p>
			{/* Tabs */}
			<div className="flex gap-0 mb-6 md:mb-8 lg:mb-6">
				<div className="flex gap-0 bg-[#232425] rounded-full p-1 w-max">
					{tabs.map((tab, idx) => (
						<button
							key={tab.label}
							onClick={() => setActiveTab(idx)}
							className={`px-4 md:px-7 py-2 rounded-full text-base font-semibold transition-all duration-200 min-w-[90px] outline-none border-none font-['Lexend',sans-serif] ${
								activeTab === idx
									? "bg-[#C7FF00] text-[#181A1B] shadow"
									: "bg-transparent text-white"
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>
			{/* Testimonials Carousel */}
			<div className="relative flex items-center justify-center">
				{/* Left Arrow */}
				<button
					onClick={handlePrev}
					className="absolute left-0 z-10 w-10 h-10 md:w-10 md:h-10 rounded-full bg-[#232425] flex items-center justify-center text-[#C7FF00] hover:bg-[#C7FF00] hover:text-[#232425] transition"
					aria-label="Previous"
				>
					<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
						<circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.08" />
						<path
							d="M12.5 15L8 10.5L12.5 6"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				{/* Testimonials */}
				<div className="flex gap-2 md:gap-6 lg:gap-4 w-full justify-center">
					{/* Mobile: chỉ hiển thị 1 card */}
					<div className="flex md:hidden w-full justify-center">
						{testimonials.map((t, i) =>
							i === activeIndex ? (
								<div
									key={i}
									className="rounded-2xl bg-[#181A1B] border border-[#232425] p-6 w-[90vw] max-w-[350px] flex flex-col items-center text-center transition-all duration-500 ease-in-out animate-slide-in-up font-['Lexend',sans-serif] opacity-100 scale-100 z-20 relative"
								>
									<img
										src={QuoteIcon}
										alt="quote"
										className="mb-4 transition-transform duration-500 group-hover:scale-110 w-11 h-11"
									/>
									<p className="mb-4 text-white font-semibold transition-colors duration-500 min-h-[100px]">
										{t.quote}
									</p>
									<span className="font-semibold text-[#C7FF00] transition-colors duration-500">
										{t.name}
									</span>
								</div>
							) : null
						)}
					</div>
					{/* Desktop: hiển thị 3 card */}
					<div className="hidden md:flex w-full justify-center">
						{getDesktopIndexes().map((idx, pos) => {
							// pos: 0 = left, 1 = center, 2 = right
							let opacityClass = "opacity-30", scaleClass = "scale-95", filterClass = "blur-[1.5px]";
							let extraClass = "";
							if (pos === 1) {
								opacityClass = "opacity-100";
								scaleClass = "scale-100";
								filterClass = "filter-none";
								extraClass = "hover:scale-105 hover:shadow-2xl z-20";
							} else {
								opacityClass = "opacity-70";
								scaleClass = "scale-98";
								filterClass = "blur-[0.5px]";
								extraClass = "z-10";
							}
							return (
								<div
									key={idx}
									className={`rounded-2xl bg-[#181A1B] border border-[#232425] p-8 w-[350px] flex flex-col items-center text-center transition-all duration-500 ease-in-out ${extraClass} group animate-slide-in-up font-['Lexend',sans-serif] ${opacityClass} ${scaleClass} ${filterClass} relative`}
								>
									<img
										src={QuoteIcon}
										alt="quote"
										className="mb-4 transition-transform duration-500 group-hover:scale-110 w-11 h-11"
									/>
									<p
										className={`mb-4 ${
											pos === 1 ? "text-white font-semibold" : "text-gray-400"
										} transition-colors duration-500 min-h-[100px]`}
									>
										{testimonials[idx].quote}
									</p>
									<span
										className={`font-semibold ${
											pos === 1 ? "text-[#C7FF00]" : "text-gray-500"
										} transition-colors duration-500`}
									>
										{testimonials[idx].name}
									</span>
								</div>
							);
						})}
					</div>
				</div>
				{/* Right Arrow */}
				<button
					onClick={handleNext}
					className="absolute right-0 z-10 w-10 h-10 md:w-10 md:h-10 rounded-full bg-[#232425] flex items-center justify-center text-[#C7FF00] hover:bg-[#C7FF00] hover:text-[#232425] transition"
					aria-label="Next"
				>
					<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
						<circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.08" />
						<path
							d="M8 15L12.5 10.5L8 6"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};
export default TestimonialsSection;
