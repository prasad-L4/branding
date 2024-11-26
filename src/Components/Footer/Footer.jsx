import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="w-full h-[500px] bg-black bg-cover bg-repeat bg-center"
        style={{
          backgroundImage: "url('/Assets/footer.svg')",
          backgroundSize: "20%",
        }}
      >
        <div>
          <div>
            <h2>
              Let's make something <br /> great work together.
            </h2>
            <div className="flex">
              <h6>CALL OUR OFFICE</h6>
              <p>+ 123 457 8910</p>
            </div>
            <div className="flex">
              <h6>SEND A MESSAGE</h6>
              <p>info@domain.com </p>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
