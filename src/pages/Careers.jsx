import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function Careers() {
  const jobs = [
    {
      title: 'Relationship Manager',
      location: 'India',
      department: 'Retail Banking',
      about: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
      requirements: [
        "Bachelor's degree in Business, Finance, or a related field",
        'Minimum of 3 years of experience in sales or relationship management in the banking industry',
        'Proven track record of meeting and exceeding sales targets',
        'Excellent interpersonal and negotiation skills',
        'Strong knowledge of banking products and services',
      ],
    },
    {
      title: 'Risk Analyst',
      location: 'India',
      department: 'Product',
      about: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
      requirements: [
        "Bachelor's degree in Finance, Economics, or a related field",
        'Minimum of 2 years of experience in risk management or a similar role',
        'Proficiency in risk analysis tools and techniques',
        'Strong analytical and problem-solving skills',
        'Knowledge of regulatory requirements and industry best practices',
      ],
    },

    {
      title: 'IT Security Specialist',
      location: 'India',
      department: 'Information Technology',
      about: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
      requirements: [
        "Bachelor's degree in Computer Science, Information Security, or a related field",
        'Minimum of 5 years of experience in IT security or a similar role',
        'In-depth knowledge of network security protocols and technologies',
        'Familiarity with regulatory frameworks such as PCI DSS and GDPR',
        'Professional certifications such as CISSP or CISM are preferred',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full font-lexend">

{/* Thành phần A -Hero Section */}
<div className="w-full max-w-7xl min-h-[648px] max-h[816px] p-[14px] md:p-[40px] relative mb-10 overflow-hidden mx-auto">
  {/* Nền Hero */}
  <div className="absolute inset-0 bg-[#1C1C1C] rounded-[20px] z-0"></div>
  {/* Ảnh hiệu ứng góc*/}
  <div className="absolute top-0 right-0 w-[150px] md:w-[300px] h-[150px] md:h-[300px] z-5">
    <img
      src="/src/assets/images/Abstract DesignHieuUngCham.png"
      alt="Abstract Design"
      className="w-full h-full object-cover"
    />
  </div>
  {/* Thẻ ảnh bên phải */}
  <div className="absolute top-4 md:top-12 left-4 right-4 md:right-12 md:left-auto w-auto md:w-[700px] h-[300px] md:h-[500px] z-10">
    <img
      src="/src/assets/images/Image2ae.png"
      alt="Hero Visual"
      className="w-full h-full object-cover rounded-t-[16px] md:rounded-[16px]"
    />
  </div>

  {/* Thẻ chữ bên trái */}
  <div
    className="absolute top-[250px] md:top-12 left-4 md:left-12 right-4 md:right-auto md:w-[600px] p-6 md:p-12 
               bg-[#1C1C1C] flex flex-col gap-4 md:gap-8 
               rounded-[20px] md:rounded-tl-[20px] md:rounded-tr-[0px] md:rounded-bl-[20px] md:rounded-br-[80px]
               shadow-lg z-20">
    <h2 className="text-[28px] md:text-[48px] font-bold leading-tight text-white">
      Welcome to <span className="text-[#CAFF33]">YourBank</span> Careers!
    </h2>
    <p className="text-[14px] md:text-[16px] leading-relaxed text-[#B3B3B3]">
      Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
    </p>
  </div>
</div>



{/* Thành phần B-OurValue */}
<div className="w-full max-w-7xl mx-auto mt-12 flex flex-col gap-12 px-4 md:px-0">
  {/* Text Container */}
  <div className="w-full md:pr-32 flex flex-col gap-4">
    <h2 className="w-full max-w-4xl text-[28px] md:text-[38px] font-bold leading-tight">
      <span className="text-white">Our </span>
      <span className="text-[#CAFF33]">Values</span>
    </h2>
    <p className="w-full max-w-4xl text-[#B3B3B3] text-[14px] md:text-[16px] leading-relaxed">
      At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
    </p>
  </div>
  {/* Sub Container */}
  <div className="w-full flex flex-col gap-8">
    {/* hàng 1 */}
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* thẻ 1 */}
      <div className="flex-1 pl-8 border-l-2 border-[#CAFF33] flex flex-col gap-4">
        <h3 className="text-[28px] md:text-[40px] font-bold text-[#4C4C4D]">Integrity</h3>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed">
          We conduct ourselves with utmost honesty, transparency, and ethical behavior. 
          We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
        </p>
      </div>
      {/* thẻ 2 */}
      <div className="flex-1 pl-8 border-l-2 border-[#CAFF33] flex flex-col gap-4">
        <h3 className="text-[28px] md:text-[40px] font-bold text-[#4C4C4D]">Customer Centricity</h3>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed">
          Our customers are at the heart of everything we do. We are dedicated to understanding their needs, 
          providing personalized solutions, and delivering exceptional service that exceeds expectations.
        </p>
      </div>
    </div>
    {/* hàng 2 */}
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* thẻ 3 */}
      <div className="flex-1 pl-8 border-l-2 border-[#CAFF33] flex flex-col gap-4">
        <h3 className="text-[28px] md:text-[40px] font-bold text-[#4C4C4D]">Collaboration</h3>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed">
          We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. 
          By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
        </p>
      </div>
      {/* thẻ 4 */}
      <div className="flex-1 pl-8 border-l-2 border-[#CAFF33] flex flex-col gap-4">
        <h3 className="text-[28px] md:text-[40px] font-bold text-[#4C4C4D]">Innovation</h3>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed">
          We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. 
          We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Thành phần C -OurBenefit*/}
<div className="w-full max-w-7xl mx-auto mt-12 flex flex-col gap-12 box-border px-4 md:px-0">
  {/* Text Container */}
  <div className="w-full md:pr-32 flex flex-col gap-4 box-border">
    <h2 className="w-full max-w-4xl text-[28px] md:text-[38px] font-bold leading-tight">
      <span className="text-white">Our </span>
      <span className="text-[#CAFF33]">Benefits</span>
    </h2>
    <p className="w-full max-w-4xl text-[#B3B3B3] text-[14px] md:text-[16px] leading-relaxed">
      At YourBank, we value our employees and are dedicated to their well-being and success.
      We offer a comprehensive range of benefits designed to support their personal and professional growth.
    </p>
  </div>
  {/* Sub Container */}
  <div className="w-full flex flex-col gap-8">
    {/* hàng 1 */}
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* thẻ 1 (trái) */}
      <div className="flex-1 p-6 md:p-10 rounded-2xl flex flex-col gap-4 shadow-lg relative overflow-hidden">
        <img src="/src/assets/images/nenthe.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full relative overflow-hidden">
            <img src="/src/assets/images/nenthe.png" alt="Icon Background" className="absolute inset-0 w-full h-full object-cover" />
            <img src="/src/assets/images/GioHangCompetitive.png" alt="Competitive Icon" className="absolute inset-0 w-full h-full object-contain p-3" />
          </div>
          <h3 className="text-[18px] md:text-[20px] font-bold text-white">Competitive Compensation</h3>
        </div>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed mt-2 relative z-10">
          We provide a competitive salary package that recognizes the skills and expertise of our employees. 
          YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
        </p>
      </div>
      {/* thẻ 2 (phải) */}
      <div className="flex-1 p-6 md:p-10 rounded-2xl flex flex-col gap-4 shadow-lg relative overflow-hidden">
        <img src="/src/assets/images/nenthe.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full relative overflow-hidden">
            <img src="/src/assets/images/nenthe.png" alt="Icon Background" className="absolute inset-0 w-full h-full object-cover" />
            <img src="/src/assets/images/BongDenHealth.png" alt="Health Icon" className="absolute inset-0 w-full h-full object-contain p-3" />
          </div>
          <h3 className="text-[18px] md:text-[20px] font-bold text-white">Health and Wellness</h3>
        </div>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed mt-2 relative z-10">
          We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans.
           We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
        </p>
      </div>
    </div>
    {/* hàng 2 */}
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* thẻ 3 (trái) */}
      <div className="flex-1 p-6 md:p-10 rounded-2xl flex flex-col gap-4 shadow-lg relative overflow-hidden">
        <img src="/src/assets/images/nenthe.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full relative overflow-hidden">
            <img src="/src/assets/images/nenthe.png" alt="Icon Background" className="absolute inset-0 w-full h-full object-cover" />
            <img src="/src/assets/images/IconCapSachRetirement.png" alt="Retirement Icon" className="absolute inset-0 w-full h-full object-contain p-3" />
          </div>
          <h3 className="text-[18px] md:text-[20px] font-bold text-white">Retirement Planning</h3>
        </div>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed mt-2 relative z-10">
          YourBank is committed to helping employees plan for their future. 
          We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
        </p>
      </div>
      {/* thẻ 4 (phải) */}
      <div className="flex-1 p-6 md:p-10 rounded-2xl flex flex-col gap-4 shadow-lg relative overflow-hidden">
        <img src="/src/assets/images/nenthe.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full relative overflow-hidden">
            <img src="/src/assets/images/nenthe.png" alt="Icon Background" className="absolute inset-0 w-full h-full object-cover" />
            <img src="/src/assets/images/GiaSachWork.png" alt="Work Life Icon" className="absolute inset-0 w-full h-full object-contain p-3" />
          </div>
          <h3 className="text-[18px] md:text-[20px] font-bold text-white">Work-Life Balance</h3>
        </div>
        <p className="text-[14px] md:text-[16px] text-[#B3B3B3] leading-relaxed mt-2 relative z-10">
          We understand the importance of maintaining a healthy work-life balance. 
          YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Thành phần D- Job Openings */}
