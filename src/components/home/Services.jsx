import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="text-white mt-20 pb-20 bg-[#172A3A]">
      <div className=" py-8 mx-auto pt-20 text-center flex flex-col justify-center">
        <h1 className="text-6xl pb-4 uppercase font-bold ">Serving the dfw </h1>
        <p className="md:text-xl sm:text-sm md:mx-20 mx-5 ">
          Hays Construction specializes in commercial and residential concrete
          projects all across the DFW. We're a local team a short drive away!
        </p>
      </div>
      <div class="grid grid-cols-3 gap-3 text-center pb-4">
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Dallas</div>
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Plano</div>
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Addison</div>
        <div className="md:text-4xl sm:text-xl uppercase">Frisco</div>
        <div className="md:text-4xl sm:text-xl uppercase">Allen</div>
        <div className="md:text-4xl sm:text-xl uppercase">McKinney</div>
      </div>
      <div className="pt-4">
        <Link to="/services">
          <p className="bg-[#FFA737] hover:bg-[#bb7a25] w-[200px] rounded-md my-6 mx-auto py-3 text-black text-center uppercase font-bold">
            Learn More
          </p>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Services;
