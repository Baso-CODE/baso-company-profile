import React from "react";
// impoer about data

import About from "../components/About";
import VisiMisiCom from "../components/VisiMisiCom";
import Footer from "../components/Footer";

const about = () => {
  // destructure data

  return (
    <section className="lg:h-[900px] py-12 mt-36 mb-18">
      <About />
      <div className="mb-14">
        <h1 className=" h1 text-primary text-center mb-14">
          {" "}
          Vision end Purpose{" "}
        </h1>
        <VisiMisiCom />
      </div>
      <Footer />
    </section>
  );
};

export default about;
