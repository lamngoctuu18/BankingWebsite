import React, { useState } from "react";
const neon = "#C7FF00";

const featureTabs = [
	{ label: "Online Banking" },
	{ label: "Financial Tools" },
	{ label: "Customer Support" },
];

const featureCards = [
	{
		title: "24/7 Account Access",
		desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
	},
	{
		title: "Mobile Banking App",
		desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
	},
	{
		title: "Secure Transactions",
		desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
	},
	{
		title: "Bill Pay and Transfers",
		desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
	},
];

const ArrowIcon = () => (
	<svg width="22" height="22" fill="none" viewBox="0 0 22 22">
		<path
			d="M7 15L15 7M15 7H7M15 7V15"
			stroke={neon}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const OurFeatures = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section
			className="max-w-7xl mx-auto py-10 md:py-16 px-2 sm:px-4"
			style={{ fontFamily: "Lexend, sans-serif" }}
		>
			{/* Title & Description */}
			<h2 className="text-2xl md:text-4xl font-bold mb-2 flex items-end gap-2">
				<span className="text-white">Our</span>
				<span style={{ color: neon }}>Features</span>
			</h2>
			<p className="text-[#BFBFBF] mb-8 md:mb-10 max-w-3xl text-sm md:text-base font-normal">
				Experience a host of powerful features at YourBank, including seamless
				online banking, secure transactions, and personalized financial insights,
				all designed to enhance your banking experience
			</p>
			<div className="flex flex-col md:flex-row gap-6 md:gap-8">
				{/* Feature Categories Menu */}
				<div className="w-full md:w-64 flex md:flex-col flex-row gap-2 md:gap-4 mb-2 md:mb-0">
					{featureTabs.map((tab, i) => (
						<button
							key={tab.label}
							onClick={() => setActiveTab(i)}
							className={`rounded-full px-6 py-3 text-base font-medium transition-all duration-200 border ${
								activeTab === i
									? "bg-[#181A1B] text-[#C7FF00] border-[#C7FF00]"
									: "bg-[#181A1B] text-white border-[#232425] hover:border-[#C7FF00] hover:text-[#C7FF00]"
							}`}
							style={{
								outline: "none",
								fontFamily: "Lexend, sans-serif",
								boxShadow:
									activeTab === i ? "0 2px 12px #C7FF0033" : "none",
							}}
						>
							{tab.label}
						</button>
					))}
				</div>
				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
					{featureCards.map((card, idx) => (
						<div
							key={idx}
							className="rounded-2xl bg-[#181A1B] p-6 md:p-7 flex flex-col min-h-[140px] md:min-h-[170px] border border-[#232425] hover:border-[#C7FF00] transition group w-full"
							style={{
								boxShadow: "0 2px 16px #0004",
								fontFamily: "Lexend, sans-serif",
							}}
						>
							<div className="flex items-start justify-between mb-2">
								<h3 className="text-white text-lg md:text-xl font-semibold">
									{card.title}
								</h3>
								<span className="ml-2 mt-1 group-hover:scale-110 transition-transform">
									<ArrowIcon />
								</span>
							</div>
							<p className="text-[#BFBFBF] text-sm md:text-base font-normal">
								{card.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default OurFeatures;