import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-[#969696] mt-20 pb-20">
      <div className="py-8 mx-auto text-center flex flex-col justify-center">
        <h1 className="text-6xl  mt-12 uppercase font-bold pb-4">
          Get Started Today{" "}
        </h1>
        <p className="text-2xl uppercase">Schedule your free estimate</p>
      </div>
      <div className="pt-4">
        <Link to="/contact">
          <p className="bg-[#6EEB83] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-center">
            Contact Us
          </p>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Contact;
