import ContactForm from "@/components/ui/contactForm";
import React from "react";

export default function page() {
  return (
    <section className="text-gray-600 body-font relative min-h-[75vh] ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap sm:flex-nowrap ">
        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10  p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.3435477984444!2d10.223686475685739!3d36.762325072257866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd379bc05dd4d5%3A0x26a7e7cff34d891e!2sDOLPHIN%20EQUIPEMENTS!5e0!3m2!1sfr!2stn!4v1732542346492!5m2!1sfr!2stn"
          ></iframe>
          <div className="bg-white  sm:flex  sm:relative  sm:-ml-0 sm:mt-0   flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Angle Rue d’egypte Rue d’espagne 2013, Ben arus Tunis
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">
                dolphinequipements@orange.tn
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+216 58 432 372</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full max-w-md mx-auto md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg md:text-3xl mb-1 font-medium title-font">
            Contactez-nous
          </h2>
          <p className="leading-relaxed text-[#619CD1] tracking-wide  mb-5 ">
            Dolphin Equipements
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
