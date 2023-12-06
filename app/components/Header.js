"use client";

import React, { useEffect, useState } from "react";
// import Logo from "../app/public/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import Logo
import { logo } from "../data";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
//

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const { image } = logo;
  const [navMobile, setNavMobile] = useState(false);
  const isMobile = window.innerWidth <= 768;
  return (
    <header
      className={`${
        bg ? "bg-primary h-26" : "h-26"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
      data-aos="fade-down"
      data-aos-delay="1000"
      data-aos-duration="800">
      <div className="container mx-auto h-full ">
        <div className="flex items-center justify-between mb-15">
          <div className="flex items-center gap-x-[120px] py-3">
            {/* logo */}

            <Link href="/">
              <Image src={image} height={130} width={160} alt="sage-creatif" />
            </Link>
            {/* nav- initially is hidden/ show on large screens */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>
          {/* mobile Nav initialy is showing/ hidden on large screen */}
          <div
            className={`${
              navMobile ? "max-h-52 " : "max-h-0"
            } lg:hidden absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden `}>
            <NavMobile />
          </div>
          {/* button */}
          {/* <button className="btn btn-quaternary flex items-center gap-x-[20px] group text-slate-600 ">
            Get Started
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white" />
          </button> */}
          {!isMobile && (
            <button
              className="btn btn-quaternary flex items-center gap-x-[20px] group text-slate-600 "
              style={{ marginRight: "94px" }}>
              Get Started
              <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white" />
            </button>
          )}

          {/* nav trigger btn/ only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl px-3 text-primary cursor-pointer ">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;