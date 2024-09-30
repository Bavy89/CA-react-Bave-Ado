import React from "react";
import contactImage from "../../../../public/assets/contact.jpg";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="relative bg-white rounded-md">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full bg-gray-50 object-cover hidden lg:block sm:h-80 lg:absolute lg:h-full rounded-tr-md rounded-br-md"
            src={contactImage}
            alt="Hands joined together. Contact us image"
          />
        </div>
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Contact Us
              </h2>
              <p className="mt-2 text-lg text-center leading-8 text-gray-600 mb-6">
                Please fill out the form below to get in touch:
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
