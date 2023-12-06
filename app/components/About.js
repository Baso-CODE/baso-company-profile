import React from "react";
import { aboutData } from "../data";
import Image from "next/image";
const About = () => {
  const { image, title, subtitle } = aboutData;
  return (
    <section className="my-[30px] xl:mt-[]">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0">
          {/*image  */}
          <div className="flex-1 ">
            <Image src={image} width={300} height={200} alt="ini about" />
          </div>
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2 className="h2 mb-10 ">{title}</h2>
            <p className="max-w-[474px] mx-auto xl:mx-0">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
