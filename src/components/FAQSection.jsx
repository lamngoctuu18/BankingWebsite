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
	<section className="max-w-7xl mx-auto py-8 md:py-10 lg:py-8 px-2 sm:px-4">
		<h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-2 lg:mb-1">
			<span style={{ color: neon }}>Frequently</span> Asked Questions
		</h2>
		<p className="text-gray-300 mb-6 md:mb-8 lg:mb-6 text-sm md:text-base">
			Still have any questions? Contact our Team via support@yourbank.com
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-4">
			{faqs.map((faq, i) => (
				<div
					key={i}
					className="rounded-2xl bg-[#181A1B] border border-[#232425] p-5 md:p-7"
					style={{
						boxShadow: "0 2px 16px #0002",
						minHeight: 140,
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
					}}
				>
					<h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">
						{faq.q}
					</h3>
					<p className="text-gray-300 text-sm md:text-base">{faq.a}</p>
				</div>
			))}
		</div>
		<div className="flex justify-center mt-8 md:mt-8 lg:mt-6">
			<button
				className="rounded-full border border-[#232425] px-5 md:px-7 py-2 text-white bg-[#181A1B] hover:bg-[#232425] flex items-center gap-2 transition text-sm md:text-base"
				style={{
					fontWeight: 500,
					fontSize: "1rem",
					boxShadow: "0 2px 8px #0002",
				}}
			>
				Load All FAQs
				<svg width="18" height="18" fill="none" viewBox="0 0 20 20">
					<path
						d="M6 8l4 4 4-4"
						stroke="#C7FF00"
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
