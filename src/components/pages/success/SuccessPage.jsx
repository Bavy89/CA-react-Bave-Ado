import React from "react";
import { Link } from "react-router-dom";
import successImg from "../../../../public/assets/success.jpg";

const SuccessPage = () => {
  return (
    <div className="grid grid-cols-1 bg-white lg:grid-cols-[max(50%,36rem),1fr]">
      <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
        <div className="max-w-lg">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thank you for your order! Your purchase was successful.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We're working on your order now. You can expect delivery within 5-7
            business days. A confirmation email with your order details and
            tracking information will arrive soon. We truly value your business
            and hope you love your purchase!
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="text-sm font-semibold leading-7 text-lightblue underline "
            >
              <span aria-hidden="true"></span> Back to home
            </Link>
          </div>
          <div className="mt-10">
            <Link
              to="/products"
              className="text-sm font-semibold leading-7 text-lightblue underline"
            >
              <span aria-hidden="true"></span> More shopping?
            </Link>
          </div>
        </div>
      </main>
      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
        <img
          src={successImg}
          alt="Thank you image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
