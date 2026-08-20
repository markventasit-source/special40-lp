'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function MobileOffer() {
  return (
    <section className="w-full py-10 font-inter max-[499px]:block min-[500px]:hidden">
      <div className="mx-4 overflow-hidden rounded-2xl shadow-md">
        {/* Top orange section */}
        <div className="relative bg-[#F9A53C] px-4 pt-3 pb-3">
          {/* Top decorative image */}
          <div className="absolute -top-px -left-px -right-px">
            <Image
              src="/top.png"
              alt=""
              width={200}
              height={80}
              className="w-[30%]"
            />
          </div>
          <h2 className="relative z-10 text-center text-[30px] font-semibold leading-[38px] text-white">
            Onam Offer
          </h2>
        </div>

        {/* Bottom gradient section */}
        <div
          className="relative px-5 pt-5 pb-6"
          style={{ background: 'linear-gradient(135deg, #FEEEB7 0%, #FFFFFF 90%, #FFFFFF 100%)' }}
        >
          {/* Bottom decorative image */}
          <div className="absolute -top-[50px] -right-px">
            <Image
              src="/bottom.png"
              alt=""
              width={120}
              height={120}
              className="w-[50px]"
            />
          </div>

          {/* Prices */}
          <div className="flex items-baseline justify-center gap-3 pb-2">
            <span className="relative text-[28.2px] font-extralight uppercase leading-[100%] text-[#F9A53C]">
              ₹85,000
              <span
                className="absolute left-0 top-1/2 w-full"
                style={{ borderTop: '1.5px solid #F9A53C', opacity: 0.7 }}
              />
            </span>
            <span className="text-[40px] font-bold leading-[100%] text-[#242424]">
              ₹35,000
            </span>
          </div>

          {/* Tax info */}
          <p className="mt-2 text-center text-[12px] font-normal leading-[100%] text-[#555454]">
            All taxes included · No hidden GST · Easy EMI available
          </p>

          {/* Pills */}
          <div className="-mx-2 mt-4 flex justify-center gap-1.5">
            <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2.5 py-2 text-[11px] font-medium leading-[100%] text-[#F9A53C]">
              Ends 31 Aug
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2.5 py-2 text-[11px] font-medium leading-[100%] text-[#F9A53C]">
              40 seats this batch
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2.5 py-2 text-[11px] font-medium leading-[100%] text-[#F9A53C]">
              4.5 months
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() =>
              document
                .getElementById('mobile-assessment-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-5 flex w-full items-center justify-center gap-2 bg-[#09636E] px-6 py-4 text-[16px] font-normal leading-[100%] text-white active:scale-[0.98]"
            style={{ borderRadius: 60 }}
          >
            Claim Onam Offer <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
