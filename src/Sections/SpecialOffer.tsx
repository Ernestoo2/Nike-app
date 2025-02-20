import Button from "../component/Button";
import React from "react";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex flex-col-reverse items-center md:flex-row-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold capitalize font-palanquin ">
          <span className="text-coral-red">Special</span> offer
        </h2>
        <p className="mt-6 text-lg lg:max-w-lg info-text mb-14 sm:max-w-sm">
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selection to incredible saving we offer unparalleled value that sets us apart
        </p>
        <p className=" info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfil your unique expectations.Your journey with us is nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" />
          <Button label="Learn more" backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray"/>
        </div>
      </div>
      
      
    </section>
  )
}

export default SpecialOffer