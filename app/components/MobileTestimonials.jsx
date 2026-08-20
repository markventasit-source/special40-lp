'use client';

import React, { useRef } from 'react';

const testimonials = [
  {
    quote: "I came in as a fresh B.Com graduate with no real exposure. By the end of the program I was working on live projects and walked into corporate interviews with genuine confidence.",
    name: "Fazil. M",
    role: "Accounts Assistant",
    company: "Kreem Foods PVT LTD - Tirunelveli",
  },
  {
    quote: "I was stuck in a low-paid accounting role for two years. SPECIAL40 rebuilt my skill set around what companies actually pay for. My role and salary changed within months.",
    name: "Aaron Bijoy",
    role: "Finance Analyst",
    company: "Placed at KPMG - Bangalore",
  },
  {
    quote: "It doesn't feel like a course. It feels like an office. That mindset shift — from student to professional — is what made the real difference for me.",
    name: "Mathew Moothedan",
    role: "Accountant",
    company: "Placed at GuruCompliance - Bangalore",
  },
];

export default function MobileTestimonials() {
  const scrollRef = useRef(null);

  return (
    <section className="w-full pb-8 font-inter max-[499px]:block min-[500px]:hidden">
      <div className="px-4 pb-5">
        <h2 className="text-[26px] font-semibold leading-[32px] text-[#242424]">
          Real students.<br />Real corporate journeys.
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide ml-4"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`flex w-[75vw] shrink-0 flex-col justify-between rounded-xl border border-[#E5E5E5] bg-white p-5${i === 0 ? ' ml-4' : ''}${i === testimonials.length - 1 ? ' mr-4' : ''}`}
            style={{ scrollSnapAlign: 'start' }}
          >
            <p className="text-[16px] font-normal leading-[24px] text-[#555454]">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="mt-5 border-t border-[#E5E5E5] pt-4">
              <h4 className="text-[22px] font-semibold leading-[24px] text-[#09636E]">
                {item.name}
              </h4>
              <p className="mt-2 text-[14px] font-normal leading-[100%] text-[#555454]">
                {item.role}
              </p>
              <p className="mt-4 text-[14px] font-normal leading-[100%] text-[#555454]">
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
