import React from 'react'
import { TextHoverEffect } from './ui/texthover-effect'
import { GridSmallBackground } from './Grid'
import { TextGenerateEffect } from './ui/textgenerate-effect'
// import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      
      <GridSmallBackground />
      <TextHoverEffect text="SKIPZZ" />
      <TextGenerateEffect words="Don't Just Fit in &mdash; Stand Out" className="text-white text-4xl sm:text-7xl font-bold absolute bottom-20 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" />
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Don&apos;t Just Fit in - Stand Out
      </p> */}
    </div>
  )
}

export default Hero