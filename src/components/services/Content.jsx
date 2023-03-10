import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div>
      <div className="text-center p-24">
        <h1 className="pb-2 uppercase font-bold md:text-6xl text-xl">
          Services Offered
        </h1>
        <p className="text-xl">
          We specialize in both residential and commercial projects
        </p>
      </div>

      <Cards />

      <div className="bg-[#172A3A] flex flex-col justify-center mt-10 py-32  text-white">
        <div className="text-center">
          <h1 className="pb-4 uppercase font-bold md:text-6xl  text-xl">
            Other Services
          </h1>
          <p className="pb-8 text-md md:text-xl">
            Additional Services Our Team Is Ready To Handle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:text-center text-center  text-xl md:text-4xl font-bold uppercase">
          <div>
            <h1 className="pb-2">Curbs</h1>
          </div>
          <div>
            <h1 className="pb-2">Retaining walls</h1>
          </div>
          <div>
            <h1>Walkways</h1>
          </div>
        </div>
      </div>
      <div className="text-center py-32">
        <h1 className="pb-4 uppercase font-bold md:text-6xl text-xl">
          Personalized solutions
        </h1>
        <p className="text-md md:text-xl pb-12 m-8">
          In addition to our core concrete services, we also offer customized
          solutions to tackle any unique project requirements you may have.
          Please give us a call and we can schedule an onsite visit to give you
          a quote!
        </p>
        <Link to="/contact">
          <button className="bg-[#FFA737] hover:bg-[#bb7a25] p-4 rounded text-black uppercase font-bold">
            Get Started{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Content;
