import React, { useState } from "react";
const neon = "#C7FF00";
const features = [
	{
		tab: "Online Banking",
		title: "24/7 Account Access",
		desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
	},
	{
		tab: "Financial Tools",
		title: "Secure Transactions",
		desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
	},
	{
		tab: "Customer Support",
		title: "Bill Pay and Transfers",
		desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
	},
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
			stroke="#C7FF00"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const OurFeatures = () => {
	const [active, setActive] = useState(0);

	return (
		<section className="max-w-7xl mx-auto py-16 px-4">
			<h2 className="text-4xl font-bold text-white mb-2">
				Our <span style={{ color: neon }}>Features</span>
			</h2>
			<p className="text-gray-300 mb-10 max-w-3xl">
				Experience a host of powerful features at YourBank, including seamless
				online banking, secure transactions, and personalized financial insights,
				all designed to enhance your banking experience
			</p>
			<div className="flex flex-col md:flex-row gap-8">
				{/* Tabs */}
				<div className="flex flex-col gap-4 w-full md:w-64">
					{features.map((f, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className={`rounded-full px-6 py-3 text-left font-semibold transition-all duration-200 border-none outline-none
                ${
					active === i
						? "bg-[#232425] text-[#C7FF00] shadow"
						: "bg-transparent text-white hover:bg-[#232425] hover:text-[#C7FF00]"
				}`}
							style={{
								border: "none",
								fontSize: "1rem",
								boxShadow:
									active === i ? "0 2px 12px #C7FF0033" : "none",
							}}
						>
							{f.tab}
						</button>
					))}
				</div>
				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
					{featureCards.map((card, idx) => (
						<div
							key={idx}
							className="rounded-2xl bg-[#232425] p-7 flex flex-col justify-between min-h-[170px] border border-[#232425] hover:border-[#C7FF00] transition group"
							style={{
								boxShadow: "0 2px 16px #0004",
							}}
						>
							<div>
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-lg font-semibold text-white">
										{card.title}
									</h3>
									<span className="ml-2 group-hover:scale-110 transition-transform">
										<ArrowIcon />
									</span>
								</div>
								<p className="text-gray-300 text-base">{card.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default OurFeatures;