import React, { useEffect } from "react";
import gsap from "gsap";
import { BsCursorFill } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const rotatedTextElements = document.querySelectorAll(".rotated-text");

    rotatedTextElements.forEach((elem) => {
      const splitText = elem.textContent.split("");
      let clutter = "";

      splitText.forEach((char) => {
        clutter += `<span style="display:inline-block">${char}</span>`;
      });

      elem.innerHTML = clutter;

      gsap.from(elem.querySelectorAll("span"), {
        x: 50,
        filter: "blur",
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.05,
      });
    });

    return () => gsap.killTweensOf(rotatedTextElements);
  }, []);
  useGSAP(() => {
    gsap.from(".header-title", {
      y: 50,
      opacity: 0,
      delay: 0.8,
      duration: 0.7,
    });
    gsap.from(".solution-sec", {
      x: -70,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".solution-sec",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.from(".branding", {
      y: 30,
      opacity: 0,
      duration: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".branding-sec",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.from(".branding1", {
      y: 70,
      opacity: 0,
      duration: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".branding-sec1",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.from(".branding-list", {
      x: 80,
      opacity: 0,
      duration: 2,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".branding-sec",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.from(".branding-list1", {
      x: 80,
      opacity: 0,
      duration: 2,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".branding-sec1",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-1", {
      y: 50,
      duration: 2,

      scrollTrigger: {
        trigger: ".img-cards",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-2", {
      y: -50,

      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".img-cards",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-3", {
      y: -50,

      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".img-cards1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-4", {
      y: 50,

      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".img-cards1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-5", {
      y: 50,

      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".img-cards2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(".img-card-6", {
      
      y: -50,
      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".img-cards2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <main className="py-10">
        <div className="lg:relative flex lg:flex-row justify-center items-center overflow-hidden  mt-[3.5rem]">
          {/* Image banner Section */}
          <div className="lg:relative flex flex-col-reverse lg:flex-row justify-between w-full  md:w-[80%] ml-0 lg:ml-[18.8rem]">
            <div className="lg:absolute top-[30%] left-[-25%] flex items-center lg:gap-5 bg-transparent  text-left">
              <h6 className="rotated-text transform rotate-[-90deg] w-[10rem]   lg:mr-[-2rem] text-[12px] text-center sm:text-[15px] font-medium text-black">
                OUR SERVICES
              </h6>
              <hr className="w-[1px] bg-gray-300 h-[9rem] ml-[-1rem] mx-2" />
              <h2 className="header-title font-grotesk font-semibold  sm:text-[45px] lg:text-[50px] leading-[3.3rem] text-[30px] bg-transparent text-black">
                We craft indelible <br /> digital experiences <br /> via 
                best services.
              </h2>
            </div>
            <div className="banner-img flex justify-center w-full overflow-hidden">
              <img
                src="/Assets/banner.jpg"
                alt="Banner"
                className="h-auto md:h-[500px] lg:h-[550px] object-cover md:ml-[5rem] lg:ml-[10rem] w-0 animate-reveal-left-to-right"
              />
            </div>
          </div>
        </div>
        {/* cards section */}
        <section className="w-[100%] md:mt-[3rem] overflow-hidden mt-[3rem] flex justify-center flex-col items-center">
          <div className="solution-sec w-[90%] flex lg:flex-row flex-col justify-center items-center overflow-hidden">
            <div className="solution w-[90%] lg:w-[900px]">
              <h2 className="text-[50px] sm:text-[80px] md:text-[100px]  md:text-start text-center  font-grotesk font-semibold">
                Digital solution
              </h2>
              <div className="relative flex md:flex-row flex-col  justify-center items-center">
                <img
                  className="w-[150px] h-[150px] z-0 mix-blend-multiply animate-slowSpin"
                  src="/Assets/rotation.png"
                  alt=""
                />
                <span className="absolute   top-[32%] left-1/2 md:top-1/2 md:left-[25%] lg:left-[29%] transform -translate-x-1/4 -translate-y-1/4 z-10">
                  <BsCursorFill className="text-black text-[24px]" />
                </span>
                <h2 className="font-grotesk  md:text-[100px] text-[50px] sm:text-[80px] font-semibold">
                  agency
                </h2>
              </div>
            </div>
            <div className="lg:w-[350px] ">
              <p className="text-justify text-gray-400 font-inter font-medium text-[16px]">
                Creating products with a strong identity. We provide brilliant
                ideas and adding the world called success brand
              </p>
            </div>
          </div>
          <hr className="w-[90%] h-[1.px] bg-gray-500  mt-[4rem]" />

          <div className="grid w-[100%] overflow-x-hidden sm:w-[90%] lg:w-[80%] gap-6 sm:mt-[1rem] mx-auto">
            <div className="branding-sec overflow-hidden grid lg:grid-cols-2 gap-6 items-center px-5">
              <div className="flex flex-col overflow-hidden sm:flex-row text-start md:items-center sm:gap-8">
                <h1 className=" text-[80px] sm:text-[130px] font-grotesk font-bold text-gray-300">
                  01
                </h1>
                <h2 className="branding text-[30px] sm:text-[45px] text-start font-grotesk font-semibold">
                  Branding <br className="sm:block hidden" /> solutions
                </h2>
              </div>
              <div className="branding-list lg:pt-[6.5rem] overflow-hidden">
                <p className="  text-[16px] text-gray-500 font-inter">
                  We are excited for our work and how it positively impacts
                  clients. With over 12 years of experience, we have been
                  constantly providing excellent web solutions that offer
                  best-in-class experiences for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 overflow-hidden">
                  <div className=" flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="  flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Brand strategy
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span> Video production
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Research and testing
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Usebility consulting
                    </h6>
                  </div>
                  <div className="branding-list flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Art direction
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Graphic design
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Content creating
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span> Web developement
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="img-cards overflow-hidden flex justify-center m-auto gap-14 sm:gap-6 md:flex-row flex-col sm:mt-[4rem] w-[90%] items-center">
              <div className="img-card-1 w-[100%] ">
                <img src="/Assets/card-1.jpg" alt="Image 1" />
              </div>
              <div className="img-card-2 md:w-[50%]">
                <img src="/Assets/card-2.jpg" alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="grid w-[100%] sm:w-[90%] lg:w-[80%] gap-6 sm:mt-[1rem] mx-auto">
            <div className="branding-sec1 grid lg:grid-cols-2 gap-6 items-center px-5">
              <div className="flex flex-col sm:flex-row text-start md:items-center sm:gap-8">
                <h1 className="text-[80px] sm:text-[130px] font-grotesk font-bold text-gray-300">
                  02
                </h1>
                <h2 className="branding1 text-[30px] sm:text-[45px] text-start font-grotesk font-semibold">
                  Website <br className="sm:block hidden" /> development
                </h2>
              </div>
              <div className="branding-list1 lg:pt-[6.5rem] overflow-hidden">
                <p className=" text-[16px] text-gray-500 font-inter">
                  We are excited for our work and how it positively impacts
                  clients. With over 12 years of experience, we have been
                  constantly providing excellent web solutions that offer
                  best-in-class experiences for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                  <div className="flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>API development
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Cloud migration
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Research and testing
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>JavaScript
                    </h6>
                  </div>
                  <div className="flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>WordPress
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Graphic design
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Custom website
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Flutter framework
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className=" img-cards1 overflow-hidden flex justify-center m-auto gap-14 sm:gap-6 md:flex-row flex-col sm:mt-[4rem] w-[90%] items-center">
              <div className="img-card-3 md:w-[50%] ">
                <img src="/Assets/card-4.jpg" alt="Image 2" />
              </div>
              <div className="img-card-4 w-[100%]">
                <img src="/Assets/card-5.jpg" alt="Image 1" />
              </div>
            </div>
          </div>
          <div className="grid w-[100%] sm:w-[90%] lg:w-[80%] gap-6 items-center sm:mt-[1rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center px-5 ">
              <div className="flex flex-col sm:flex-row text-start md:items-center sm:gap-8">
                <h1 className="text-[80px] sm:text-[130px] font-grotesk font-bold text-gray-300">
                  02
                </h1>
                <h2 className="text-[30px] sm:text-[45px] text-start font-grotesk font-semibold">
                  Website <br className="sm:block hidden" /> development
                </h2>
              </div>
              <div className="lg:pt-[6.5rem]">
                <p className="text-[16px] text-gray-500 font-inter">
                  We are excited for our work and how it positively impacts
                  clients. With over 12 years of experience, we have been
                  constantly providing excellent web solutions that offer
                  best-in-class experiences for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                  <div className="flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>API development
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Cloud migration
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Research and testing
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>JavaScript
                    </h6>
                  </div>
                  <div className="flex flex-col text-[16px] font-inter font-semibold text-gray-600">
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>WordPress
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Graphic design
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Custom website
                    </h6>
                    <h6 className="flex gap-2 items-center">
                      <span className="text-[20px]">+</span>Flutter framework
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="img-cards2 overflow-hidden flex justify-center m-auto gap-14 sm:gap-6 md:flex-row flex-col sm:mt-[4rem] w-[90%] items-center">
              <div className="img-card-5 w-[100%]">
                <img src="/Assets/card-6.jpg" alt="Image 1" />
              </div>
              <div className=" img-card-6  md:w-[50%]">
                <img src="/Assets/card-7.jpg" alt="Image 2" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
