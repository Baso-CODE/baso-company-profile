import React from "react";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const page = () => {
  return (
    <section className="lg:h-[900px] py-12 mt-25">
      <Teams />
      <Testimonials />
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
};

export default page;
