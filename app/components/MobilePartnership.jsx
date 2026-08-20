'use client';

import React from 'react';

const stats = [
  { value: '10+ Yrs', label: 'Industry\nexpertise' },
  { value: 'CA-Led', label: 'Real\npractitioners' },
  { value: 'Certified', label: 'Recognised\ncompletion' },
];

export default function MobilePartnership() {
  return (
    <section className="w-full bg-white px-4 pb-8 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-3 text-[26px] font-semibold leading-[38px] text-[#242424] max-w-[340px]">
        In partnership with CAPITAIRE.
      </h2>

      <p className="mb-6 text-[16px] font-normal leading-[24px] text-[#555454]">
        A finance and advisory firm of working Chartered Accountants and business consultants with over a decade of industry experience.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((item, i) => (
          <div key={i} className="rounded-[8px] bg-[#FFFBF6] p-4">
            <span className="block text-[18px] font-bold capitalize leading-[100%] text-[#F9A53C]">
              {item.value}
            </span>
            <span className="mt-2 block whitespace-pre-line text-[16px] font-normal leading-[20px] text-[#555454]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
