import React from "react";
const neon = "#D1FF3A";
const UseCase = () => (
  <section className="max-w-7xl mx-auto py-16">
    <h2 className="text-4xl font-bold text-white mb-4">Use <span className={`text-[${neon}]`}>Cases</span></h2>
    <p className="text-gray-300 mb-8">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-white font-semibold mb-2">For Individuals</h3>
        <ul className="text-gray-300 mb-4">
          <li>Managing Personal Finances</li>
          <li>Saving for the Future</li>
          <li>Homeownership</li>
          <li>Education Funding</li>
        </ul>
        <div className="flex gap-8">
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>78%</span>
            <div className="text-gray-400 text-xs">Secure Retirement Planning</div>
          </div>
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>63%</span>
            <div className="text-gray-400 text-xs">Manageable Debt Consolidation</div>
          </div>
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>91%</span>
            <div className="text-gray-400 text-xs">Reducing financial burdens</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-2">For Business</h3>
        <ul className="text-gray-300 mb-4">
          <li>Startups and Entrepreneurs</li>
          <li>Cash Flow Management</li>
          <li>Business Expansion</li>
          <li>Payment Solutions</li>
        </ul>
        <div className="flex gap-8">
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>65%</span>
            <div className="text-gray-400 text-xs">Cash Flow Management</div>
          </div>
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>70%</span>
            <div className="text-gray-400 text-xs">Drive Business Expansion</div>
          </div>
          <div>
            <span className={`text-3xl font-bold text-[${neon}]`}>45%</span>
            <div className="text-gray-400 text-xs">Streamline payroll processing</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default UseCase;
