import React from "react";

const Navbar = () => {
  return (
    <div className="justify-between text-black flex py-6 px-10 fixed w-full text-lg font-bold z-50 bg-white backdrop-blur-xl bg-opacity-20 ">
      <div className="gap-10 flex">
        <a href="#contact">Связаться</a>
      </div>
      <div>
        <a href="#description">О нас</a>
      </div>
    </div>
  );
};

export default Navbar;
