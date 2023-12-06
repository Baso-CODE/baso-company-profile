import React from "react";
import { VisiMisi } from "../data";

const VisiMisiCom = () => {
  return (
    <section>
      <div className="flex flex-col items-center mb-6">
        {VisiMisi.map((vismis) => (
          <div
            key={vismis.id}
            className="flex bg-white rounded-xl overflow-hidden shadow-2xl mb-10 max-w-[730px]">
            <div className="flex flex-col justify-center px-6 py-4 ">
              <div className="text-primary mb-2 text-3xl text-center text-[45px]">
                {vismis.name}
              </div>
              <div className="text-gray-700 mb-2 text-[35px] text-center">
                {vismis.slogan}
              </div>
              <div className="mb-2 text-[20px] overflow-y-auto">
                {vismis.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisiMisiCom;
