import Image from "next/image";
import React from 'react';

const Hero = () => {

  const scrollToLibrary = () => {
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" m-10 rounded-2xl px-4 sm:px-10 py-14 grid md:grid-cols-2 gap-15 items-center justify-between bg-[#222630]">
      <div>
        <p className="text-[#ccff00] text-xs font-semibold tracking-[0.2em] mb-3">
          WORKOUT LIBRARY
        </p>
        <h1 className="font-display uppercase font-bold text-4xl sm:text-5xl leading-tight mb-4">
          Train with intent. Log every set.
        </h1>
        <p className="text-gray-400 max-w-md mb-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button
          onClick={scrollToLibrary}
          className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none gap-2 font-semibold"
        >
           BROWSE WORKOUTS
        </button>
      </div>

      <div className="flex w-full justify-center md:justify-end md:pr-2 lg:pr-4">
        <Image
          src="/banner.png"
          alt="FitLog hero"
          width={400}
          height={400}
          className="h-auto w-full max-w-[30rem] object-contain"
          priority
        />
      </div>
    </section>
  );
}
export default Hero;