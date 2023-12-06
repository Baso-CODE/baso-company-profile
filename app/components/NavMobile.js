"use client";

import React from "react";
// import navigation data
import { navigationData } from "../data";
import Link from "next/link";

const NavMobile = () => {
  return (
    <ul className="flex flex-col px-7 py-8 gap-y-4">
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <Link className="text-white" href={item.href}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
