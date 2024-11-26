import React from "react";

const Navbar = () => {
  const navitem = ["Home", "Agency", "Service", "Portfolio", "Contact"];
  return (
    <>
      <header className="w-[100%] h-[94px] flex justify-center ">
    <div className="flex w-[90%] justify-between">
        <div><img src="/Assets/logo.png" alt="" /></div>
        {
            navitem.map((item,index)=>((
                <div>{item}</div>
            )))
        }

    </div>
      </header>
    </>
  );
};

export default Navbar;
