import React from 'react';

const About = () => {
  return (
    <div className="relative bg-[#0e0e0e] text-white py-20 md:py-[150px] px-4 md:px-20 overflow-hidden space-y-10 md:space-y-60px]">
      {/* About Container */}
      <div className="w-full max-w-[1279px] min-h-[648px] p-4 md:p-12 relative mb-12 overflow-hidden mx-auto">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1C1C1C] rounded-[20px] z-0"></div>

        {/* Ảnh hiệu ứng góc phải */}
  <div className="absolute top-0 right-0 w-[150px] md:w-[334px] h-[150px] md:h-[317px] z-5">
    <img
      src="/src/assets/images/Abstract DesignHieuUngCham.png"
      alt="Abstract Design"
      className="w-full h-full object-cover"
    />
  </div>

        {/* Text Section */}
        <div
          className="absolute left-4 right-4 md:left-12 md:right-auto md:w-[658px] md:h-[507px] p-6 md:p-[60px] bg-[#181818] flex flex-col gap-5 rounded-[0px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-br-[60px] z-30
            bottom-6 md:top-12 md:bottom-auto"
        >
          <p className="text-sm text-white text-[18px] font-lexend">Welcome to YourBank</p>
          <h1 className="text-2xl md:text-[48px] font-bold leading-tight font-lexend">
            Where Banking Meets <br /> <span className="text-lime-400 font-lexend">Excellence!</span>
          </h1>
          <p className="text-gray-300 leading-relaxed text-[16px] md:w-[538px] md:h-[216px] md:text-base font-lexend ">
            At YourBank, we believe that banking should be more than just transactions.
            It should be an experience that empowers individuals and businesses to thrive and reach their financial goals.
            As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations.
            With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers.
            Join us on this exciting journey and discover a new level of banking excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="absolute top-4 left-4 right-4 md:top-12 md:left-auto md:right-12 w-auto h-[200px] md:h-[568px] md:w-[715px] rounded-[16px] overflow-hidden z-10">
          <img
            src="public/images/team.png"
            alt="team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6 md:gap-10">
        <div>
          <h2 className="text-lime-400 text-[38px] font-lexend mb-2">Mission & Vision</h2>
          <p className="text-gray-300 md:w-[1030px] md:h-[48px] text-[16px]">
            We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity,
            creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="flex flex-col gap-10">
          {/* Mission Container */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Container */}
            <div className="relative flex-shrink-0 flex items-center justify-center mx-auto md:mx-0 w-full max-w-[425px] h-[220px] md:h-[440px] rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[16px] bg-[#181818] overflow-hidden">
              {/* Abstract Design */}
              <img
                src="public/images/2.5.png"
                alt=""
                className="absolute inset-0 w-full h-full rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[16px] z-10 object-cover"
                draggable={false}
              />
              {/* Main Image */}
              <img
                src="public/images/mission.png"
                alt="mission"
                className="relative w-[90%] h-[90%] rounded-[16px] z-20 object-cover mt-5 md:mt-[100px]"
              />
            </div>
            {/* Text Container */}
            <div className="flex flex-col justify-center relative mt-6 md:mt-0 flex-1 px-[16px] min-w-0">
              {/* Vertical bar */}
              <span
                className="hidden md:block absolute left-0"
                style={{
                  top: 'calc(50% - 89px)',
                  height: '178px',
                  width: '2px',
                  background: '#A3E635',
                  borderRadius: '4px',
                  marginLeft: '-20px'
                }}
              />
              <h3 className="text-white mb-2 font-lexend text-2xl md:text-[32px] leading-[40px] mb-3">
                Mission
              </h3>
              <p className="text-gray-300 md:w-[695px] md:h-[120px] font-lexend font-light text-[16px] md:text-[18px] leading-[150%] w-full min-h-[120px]">
                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
              </p>
            </div>
          </div>
          {/* Vision Container */}
          <div className="flex flex-col md:flex-row-reverse gap-8">
            {/* Image Container */}
            <div className="relative flex-shrink-0 flex items-center justify-center mx-auto md:mx-0 w-full max-w-[425px] h-[220px] md:h-[440px] rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[16px] bg-[#181818] overflow-hidden">
              {/* Abstract Design */}
              <img
                src="public/images/2.5.png"
                alt=""
                className="absolute inset-0 w-full h-full rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[16px] rounded-br-[16px] z-10 object-cover"
                draggable={false}
              />
              {/* Main Image */}
              <img
                src="public/images/vision.png"
                alt="vision"
                className="relative w-[90%] h-[90%] rounded-[16px] z-20 object-cover mt-5 md:mt-[100px]"
              />
            </div>
            {/* Text Container */}
            <div className="flex flex-col justify-center relative mt-6 md:mt-0 flex-1 px-[16px] min-w-0">
              {/* Vertical bar */}
              <span
                className="hidden md:block absolute right-0"
                style={{
                  top: 'calc(50% - 101px)',
                  height: '202px',
                  width: '2px',
                  background: '#A3E635',
                  borderRadius: '4px',
                  marginRight: '-20px'
                }}
              />
              <h3 className="text-white mb-2 font-lexend text-2xl md:text-[32px] leading-[40px] mb-3">
                Vision
              </h3>
              <p className="text-gray-300 md:w-[695px] md:h-[144px] font-lexend font-light text-[16px] md:text-[18px] leading-[150%] w-full min-h-[120px]">
                Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers.
                We envision a future where banking is accessible, transparent, and tailored to individual preferences.
                Through continuous innovation and collaboration, we strive to be at the forefront of the industry,
                setting new standards for customer-centric banking. Our vision is to be the preferred financial institution,
                known for our unwavering commitment to excellence, trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-[60px]">
        <div>
          <h2 className="text-lime-400 text-[38px] font-bold mb-2">Press Releases</h2>
          <p className="text-gray-300 text-[16px]">
            Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
          </p>
        </div>
        {/* Sub Container */}
        <div className="flex flex-col gap-6 md:gap-[40px]">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
            {/* Card 1 */}
            <div className="flex flex-col bg-[#181818] rounded-[20px] p-0 w-full max-w-[630px] min-h-[400px] overflow-hidden shadow-md mx-auto md:mx-0">
              <img
                src="public/images/press1.png"
                alt="press1"
                className="w-full max-w-[582px] h-[180px] md:h-[277px] object-cover rounded-[16px] mx-auto mt-6 mb-4"
              />
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold mb-4 max-w-[534px] min-h-[56px] text-lg md:text-[20px] font-lexend leading-[28px]">
                  YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction
                </h3>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Location: India
                  </span>
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Date: 06/11/2024
                  </span>
                </div>
                <p className="text-gray-300 max-w-[534px] min-h-[80px] font-lexend font-light text-[16px] md:text-base leading-[22px] text-[#B3B3B3]">
                  YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience.
                  The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative,
                  YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col bg-[#181818] rounded-[20px] p-0 w-full max-w-[630px] min-h-[400px] overflow-hidden shadow-md mx-auto md:mx-0">
              <img
                src="public/images/press2.png"
                alt="press2"
                className="w-full max-w-[582px] h-[180px] md:h-[277px] object-cover rounded-[16px] mx-auto mt-6 mb-4"
              />
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold mb-4 max-w-[534px] min-h-[56px] text-lg md:text-[20px] font-lexend leading-[28px]">
                  YourBank Expands Branch Network with Opening of New Location in Chennai
                </h3>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Location: India
                  </span>
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Date: 12/11/2024
                  </span>
                </div>
                <p className="text-gray-300 max-w-[534px] min-h-[80px] font-lexend font-light text-[16px] md:text-base leading-[22px] text-[#B3B3B3]">
                  YourBank is excited to announce the grand opening of our newest branch in [City].
                  This expansion is testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services.
                  The new branch will feature state-of-the-art facilities, a team of seasoned professionals, and a personalized approach to banking, further strengthening our presence in the local community.
                </p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
            {/* Card 3 */}
            <div className="flex flex-col bg-[#181818] rounded-[20px] p-0 w-full max-w-[630px] min-h-[400px] overflow-hidden shadow-md mx-auto md:mx-0">
              <img
                src="public/images/press3.png"
                alt="press3"
                className="w-full max-w-[582px] h-[180px] md:h-[277px] object-cover rounded-[16px] mx-auto mt-6 mb-4"
              />
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold mb-4 max-w-[534px] min-h-[56px] text-lg md:text-[20px] font-lexend leading-[28px]">
                  YourBank Partners with Local Nonprofit to Support Financial Education Initiatives
                </h3>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Location: India
                  </span>
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Date: 24/12/2024
                  </span>
                </div>
                <p className="text-gray-300 max-w-[534px] min-h-[80px] font-lexend font-light text-[16px] md:text-base leading-[22px] text-[#B3B3B3]">
                  YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility.
                  This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options,
                  and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col bg-[#181818] rounded-[20px] p-0 w-full max-w-[630px] min-h-[400px] overflow-hidden shadow-md mx-auto md:mx-0">
              <img
                src="public/images/press4.png"
                alt="press4"
                className="w-full max-w-[582px] h-[180px] md:h-[277px] object-cover rounded-[16px] mx-auto mt-6 mb-4"
              />
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold mb-4 max-w-[534px] min-h-[56px] text-lg md:text-[20px] font-lexend leading-[28px]">
                  YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility
                </h3>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Location: India
                  </span>
                  <span className="bg-[#232323] rounded-[24px] px-5 py-2 text-white text-sm font-normal inline-block">
                    Date: 28/12/2024
                  </span>
                </div>
                <p className="text-gray-300 max-w-[534px] min-h-[80px] font-lexend font-light text-[16px] md:text-base leading-[22px] text-[#B3B3B3]">
                  YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility.
                  This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options,
                  and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
