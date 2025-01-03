"use client";

import React from "react";
import { team } from "@/lib/team";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="pt-16 text-center font-bold text-2xl underline">
        THIS IS OUR TEAM
      </div>
      <div className="divider"></div>
      <div className=" flex flex-wrap">
        {team.map((item, index) => (
          <div
            className="card card-side bg-base-100 shadow-xl lg:w-1/3 hover:bg-slate-800"
            key={index}
          >
            <figure className="relative w-60 h-60">
              <Image src={item.img} fill alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
