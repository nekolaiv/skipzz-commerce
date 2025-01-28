import React from "react";
import { TextHoverEffect } from "./ui/texthover-effect";
import { GridSmallBackground } from "./Grid";
import { TextGenerateEffect } from "./ui/textgenerate-effect";
// import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
      <GridSmallBackground />
      <TextHoverEffect text="SKIPZZ" />
      <TextGenerateEffect
        words="Don't Just Fit in &mdash; Stand Out"
        className="text-4x1 z-5 absolute bottom-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 font-bold text-transparent text-white md:text-7xl"
      />
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Don&apos;t Just Fit in - Stand Out
      </p> */}
    </div>
  );
};

export default Hero;
