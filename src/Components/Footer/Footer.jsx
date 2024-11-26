import React from "react";

const Footer = () => {
  return (
    <>
        <footer
      className="w-full min-h-[460px] h-[650px] sm:h-[600px]  bg-black bg-cover bg-repeat bg-center relative"
      style={{
        backgroundImage: "url('/Assets/footer.png')",
        backgroundSize: "20%",
      }}
    >
      <div
        className="absolute flex flex-col justify-center items-center top-0 w-full h-full
          bg-transparent p-6"
      >
        <div className="bg-transparent w-full flex  lg:flex-row md:justify-around  md:mt-[6rem] flex-wrap gap-6 items-start px-4">
          {/* Left Section */}
          <div className="flex bg-transparent flex-col gap-6 lg:max-w-[40%] ">
            <h2 className="text-[20px]  sm:text-[32px] lg:text-[45px] bg-transparent text-white font-grotesk">
              Let's make something <br /> great work together.
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 bg-transparent font-grotesk text-[16px]">
              <div className="bg-transparent">
                <h6 className="bg-transparent text-white">CALL OUR OFFICE</h6>
                <p className="bg-transparent text-gray-500">+ 123 457 8910</p>
              </div>
              <div className="bg-transparent">
                <h6 className="bg-transparent text-white">SEND A MESSAGE</h6>
                <p className="bg-transparent text-gray-500">info@domain.com</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex gap-6 justify-start bg-transparent flex-wrap">
            <div className="bg-transparent text-white font-inter font-medium gap-3 flex flex-col">
              <h3 className="bg-transparent">COMPANY</h3>
              <h6 className="bg-transparent text-gray-600">Home</h6>
              <h6 className="bg-transparent text-gray-600">Agency</h6>
              <h6 className="bg-transparent text-gray-600">Services</h6>
              <h6 className="bg-transparent text-gray-600">Portfolio</h6>
              <h6 className="bg-transparent text-gray-600">Contact</h6>
            </div>
            <div className="bg-transparent text-white font-inter font-medium gap-3 flex flex-col">
              <h3 className="bg-transparent">FOLLOW US</h3>
              <h6 className="bg-transparent text-gray-600">Pinterest</h6>
              <h6 className="bg-transparent text-gray-600">Twitter</h6>
              <h6 className="bg-transparent text-gray-600">Dribbble</h6>
              <h6 className="bg-transparent text-gray-600">Instagram</h6>
              <h6 className="bg-transparent text-gray-600">Behance</h6>
            </div>
          </div>

          {/* Logo */}
          <div className="bg-transparent">
            <img
              className="bg-transparent w-[125px]"
              src="/Assets/footerlogo.png"
              alt=""
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sm:mt-[6rem] mt-[2rem] text-justify bg-transparent justify-between flex  flex-wrap align-bottom text-gray-400 text-sm w-[90%]">
          <p className="bg-transparent w-[100%] sm:w-[50%] text-[10px] sm:text-[13px]">
            This site is protected by reCAPTCHA and the Google privacy policy
            and terms of service apply. You must not use this website if you
            disagree with any of these website standard terms and conditions.
          </p>
          <p className="bg-transparent">© 2024 Crafto is Powered by <span className="text-white bg-transparent underline">Thamzza</span></p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
