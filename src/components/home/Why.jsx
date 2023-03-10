import React from "react";

function Why() {
  return (
    <div className="mt-20">
      <div className="py-8 mx-auto text-center flex flex-col justify-center">
        <h1 className="text-6xl uppercase font-bold ">Why Us? </h1>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 text-center justify-items-center md:m-10 m-4">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1317/1317626.png"
            alt="concrete"
            className=" w-1/2  ml-[100px]"
          />
          <h2 className="pt-4  uppercase text-2xl pb-4 font-bold">
            Free Estimate
          </h2>
          <p className="text-lg">
            We'll meet with you and walk the property taking detailed notes and
            giving you professional opinions of what would work best for your
            property. We'll conclude with giving you a free estimate!{" "}
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2422/2422184.png"
            alt="concrete"
            className=" w-1/2 object-cover ml-[100px]"
          />
          <h2 className="pt-4 uppercase text-2xl pb-4 font-bold">
            Professional Service
          </h2>
          <p className="text-lg">
            We are a no rush company. We will schedule and coordinate with you
            before the project begins to cause the least amount of friction to
            your busy life. We treat all our clients and projects as if we are
            doing it for a family member
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4931/4931018.png"
            alt="concrete"
            className=" w-1/2 object-cover ml-[100px]"
          />
          <h2 className="pt-4  uppercase text-2xl pb-4 font-bold">
            Top Quality
          </h2>
          <p className="text-lg">
            We wouldn't be the best without the adding the best quality material
            to our arsenal. Our projects are designed & built to last. With our
            process as and crews craftmanship you'll never have to worry.{" "}
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4536/4536941.png"
            alt="concrete"
            className=" w-1/2 object-cover ml-[100px]"
          />
          <h2 className="pt-4 uppercase text-2xl pb-4 font-bold">Warranty</h2>
          <p className="text-lg">
            In the rare case something were to happen structuraly to your
            project you have nothing to worry about. All our projects come with
            a warranty. Give us a call for further details!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
