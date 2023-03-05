import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="bg-[#F1F0EA] mt-20 pb-20 text-[#474448]">
      <div className=" py-8 mx-auto pt-20 text-center flex flex-col justify-center">
        <h1 className="text-6xl pb-4 uppercase font-bold ">Our Services </h1>
        <p className="md:text-xl sm:text-sm md:mx-20 mx-5 ">
          Hays Construction specializes in commercial and residential concrete
          projects. We provide a variety of services and take pride in the work
          we deliver.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-3 text-center pb-4">
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Driveways</div>
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Patios</div>
        <div className="md:text-4xl sm:text-xl uppercase pb-4">Walkways</div>
        <div className="md:text-4xl sm:text-xl uppercase">Stamped Concrete</div>
        <div className="md:text-4xl sm:text-xl uppercase">Foundations</div>
        <div className="md:text-4xl sm:text-xl uppercase">Slabs</div>
      </div>
      <div className="pt-4">
        <Link to="/services">
          <p className="bg-[#FFA737] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center">
            Learn More
          </p>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Services;
