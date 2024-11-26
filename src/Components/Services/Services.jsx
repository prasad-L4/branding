import React, { useEffect } from 'react';
import gsap from 'gsap';

const Services = () => {
  useEffect(() => {
    // Select all elements with the 'rotated-text' class
    const rotatedTextElements = document.querySelectorAll('.rotated-text');
    
    rotatedTextElements.forEach((elem) => {
      // Split the text content into individual characters
      const splitText = elem.textContent.split('');
      let clutter = '';
      
      splitText.forEach((char) => {
        clutter += `<span style="display:inline-block">${char}</span>`;
      });
      
      // Update the element's HTML with the wrapped characters
      elem.innerHTML = clutter;
      
      // Apply GSAP animation to each character
      gsap.from(elem.querySelectorAll('span'), {
        y: 50,
        filter:'blur',
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.05,
      });
    });

    // Cleanup function to reset animations if the component unmounts
    return () => gsap.killTweensOf(rotatedTextElements);
  }, []);

  return (
    <>
      <main className="py-10">
        <div className="flex justify-center mt-[-2rem] items-center">
          <div className="flex space-x-4 items-center">
            <h6 className="rotated-text transform rotate-[-90deg] w-[9rem] font-medium">
              OUR SERVICES
            </h6>
            <hr className="w-px bg-gray-300 h-24" />
            <h2 className='font-grotesk text-[55px] z-40'>We craft indelible digital experiences via the best services.</h2>
          </div>
          <div className=" ">
            <img  src="/Assets/banner.jpg" alt="Banner" className="w-full " />
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
