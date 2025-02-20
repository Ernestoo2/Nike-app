import "./App.css";
import Nav from "component/Nav";
import React from "react";
import { CustomerReview, Footer, Hero, PopularProducts, Service, SpecialOffer, Subscribe, SuperQuality } from "./Sections/Index";

function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Service/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview/>
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe/>
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
       
        <Footer/>
      </section>
    </main>
  );
}

export default App;
