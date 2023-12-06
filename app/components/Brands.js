import React from "react";
import { brands } from "../data";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="min-h-[120px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <Image src={brand.img} alt="brand" width={200} height={100} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
