"use client";

import { navbar } from "@/lib/navbar";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    console.log(index);
    setActive(index);
  };

  return (
    <div className="w-full bg-blue-600 fixed items-center justify-between flex py-3 px-3">
      <div className="relative w-[200px] h-[50px]">
        <Image src={"/logo.png"} alt="logo" fill />
      </div>
      <div className="flex">
        {navbar.map((item, index) => (
          <div className="flex-col">
            <li
              key={index}
              className={`mx-2 cursor-pointer list-none px-4 hover:bg-white py-4 ${
                active === index ? "bg-green-500" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </li>
            <div>{` `}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
