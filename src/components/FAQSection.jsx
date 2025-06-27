import React from "react";
const neon = "#C7FF00";
const faqs = [
	{
		q: "How do I open an account with YourBank?",
		a: "Opening an account with YourBank is easy. Simply visit our website and click on the “Open an Account” button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
	},
	{
		q: "What documents do I need to provide to apply for a loan?",
		a: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver’s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
	},
	{
		q: "How can I access my accounts online?",
		a: "Accessing your accounts online is simple and secure. Visit our website and click on the “Login” button. Enter your username and password to access your accounts. If you haven’t registered for online banking, click on the “Enroll Now” button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
	},
	{
		q: "Are my transactions and personal information secure?",
		a: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
	},
];

const FAQSection = () => (
	<section
		className="max-w-7xl mx-auto py-10 md:py-14 px-2 sm:px-4"
		style={{ fontFamily: "Lexend, sans-serif" }}
	>
		{/* Section Title */}
		<h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 lg:mb-2 flex flex-wrap items-end gap-x-2">
			<span style={{ color: neon }}>Frequently</span>
			<span className="text-white">Asked Questions</span>
		</h2>
		<p className="text-[#BFBFBF] mb-8 md:mb-10 text-sm md:text-base font-normal" style={{ fontFamily: "Lexend, sans-serif" }}>
			Still you have any questions? Contact our Team via support@yourbank.com
		</p>
		{/* FAQ Cards */}
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
			{faqs.map((faq, i) => (
				<div
					key={i}
					className="rounded-[14px] bg-[#181A1B] border border-[#262626] p-6 md:p-7 flex flex-col shadow"
					style={{
						minHeight: 160,
						boxShadow: "0 1px 8px #0002",
					}}
				>
					<h3 className="text-white text-base md:text-lg font-semibold mb-3 text-left" style={{ fontFamily: "Lexend, sans-serif" }}>
						{faq.q}
					</h3>
					<p className="text-[#BFBFBF] text-sm md:text-base font-normal text-left leading-relaxed" style={{ fontFamily: "Lexend, sans-serif" }}>
						{faq.a}
					</p>
				</div>
			))}
		</div>
		{/* Load All FAQs Button */}
		<div className="flex justify-center mt-10 md:mt-12">
			<button
				className="rounded-full border border-[#232425] px-6 md:px-8 py-2 text-white bg-[#181A1B] hover:bg-[#232425] flex items-center gap-2 transition text-sm md:text-base"
				style={{
					fontWeight: 500,
					fontSize: "1rem",
					boxShadow: "0 2px 8px #0002",
					fontFamily: "Lexend, sans-serif",
				}}
			>
				Load All FAQ's
				<svg width="18" height="18" fill="none" viewBox="0 0 20 20">
					<path
						d="M6 8l4 4 4-4"
						stroke={neon}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	</section>
);
export default FAQSection;
