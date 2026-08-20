'use client';

import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Initial Enquiry & Consultation',
    desc: 'A Short Call To Understand Fit.',
  },
  {
    num: '02',
    title: 'Online Capability Assessment',
    desc: '15-Minute Assessment, Not A Formality.',
  },
  {
    num: '03',
    title: 'Selection & Admission',
    desc: 'Student Selection & Enrollment for the Eligible Candidate.',
  },
];

export default function MobileSelectionProcess() {
  return (
    <section className="w-full bg-white px-4 py-10 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-6 text-[26px] font-semibold leading-[32px] text-[#242424]">
        Selective by design.
      </h2>

      <div className="flex flex-col gap-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex items-center gap-4 rounded-[6px] bg-[#FFFBF6] px-4 py-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5A63A] text-[14px] font-semibold text-white">
              {step.num}
            </span>
            <div>
              <h3 className="text-[16px] font-semibold capitalize leading-[100%] text-[#242424]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] font-normal capitalize leading-[100%] text-[#555454]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
