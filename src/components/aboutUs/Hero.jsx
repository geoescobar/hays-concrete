import React from "react";
import Navbar from "../home/Navbar";

function Hero() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0  object-cover w-full h-screen"
          src="https://imageio.forbes.com/specials-images/imageserve//62827df86d0470875ee6f1dd/0x0.jpg?format=jpg&width=1200"
          alt="hero"
        />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-screen z-0" />
        <div className="absolute top-0 w-full h-3/4 flex flex-col justify-center text-white">
          <div className=" max-w-[1100px] m-auto text-center p-4">
            <h1 className="md:text-7xl uppercase sm:text-6xl text-4xl md:py-6">
              <span className="font-bold">about</span> us
            </h1>
            <p className=" drop-shadow-xl pb-6 uppercase text-center text-xl">
              Where concrete meets craftsmanship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
