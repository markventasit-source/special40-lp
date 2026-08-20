'use client';

import React from 'react';

const features = [
  {
    num: '01',
    title: 'Corporate Environment',
    desc: 'Glass-walled, office style training, not a classroom.',
  },
  {
    num: '02',
    title: 'Live Projects',
    desc: 'Real case work, not textbook exercises.',
  },
  {
    num: '03',
    title: 'CA-Led Mentorship',
    desc: 'Taught by working Chartered Accountants.',
  },
  {
    num: '04',
    title: 'Selective Admission',
    desc: 'Every seat is assessed, not bought.',
  },
];

export default function MobileFeatures() {
  return (
    <section className="w-full bg-[#FFFBF6] px-4 py-10 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-6 text-[26px] font-semibold leading-[32px] text-[#242424] max-w-[340px]">
        Engineered to make you valuable, not just employable.
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {features.map((item) => (
          <div
            key={item.num}
            className="flex flex-col gap-2 rounded-xl border border-[#E5E5E5] bg-white p-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A63A] text-[13px] font-semibold text-white">
              {item.num}
            </span>
            <h3 className="text-[18px] font-semibold leading-[100%] text-[#09636E]">
              {item.title}
            </h3>
            <p className="text-[14px] font-normal leading-[18px] text-[#555454]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
