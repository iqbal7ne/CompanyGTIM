"use client";

import React from "react";
import { products } from "@/lib/product";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="pt-16 text-center font-bold text-2xl underline">
        THIS IS OUR PRODUCTS
      </div>
      <div className="divider"></div>
      <div className=" flex flex-wrap gap-5">
        {products.map((item, index) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl hover:bg-slate-800 lg:w-screen"
            key={index}
          >
            <figure className="relative min-w-60 h-60">
              <Image src={item.img} fill alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.head}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
