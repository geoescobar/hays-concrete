import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="mt-20">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="py-8 m-10 flex flex-col justify-center">
            <h1 className="md:text-4xl text-2xl pb-4 font-bold uppercase">
              Your vision, our expertise
            </h1>
            <p className="text-lg">
              Hays Construction is a family-owned and operated business that has
              been providing top-quality construction services for over a decade
              in the DFW Metroplex. Founded 11 years ago by a father and son
              team, our company is built on a foundation of trust, honesty, and
              hard work.
              <br></br>
              <br></br>
              With years of experience in the construction industry, our team is
              dedicated to delivering exceptional workmanship and outstanding
              customer service. We specialize in all aspects of residential and
              commercial construction.
              <br></br>
              <br></br>
              Our commitment to quality, safety, and customer satisfaction is
              second to none. We take pride in our work and strive to exceed our
              clients' expectations on every project we undertake. Whether you
              are looking to build your dream home or renovate your commercial
              space, we are here to help.
            </p>
          </div>
          <div className="md:m-10 mx-10 md:block hidden">
            <img
              src="https://circaworks.com/wp-content/uploads/2020/12/blog-2.jpg"
              alt="img"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
