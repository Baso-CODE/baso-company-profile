"use client";

import React from "react";
import Features from "../components/Features";
import Services from "../components/Services";

const page = () => {
  return (
    <section className="lg:h-[900px] py-8 mt-36">
      <Services />
      <Features />
    </section>
  );
};

export default page;
