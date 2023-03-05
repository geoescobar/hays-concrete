import React from "react";

function Tagline() {
  return (
    <div className="mt-20">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="md:m-10 mx-10">
          <img
            src="https://securehomeinsp.com/media/AdobeStock_141600041.jpeg"
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="py-8 m-10 text-center flex flex-col justify-center">
          <h1 className="md:text-4xl text-2xl pb-4">
            Concrete solutions built on family values
          </h1>
          <p>
            For over 10 years, our concrete business has been a trusted name in
            both commercial and residential construction. We take pride in
            providing quality workmanship, exceptional service, and reliable
            results to our clients.
            <br></br>
            <br></br>
            Our team of experienced professionals has tackled a wide range of
            projects, from large commercial structures to beautiful residential
            driveways and patios. We believe that our success over the years is
            a testament to our commitment to excellence, and we look forward to
            continuing to provide top-notch concrete services to our community
            for many years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
