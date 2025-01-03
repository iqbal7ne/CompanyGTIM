"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-screen relative">
      <div className="">
        <Image src={"/gtim_factory.png"} alt="factory" fill />
      </div>
      <div className="hero-content text-center text-red-500 bg-slate-300 opacity-80">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to GTIM</h1>
          <p className="mb-5">
            We aim as the world&apos;s top professional manufacturer of body
            parts and transmission parts
          </p>
        </div>
      </div>
    </div>
  );
}
