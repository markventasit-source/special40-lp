'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const modules = [
  {
    name: 'Practical Accounting',
    desc: 'Hands-on bookkeeping and accounting workflows used in real finance teams.',
  },
  {
    name: 'GST — Practical Training',
    desc: 'Filing, compliance and real-case GST work.',
  },
  {
    name: 'Income Tax — Practical Training',
    desc: 'Return filing and compliance fundamentals.',
  },
  {
    name: 'Corporate Financial Reporting',
    desc: 'Reading and building reports the way finance teams actually use them.',
  },
  {
    name: 'ERP, MIS & Financial Tools',
    desc: 'The software and reporting stack you\'ll actually be asked to know.',
  },
  {
    name: 'Business Structure, Banking & Payroll',
    desc: 'Covers business setup, banking processes, payroll management, and compliance requirements.',
  },
  {
    name: 'Business Communication & Office Etiquette',
    desc: 'Builds professional communication skills and workplace etiquette for career success.',
  },
  {
    name: 'Interview & Aptitude Training',
    desc: 'Develops interview confidence, aptitude skills, and job-ready problem-solving abilities.',
  },
  {
    name: 'VAT, Zakat, Customs & Excise',
    desc: 'Understanding VAT, Zakat, customs duties, and excise regulations for business compliance.',
  },
  {
    name: 'Live Project Development & Presentation',
    desc: 'Builds practical skills through projects, development, teamwork, and presentations. ',
  },
];

const INITIAL_COUNT = 5;

export default function MobileCurriculum() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const visible = showAll ? modules : modules.slice(0, INITIAL_COUNT);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#09636E] px-4 py-10 font-inter max-[499px]:block min-[500px]:hidden">
      <h2 className="mb-4 text-[26px] font-semibold capitalize leading-[100%] text-white">
        Curriculum Modules
      </h2>

      <div className="mb-6 flex gap-2">
        <span className="rounded-[6px] bg-[#136F7B] px-4 py-2 text-[15px] font-normal leading-[24px] text-white">
          Offline · 2.5 Months
        </span>
        <span className="rounded-[6px] bg-[#136F7B] px-4 py-2 text-[15px] font-normal leading-[24px] text-white">
          Online · 2 Months
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {visible.map((mod, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={mod.name}
              className="rounded-lg border border-white/20 bg-white/5"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-semibold capitalize leading-[100%] text-white">
                  {mod.name}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-white/70 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-4 pb-4 text-[14px] font-normal leading-[20px] text-white/80">
                  {mod.desc}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 flex w-full items-center justify-center py-3 text-[14px] font-normal capitalize leading-[100%] text-white/80"
          style={{
            borderRadius: 50,
            border: '1px dashed rgba(255,255,255,0.4)',
            backgroundImage: 'none',
          }}
        >
          Show Remaining {modules.length - INITIAL_COUNT} Modules
        </button>
      )}
    </section>
  );
}
