'use client';

import React from 'react';
import Image from 'next/image';

export default function MobileNav() {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 pt-4 py-6 font-inter max-[499px]:flex min-[500px]:hidden">
      <div className="relative h-8 w-[163px]">
        <Image
          src="/logo.png"
          alt="SPECIAL40"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-[40px] bg-[#FFF3E2] px-2 py-2">
          <Image src="/star.png" alt="" width={14} height={14} className="h-3.5 w-3.5" />
          <span className="text-[12px] font-normal leading-[100%] text-[#242424]">
            4.9/5
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            const alreadySubmitted =
              typeof window !== 'undefined' &&
              window.sessionStorage.getItem('special40_form_submitted') === 'true';

            if (alreadySubmitted) {
              window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
              return;
            }

            document
              .getElementById('mobile-assessment-form')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="WhatsApp"
        >
          <Image src="/WhatsApp.png" alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
