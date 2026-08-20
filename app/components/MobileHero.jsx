'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';

export default function MobileHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex w-full flex-col font-inter max-[499px]:flex min-[500px]:hidden">
      {/* Everything below nav is green gradient */}
      <div
        className="flex flex-col px-4 pt-0 pb-0"
        style={{ background: 'linear-gradient(to bottom, #08606B, #044249)' }}
      >
        {/* Offer pill */}
        <div className="mt-4 py-4">
          <span className="block w-full rounded-full border border-white px-4 py-1.5 text-center text-[15px] font-medium leading-[24px] text-white">
            Onam Offer · Ends 31 Aug · 40 Seats / Batch
          </span>
        </div>

        {/* Headline */}
        <div className="pb-4">
          <h1 className="text-[32.53px] font-semibold leading-[37.9px]">
            <span className="text-white">Become a corporate ready finance professional.</span>
            <span className="font-bold text-[#F9A53C]">₹50,000 off this Onam.</span>
          </h1>
        </div>

        {/* Sub text */}
        <p className="pb-6 text-[15px] font-normal leading-[21px] text-white/90">
          4.5-month CA-mentored program for commerce graduates who want a real finance career, not another certificate.
        </p>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-[10px]" style={{ height: 201 }}>
          <video
            ref={videoRef}
            src="/Special40Class.mp4"
            playsInline
            className="h-full w-full object-cover"
            poster="/videothumb.jpg"
            onClick={togglePlay}
          />
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <Play size={24} fill="#09636E" className="ml-1 text-[#09636E]" />
              </div>
            </button>
          )}
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50"
              aria-label="Pause video"
            >
              <Pause size={16} className="text-white" />
            </button>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-5 pb-6">
          <button
            onClick={() =>
              document
                .getElementById('assessment-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex w-full items-center justify-center gap-2 bg-[#F9A53C] px-6 py-4 text-[18px] font-normal leading-[100%] text-white active:scale-[0.98]"
            style={{ borderRadius: 60 }}
          >
            Book a Consultation call <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats strip */}
        <div className="-mx-4 grid grid-cols-3 border-t border-[#0F6A74] py-8">
          <div className="flex flex-col gap-1 px-4">
            <span className="text-[20px] font-bold leading-[100%] text-white">
              100%
            </span>
            <span className="text-[13px] font-normal leading-[14px] text-[#49ADB8]">
              Placement<br />support
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-[#0F6A74] text-center">
            <span className="text-[20px] font-bold leading-[100%] text-white">
              40
            </span>
            <span className="text-[13px] font-normal leading-[14px] text-[#49ADB8]">
              Seats per<br />batch
            </span>
          </div>
          <div className="flex flex-col items-end gap-1 px-4 text-right">
            <span className="text-[20px] font-bold leading-[100%] text-white">
              10+ yrs
            </span>
            <span className="text-[13px] font-normal leading-[14px] text-[#49ADB8]">
              CA mentor<br />experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
