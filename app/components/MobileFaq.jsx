'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Who Can Apply To SPECIAL40?',
    answer: 'Final year B.Com students, fresh commerce graduates, and working finance/accounting professionals (especially those earning below ₹25k–₹30k/month) who are serious about a corporate finance career.',
  },
  {
    question: 'Is Placement Support Included?',
    answer: 'Yes. 100% placement support is engineered into the program — including interview preparation, resume guidance, mock interviews, mentorship and placement assistance.',
  },
  {
    question: 'Why Is There An Assessment Process?',
    answer: 'We believe serious career transformation begins with serious candidates. The assessment ensures every cohort is composed of focused, capable individuals ready to commit.',
  },
  {
    question: 'Is This Practical Or Theoretical?',
    answer: 'SPECIAL40 is built around practical, corporate-grade training — live projects, ERP tools, GST compliance, real case work and corporate communication. Theory is only used to support practice.',
  },
  {
    question: 'What Makes SPECIAL40 Different From Other Finance Courses?',
    answer: 'SPECIAL40 is not a coaching center or Tally class. It is a selective, mentor-led transformation ecosystem powered by Capitaire — designed around career outcomes, not course completion.',
  },
  {
    question: 'Is This Suitable For Fresh Graduates With Zero Experience?',
    answer: 'Yes. The program is specifically structured to take ambitious fresh graduates and convert them into corporate-ready finance professionals within 3.5 months.',
  },
  {
    question: 'Will I Work On Live Projects?',
    answer: 'Yes — live projects and real case studies are a core part of the program. You will not graduate without practical, business-grade exposure.',
  },
];

export default function MobileFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white px-4 pb-10 pt-4 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-6 text-[26px] font-semibold leading-[32px] text-[#242424]">
        Frequently asked.
      </h2>

      <div className="flex flex-col gap-2">
        {faqData.slice(0, 3).map((item, i) => (
          <div key={i} className="rounded-[6px] border border-[#E2E2E2]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-4"
            >
              <span className="text-left text-[14px] font-semibold capitalize leading-[100%] text-[#555454]">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[#999] transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4">
                <p className="text-[14px] font-normal leading-[20px] text-[#555454]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
