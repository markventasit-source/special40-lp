"use client";

import React from 'react';
import Image from 'next/image';

interface StepItem {
    id: string;
    title: string;
    desc: string;
    badgeText: string;
    iconSrc: string;
    iconAlt: string;
}

export default function AdmissionPathSteps() {
    const steps: StepItem[] = [
        {
            id: "01",
            title: "Counselor consultation",
            desc: "A dedicated career counselor will contact you shortly to understand your background, goals and career aspirations.",
            badgeText: "Within 24 working hours",
            iconSrc: "/call.png",
            iconAlt: "Call icon"
        },
        {
            id: "02",
            title: "Online capability assessment",
            desc: "A structured test covering finance aptitude, logical reasoning and career seriousness shared after your call.",
            badgeText: "45 minutes",
            iconSrc: "/file.png",
            iconAlt: "File icon"
        },
        {
            id: "03",
            title: "Selection & admission",
            desc: "Qualified candidates receive admission approval and a personalised enrolment plan from our team.",
            badgeText: "Confidential review",
            iconSrc: "/security.png",
            iconAlt: "Security icon"
        }
    ];

    return (
        <section className="w-full bg-white font-inter py-10 md:py-24 px-6 md:px-12 lg:px-16">
            <div className="mx-auto flex flex-col items-center">

                {/* Header Labels */}
                <div className="text-center space-y-3 mb-12 md:mb-16">
                    <span className="text-[#F9A53C] font-normal text-[15px] leading-[100%] tracking-[0.15em] uppercase block">
                        What Happens Next
                    </span>
                    <h2 className="text-[#242424] font-semibold text-[32px] md:text-[48px] leading-tight md:leading-[57px] tracking-normal text-center">
    A guided, three-step path to admission.
</h2>
                </div>

                {/* Steps Cards Responsive Layout Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-[#FFFCF8] border border-[#F5E6CC]/40 p-6 md:p-8 flex flex-col justify-between min-h-[250px] shadow-2xs hover:shadow-sm transition-shadow duration-300"
                        >

                            {/* Card Top Block */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[#F9A53C] font-light text-[26px] leading-[100%] tracking-normal">
                                        {step.id}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#F5E6CC]/30 shadow-3xs">
                                        <Image 
                                            src={step.iconSrc}
                                            alt={step.iconAlt}
                                            width={18}
                                            height={18}
                                            className="w-[22px] h-[22px] object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-[#242424] font-semibold text-[26px] leading-[100%] tracking-normal">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#555454] font-normal text-[16px] leading-[22px] tracking-normal">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Card Bottom Operational Badge */}
                            <div className="inline-flex mt-6 items-center space-x-1.5 bg-[#F9A53C] text-white px-2.5 py-1.5 rounded-xs">
                                {/* Clock / Time Icon */}
                                <Image
                                    src="/time.png"
                                    alt="Time icon"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 shrink-0 object-contain"
                                />
                                <span className="text-[#FFFFFF] font-medium text-[18px] leading-6 tracking-normal">
                                    {step.badgeText}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}