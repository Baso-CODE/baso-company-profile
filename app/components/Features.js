"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import features data
import { featuresData } from "../data";
// import icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  });
  // destructure  features data
  const { title, subtitle, subtitle2, list } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px]">
      <>
        <div className="container mx-auto">
          {/* text */}
          <div className="text-center">
            <h2
              className="h2 mb-6 xl:mb-12 text-[45px]"
              data-aos="fade-down"
              data-aos-delay="100">
              {title}
            </h2>
            <p className="lead max-w-[584px] mx-auto mb-16 xl:mb-24 bold font-semibold text-[20px] ">
              {subtitle}
            </p>
            <p className="lead max-w-[584px] mx-auto mb-16 xl:mb-24 font-semibold text-[20px]">
              {subtitle2}
            </p>
          </div>
          {/* feature List */}
          <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
            {list.map((feature, index) => {
              // destructure feature
              const { image, bgImage, title, description, linkText, delay } =
                feature;
              // feature item

              return (
                <div
                  className="w-ful max-w- [530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-delay={delay}>
                  {/* bg image */}
                  <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                    <Image
                      quality={100}
                      src={bgImage}
                      width={400}
                      height={400}
                      alt="gambar features"
                    />
                  </div>
                  {/* icon Image */}
                  <div className="max-w-[120px] xl:mr-7 xl:max-w-[232px]">
                    <Image
                      src={image}
                      width={400}
                      height={400}
                      alt="gambar"
                      quality={100}
                    />
                  </div>
                  {/*  text*/}
                  <div className="max-w-[220px]">
                    <h3 className="h3 mb-4">{title}</h3>
                    <p className="font-light italic mb-4">{description}</p>
                    {/* Link & arrow icon */}
                    <div className="flex items-center gap-x-2 group">
                      <Link className="text-primary font-bold " href="/">
                        {linkText}
                      </Link>
                      <BsArrowRight className="text-xl text-accent-primary transition-all group-hover:ml-[5px]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </section>
  );
};

export default Features;
