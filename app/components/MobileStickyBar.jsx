'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white px-4 py-5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] font-inter max-[499px]:flex min-[500px]:hidden items-center gap-3">
      <div className="flex shrink-0 flex-col gap-1">
        {/* <span className="relative w-fit text-[18.11px] font-normal uppercase leading-[100%] text-[#A4A4A4]">
          ₹85,000
          <span
            className="absolute left-0 top-1/2 w-full"
            style={{ borderTop: '1.5px solid #A4A4A4' }}
          />
        </span> */}
        <span className="text-[21.06px] font-bold uppercase leading-[100%] text-[#242424]">
          ₹47,200
        </span>
      </div>

      <button
        onClick={() =>
          document
            .getElementById('mobile-assessment-form')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="flex min-w-0 flex-1 items-center justify-center gap-2 bg-[#09636E] px-4 py-3.5 text-[16px] font-normal leading-[100%] text-white"
        style={{ borderRadius: 60 }}
      >
        Apply Now <ArrowRight size={16} />
      </button>

      <a
        href="tel:+919946271580"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242424]"
        aria-label="Call us"
      >
        <Image
          src="/call-ringing-02.svg"
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </a>
    </div>
  );
}
