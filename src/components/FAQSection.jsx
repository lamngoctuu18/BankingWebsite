import React from "react";
const neon = "#D1FF3A";
const faqs = [
  {
    q: "How do I open an account with YourBank?",
    a: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process.",
  },
  {
    q: "What documents do I need to provide to apply for a loan?",
    a: "The documents required for a loan application may vary depending on the type of loan. Generally, you will need to provide identification documents, proof of income, and information about the collateral (if applicable).",
  },
  {
    q: "How can I access my accounts online?",
    a: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts.",
  },
  {
    q: "Are my transactions and personal information secure?",
    a: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication.",
  },
];
const FAQSection = () => (
  <section className="max-w-7xl mx-auto py-16">
    <h2 className="text-4xl font-bold text-white mb-4"><span className={`text-[${neon}]`}>Frequently</span> Asked Questions</h2>
    <p className="text-gray-300 mb-12">Still have any questions? Contact our Team via support@yourbank.com</p>
    <div className="grid md:grid-cols-2 gap-8">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-2xl bg-[#232425] p-6">
          <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
          <p className="text-gray-300">{faq.a}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <button className="rounded-full border border-[#232425] px-6 py-2 text-white hover:bg-[#232425]">Load All FAQs</button>
    </div>
  </section>
);
export default FAQSection;
