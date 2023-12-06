"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// import hero data
import { heroData } from "./data";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Page = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  });

  const { title, subtitle, btnText, image } = heroData;

  return (
    <>
      <div className="lg:h-[900px] py-12 pt-28">
        <div className="container mx-auto h-full relative">
          <div className=" flex flex-col xl:flex-row items-center h-full md:py-24">
            {/* text */}
            <div className="text-center xl:text-left xl:absolute">
              <h1
                className="h1 xl:max-w-[700px] mb-6
            xl:mb-12"
                data-aos="fade-down"
                data-aos-delay="400">
                {title}
              </h1>
              <p
                className="lead xl:max-w-[380px] mb-6 lg:mb-12"
                data-aos="fade-down"
                data-aos-delay="500">
                {subtitle}
              </p>
              <button
                className="btn btn-primary bg-slate-600 mb-8 xl:mb-0"
                data-aos="fade-down"
                data-aos-delay="600">
                {btnText}
              </button>
            </div>
          </div>
          <div
            className="xl:absolute xl:-right-10 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="700">
            <Image src={image} width={700} height={100} alt="image" />
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <Brands />
      </div>
      <div className="mb-10">
        <About />
      </div>
      <div className="mb-9 mt-[160px]">
        <Services />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Page;
