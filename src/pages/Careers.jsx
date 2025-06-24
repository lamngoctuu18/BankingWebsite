import React from "react";

const Careers = () => {
  return (
    <div className="flex flex-col items-center">

{/* Thành phần A - Hero Section */}
<div className="w-[1599px] h-[816px] p-[50px] relative mb-10 overflow-hidden">
  {/* Ảnh nền bên phải */}
  <div className="absolute top-[50px] right-[50px] w-[968px] h-[716px] z-0">
    <img
      src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482784oup/anh-mo-ta.png"
      alt="Hero Visual"
      className="w-full h-full object-cover rounded-[16px]"
    />
  </div>

  {/* Thẻ chữ nằm bên trái, đè lên ảnh */}
  <div
    className="absolute top-[50px] left-[50px] w-[791px] h-[495px] p-[80px] 
               bg-white/80 flex flex-col gap-[23px] 
               rounded-tl-[20px] rounded-bl-[20px] rounded-br-[80px]
               shadow-lg z-10"
  >
    <h2 className="text-3xl font-bold leading-tight">
      Welcome to YourBank Careers!
    </h2>
    <p className="text-base leading-relaxed text-gray-700">
      Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
    </p>
  </div>
</div>



{/* Thành phần B */}
<div className="w-[1280px] h-[563px] mx-auto mt-[50px] mb-[80px] flex flex-col gap-[60px]">

  {/* Text Container */}
  <div className="w-full h-[115px] pr-[150px] flex flex-col gap-[10px]">
    <h2 className="w-[1130px] h-[57px] text-3xl font-bold text-white">
      Our Values
    </h2>
    <p className="w-[1130px] h-[48px] text-base text-[#B3B3B3] leading-relaxed">
      At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
    </p>
  </div>

  {/* Sub Container */}
  <div className="w-full h-[388px] flex flex-col gap-[60px]">
    
    {/* Row 1 */}
    <div className="flex gap-[60px]">
      {/* Box 1 */}
      <div className="w-[610px] h-[152px] pl-[24px] border-l-[1px] border-gray-400 flex flex-col gap-[20px]">
        <h3 className="text-xl font-semibold text-white">Integrity</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">
          We act with honesty and adhere to the highest standards of moral and ethical values.
        </p>
      </div>

      {/* Box 2 */}
      <div className="w-[610px] h-[152px] pl-[24px] border-l-[1px] border-gray-400 flex flex-col gap-[20px]">
        <h3 className="text-xl font-semibold text-white">Customer Focus</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">
          Our customers are at the heart of everything we do, and their satisfaction is our priority.
        </p>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex gap-[60px]">
      {/* Box 3 */}
      <div className="w-[610px] h-[152px] pl-[24px] border-l-[1px] border-gray-400 flex flex-col gap-[20px]">
        <h3 className="text-xl font-semibold text-white">Innovation</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">
          We embrace change and continuously seek creative solutions to better serve our clients.
        </p>
      </div>

      {/* Box 4 */}
      <div className="w-[610px] h-[152px] pl-[24px] border-l-[1px] border-gray-400 flex flex-col gap-[20px]">
        <h3 className="text-xl font-semibold text-white">Teamwork</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">
          Collaboration is key to our success; we believe in supporting one another to reach common goals.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Thành phần C */}
      <div className="w-[1596px] h-[992px] bg-gray-300 flex items-center justify-center mb-10">
        <span className="text-5xl font-bold">C</span>
      </div>

      {/* Thành phần D */}
      <div className="w-[1596px] h-[2057px] bg-gray-400 flex items-center justify-center mb-10">
        <span className="text-5xl font-bold">D</span>
      </div>
    </div>
  );
};

export default Careers;
