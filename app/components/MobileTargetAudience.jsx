'use client';

import React from 'react';

const pills = [
  'Final year B.Com',
  'Career-focused finance aspirant',
  'Stuck under ₹30k/month',
  'ACCA / CMA student',
  'Fresh B.Com graduate',
  'Strong theory, weak practical',
];

export default function MobileTargetAudience() {
  return (
    <section className="w-full bg-white px-4 py-10 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-6 text-[26px] font-semibold leading-[33px] text-[#242424] max-w-[340px]">
        You Should Join this Course if you are!
      </h2>

      <div className="flex flex-wrap gap-3">
        {pills.map((text, i) => (
          <span
            key={i}
            className="rounded-full border border-[#E2E2E2] bg-white px-3 py-3 text-[11.5px] font-medium leading-[100%] text-[#555454]"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
