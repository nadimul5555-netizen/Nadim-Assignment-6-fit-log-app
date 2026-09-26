import React from "react";
import banner from '@/assets/banner.png'
import Image from "next/image";

const Banner = () => {
  return (
    <div className="container mx-auto my-12 border grid grid-cols-1 md:grid-cols-2 border-gray-700 bg rounded-3xl px-10 py-14 bg-[#191a25]">
      

      <div className="">
        <h2 className="text-[#C2F800] m-5">WORKOUT LIBRARY</h2>
        <h1 className="font-bold text-2xl lg:text-5xl p-5">TRAIN WITH INTENT. LOG EVERY SET.</h1>
        <p className="text-gray-400 m-5">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="btn bg-[#C2F800] font-bold text-black m-5">BROWSE WORKOUTS</button>
      </div>
      <div className="flex justify-center">
        <Image className="" src={banner} alt="Banner Image"></Image>
      </div>
      
    </div>
  );
};

export default Banner;