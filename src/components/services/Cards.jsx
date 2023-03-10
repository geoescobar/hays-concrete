import React from "react";
import Three from "../assets/2002.jpg";
import Five from "../assets/2004.jpg";
import Six from "../assets/2005.jpg";
import Seven from "../assets/2006.jpg";

import Twelve from "../assets/img-ten.jpeg";
import Thirteen from "../assets/img-six.jpeg";

const CardGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 md:ml-[130px] pb-24">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2 object-cover" src={Twelve} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold  text-2xl mb-2 text-center ">
              Patios & Decks
            </div>
            <p className="text-gray-700 text-md">
              Our skilled team will pour and finish a durable and long-lasting
              concrete surface that will enhance the beauty and functionality of
              your outdoor space. We use only the best materials and techniques
              to ensure that your patio and deck will stand up to the elements
              and daily use.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2 object-fit" src={Five} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold  text-2xl mb-2 text-center">Slabs</div>
            <p className="text-gray-700 text-md">
              We provide expert concrete slab installation services for both
              residential and commercial projects. Our team will prepare the
              site, pour the concrete, and finish it to your exact
              specifications. We offer a wide range of options for slab
              thickness, reinforcement, and surface finishes to ensure that your
              project is tailored to your needs.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2 object-fit" src={Three} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Driveways</div>
            <p className="text-gray-700 text-md">
              Our project managers will work with you to design a driveway that
              meets your specific needs and complements the overall aesthetic of
              your property. We use high-quality materials and advanced
              techniques to ensure that your driveway is durable,
              low-maintenance, and long-lasting.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-1/2 object-cover"
            src={Thirteen}
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              Stamped Concrete
            </div>
            <p className="text-gray-700 text-md">
              Stamped concrete provides a beautiful look and alternative to
              traditional paving materials, such as brick or natural stone. We
              offer a variety of stamp patterns and colors to customize your
              project to your preferences. Our team uses high-quality materials
              and advanced techniques to ensure that your stamped concrete is
              durable, slip-resistant, and long-lasting.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2 object-cover" src={Seven} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">
              Foundations
            </div>
            <p className="text-gray-700 text-md">
              We understand the importance of a strong and stable foundation for
              any building structure. We ensure that you won't have any issues
              such as settling, cracking, and water damage. We work closely with
              you to ensure that your project meets your specific needs and
              requirements, while adhereing to local building codes.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2 object-fit" src={Six} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Paving</div>
            <p className="text-gray-700 text-md">
              Paving is the process of laying a surface or covering, usually on
              the ground, to provide a durable and stable surface for walking,
              driving or other forms of movement. Paving materials can include
              asphalt, concrete, bricks, and natural stones such as granite or
              slate. Paving can be used to create pathways, driveways, parking
              lots, and other outdoor surfaces, and can be customized to fit the
              specific needs and aesthetic preferences of the property owner
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGrid;
