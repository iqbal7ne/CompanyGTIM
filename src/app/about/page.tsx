"use client";

import React from "react";
import { overview, history } from "@/lib/about";

export default function Page() {
  return (
    <>
      <div className="pt-16 text-center font-bold text-2xl underline">
        OVERVIEW
      </div>
      <div className="divider"></div>
      <div>{overview}</div>
      <div className="pt-16 text-center font-bold text-2xl underline">
        HISTORY
      </div>
      <div className="divider"></div>
      <div className=" flex flex-wrap">
        {history.map((item, index) => (
          <div
            className="card card-side bg-base-100 shadow-xl lg:w-1/3 hover:bg-slate-800"
            key={index}
          >
            <div className="card-body">
              <h2 className="card-title">{item.date}</h2>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
