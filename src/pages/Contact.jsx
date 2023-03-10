import React from "react";
import ContactHero from "../components/contact/ContactHero";
import Form from "../components/contact/Form";
import Footer from "../components/home/Footer";

function Contact() {
  return (
    <div>
      <ContactHero />
      <div className="mt-20">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 md:ml-[175px] pb-12">
          <div className="">
            <Form />
          </div>
          <div className="mt-44 md:text-start text-center">
            <div>
              <h1 className="text-4xl font-bold uppercase ">Phone</h1>
              <p className="text-xl pb-8">(214) 995-5822</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold uppercase">Email</h1>
              <p className="text-xl pb-8">Haysconstructiondfw@gmail.com</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold uppercase">Plano, TX</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