<div className="w-full max-w-7xl mx-auto mt-12 flex flex-col gap-12 px-4 md:px-0">
  {/* Text Container */}
  <div className="w-full md:pr-32 flex flex-col gap-4">
    <h2 className="w-full max-w-4xl text-[28px] md:text-[38px] font-bold leading-tight text-[#CAFF33]">
      Job Openings
    </h2>
    <p className="w-full max-w-4xl text-[#B3B3B3] text-[14px] md:text-[16px] leading-relaxed">
      Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry
    </p>
  </div>
  {/* Sub Container */}
  <div className="w-full max-w-7xl flex flex-wrap gap-8">
    {jobs.map((job, idx) => (
      <div
        key={job.title}
        className={`
          flex flex-col border border-[#262626] rounded-[16px] p-4 md:p-8 bg-[#1C1C1C]
          flex-1 min-w-[280px] md:min-w-[320px] max-w-[600px]
          aspect-[783/890]
          basis-full md:basis-[calc(50%-16px)]
        `}
      >
        
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[500px] mx-auto">
          {/* Subcontainer 1 */}
          <div className="flex flex-col gap-4 w-full max-w-[500px]">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold w-full max-w-[500px]">{job.title}</h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full max-w-[500px]">
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-[40px] border border-[#23262F] text-[#B3B3B3] text-[14px] md:text-[16px] w-fit">
                Location: {job.location}
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-[40px] border border-[#23262F] text-[#B3B3B3] text-[14px] md:text-[16px] w-fit">
                Department: {job.department}
              </div>
            </div>
          </div>
          {/* Subcontainer 2 */}
          <div className="flex flex-col gap-4 w-full max-w-[500px]">
            {/* About This Job */}
            <div className="flex flex-col gap-2 w-full max-w-[500px] overflow-hidden">
              <h4 className="text-white text-[18px] md:text-[20px] font-semibold w-full max-w-[500px]">About This Job</h4>
              <p className="text-[#B3B3B3] text-[14px] md:text-[16px] leading-relaxed w-full max-w-[500px] line-clamp-5 overflow-hidden">
                {job.about}
              </p>
            </div>
            {/* Requirements & Qualifications */}
            <div className="flex flex-col gap-2 w-full max-w-[500px]">
              <h4 className="text-white text-[18px] md:text-[20px] font-semibold w-full max-w-[500px]">Requirements & Qualifications</h4>
              <div className="flex flex-col gap-2 w-full max-w-[500px]">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#B3B3B3] text-[14px] md:text-[16px]">
                    <img src="/src/assets/images/IconJobOpenings.png" alt="Job Requirement" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <button className="w-[120px] md:w-[140px] h-[40px] md:h-[48px] px-4 md:px-6 py-1.5 md:py-2 rounded-[60px] bg-[#CAFF33] text-black font-semibold text-[14px] md:text-[16px] self-start mt-4 md:mt-6 hover:brightness-95 transition">
          Apply Now
        </button>
      </div>
    ))}
    {jobs.length % 2 !== 0 && (
      <div
        className="flex-1 min-w-[280px] md:min-w-[320px] max-w-[600px] aspect-[783/890] basis-full md:basis-[calc(50%-16px)] invisible"
      />
    )}
  </div>
</div>

      {/* Thành phần E - FAQ Section */}
      <FAQSection />

      {/* Thành phần F - CTA Section */}
      <CTASection />
    </div>
  );
}
