import React, { useState } from "react";
const neon = "#D1FF3A";
const features = [
	{
		tab: "Online Banking",
		title: "24/7 Account Access",
		desc: "Access your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
	},
	{
		tab: "Financial Tools",
		title: "Secure Transactions",
		desc: "Your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication.",
	},
	{
		tab: "Customer Support",
		title: "Bill Pay and Transfers",
		desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers.",
	},
];
const OurFeatures = () => {
	const [active, setActive] = useState(0);
	return (
		<section className="max-w-7xl mx-auto py-16">
			<h2 className="text-4xl font-bold text-white mb-4">
				Our{" "}
				<span className={`text-[${neon}]`}>Features</span>
			</h2>
			<p className="text-gray-300 mb-12">
				Experience a host of powerful features at YourBank, including seamless
				online banking, secure transactions, and personalized financial insights.
			</p>
			<div className="grid md:grid-cols-4 gap-8">
				<div className="flex flex-col gap-4">
					{features.map((f, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className={`rounded-full px-6 py-3 border border-[#232425] text-left font-medium transition ${
								active === i
									? `bg-[#232425] text-[${neon}]`
									: "bg-transparent text-white hover:bg-[#232425]"
							}`}
						>
							{f.tab}
						</button>
					))}
				</div>
				<div className="md:col-span-3 rounded-2xl bg-[#232425] p-8">
					<h3 className="text-xl font-semibold text-white mb-2">
						{features[active].title}
					</h3>
					<p className="text-gray-300">{features[active].desc}</p>
				</div>
			</div>
		</section>
	);
};
export default OurFeatures;