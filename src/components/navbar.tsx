"use client";

import { navbar } from "@/lib/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    console.log(index);
    setActive(index);
  };

  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbar.map((item, index) => (
              <div className="flex-col" key={index}>
                <Link href={item.data}>
                  <li
                    className={`cursor-pointer ${
                      active === index ? "bg-green-300" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <a className="relative h-12 w-24">
          <Image src={"/logo.png"} fill alt="logo" />
        </a>
      </div>
      {/* desktop style */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbar.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                active === index ? "bg-green-300" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <Link href={item.data}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>

    // <div className="w-full bg-blue-600 fixed items-center justify-between flex py-3 px-3 z-10">
    //   <div className="relative w-[200px] h-[50px]">
    //     <Image src={"/logo.png"} alt="logo" fill />
    //   </div>
    //   <div className="flex">
    //     {navbar.map((item, index) => (
    //       <div className="flex-col" key={index}>
    //         <Link href={item.data}>
    //           <li
    //             className={`mx-2 cursor-pointer list-none px-4 hover:bg-white py-4 ${
    //               active === index ? "bg-green-500" : ""
    //             }`}
    //             onClick={() => handleClick(index)}
    //           >
    //             {item.title}
    //           </li>
    //         </Link>
    //         <div>{` `}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
