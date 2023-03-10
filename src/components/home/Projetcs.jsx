import React from "react";
import imgOne from "../assets/img-one.jpeg";
import imgTwo from "../assets/img-two.jpeg";
import imgTen from "../assets/img-ten.jpeg";
import imgSeven from "../assets/img-seven.jpeg";
import imgFive from "../assets/img-five.JPG";
import imgSix from "../assets/img-six.jpeg";

function Projetcs() {
  return (
    <div className="mt-20">
      <div className="py-8 mx-auto text-center flex flex-col justify-center">
        <h1 className="text-6xl uppercase font-bold pb-4">Recent Projects</h1>
        <p className="md:text-xl pb-10 sm:text-sm uppercase">
          check out our latest work 
        </p>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 justify md:ml-[150px] ml-[75px]">
        <div>
          <img src={imgOne} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
        <div>
          {" "}
          <img src={imgTwo} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
        <div>
          {" "}
          <img src={imgTen} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
        <div>
          {" "}
          <img src={imgSeven} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
        <div>
          {" "}
          <img src={imgFive} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
        <div>
          {" "}
          <img src={imgSix} alt="img1" className="h-3/4 w-3/4 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Projetcs;
