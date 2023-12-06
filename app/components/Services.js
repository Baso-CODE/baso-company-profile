import React, { useState } from "react";
import { services } from "../data";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section bg-tertiary">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Our Works</h2>
        </div>
        {/* item grid  */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div
                className={`bg-secondary p-6 rounded-2xl cursor-pointer transition-all ${
                  hoveredIndex === index ? "hover:bg-primary" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {/* index */}
                <div className="text-white text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[45px]">
                  {icon}
                </div>
                <h4
                  className={`text-xl font-medium mb-2 ${
                    hoveredIndex === index ? "text-secondary" : "text-primary"
                  }`}>
                  {name}
                </h4>
                <p className="text-white">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
