"use client";

import React from 'react';

export default function BrandQuoteFooter() {
    return (
        <footer className="w-full bg-[#09636E] text-white font-inter antialiased">
            
            {/* Top Quote & Subtext Content Block */}
            <div className="mx-auto px-6 py-8 md:py-20 flex flex-col items-center text-center space-y-6">
                
                {/* Main Hero Vision Quote */}
                <h2 className="text-white font-bold text-2xl md:text-[36px] md:leading-[46px] tracking-tight max-w-5xl">
                    "We don't create job seekers. We build finance professionals companies cannot ignore."
                </h2>
                
                {/* Informational Operational Support Subtext */}
                <p className="text-[#FFF] font-normal text-[16px] leading-6 tracking-normal text-center max-w-3xl">
    Thank you for trusting SPECIAL40 with the next chapter of your career. Our team is already preparing for your call. If anything urgent comes up, write to{" "}
    <a 
        href="mailto:admissions@special40.in" 
        className="text-[#F9A53C] hover:underline font-medium transition-colors"
    >
        admissions@special40.in
    </a>.
</p>
                
            </div>

            {/* Bottom Global Metadata / Copyright Split Bar */}
            <div className="w-full border-t border-white/10 px-6 md:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-400/80 font-normal tracking-wide">
            <div>
    <span className="text-[#59ABB5] font-normal text-[14px] leading-6 tracking-normal text-center">
        © 2026 SPECIAL40. All rights reserved.
    </span>
</div>
<div className="text-[#59ABB5] font-normal text-[14px] leading-6 tracking-normal text-center uppercase">
    Selective admission · Limited seats per Batch
</div>
            </div>

        </footer>
    );
}