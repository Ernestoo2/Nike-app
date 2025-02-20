import React from "react";
import ServiceCard from "component/ServiceCard";
import { services } from "constants";

const Service = () => {
  return (
    <section className="flex flex-wrap justify-center bg gap-9">
      
      {services.map((service) =>  (
        <ServiceCard key={service.label}  {...service} />
      ))}

    
    </section>
  )
}

export default Service
