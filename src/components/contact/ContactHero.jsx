import React from "react";
import Navbar from "../home/Navbar";

function ContactHero() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0  object-cover w-full h-screen"
          src="https://info.southerngreenbuilders.com/hubfs/SGB%20Featured%20Images%20%281%29-1.png"
          alt="hero"
        />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-screen z-0" />
        <div className="absolute top-0 w-full h-3/4 flex flex-col justify-center text-white">
          <div className=" max-w-[1100px] m-auto text-center p-4">
            <h1 className="md:text-7xl uppercase sm:text-6xl text-4xl md:py-6">
              <span className="font-bold">Contact</span> us
            </h1>
            <p className=" drop-shadow-2xl py-2 pb-8 uppercase text-center text-xl">
              We're excited to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
