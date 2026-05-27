"use client";

import React from 'react';

interface RegistrationDetails {
    registrationId: string;
    programName: string;
    status: string;
}

export default function RegistrationSuccess() {
    const data: RegistrationDetails = {
        registrationId: "SP40-2026-SPF1245",
        programName: "Finance Career Transformation Program",
        status: "Awaiting counselor call"
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FDF5E6] to-[#FAEBD4] font-inter antialiased">
            
            {/* Top Brand Banner Header */}
            <header className="w-full bg-[#1A4D54] px-6 py-4 md:px-12 flex justify-between items-center shadow-sm">
                <div className="flex flex-col">
                    <span className="text-white font-black tracking-wider text-xl md:text-2xl flex items-center">
                        SPECIAL<span className="text-[#F9A53C]">40</span>
                    </span>
                    <span className="text-gray-300 text-[10px] md:text-[11px] font-normal leading-tight opacity-90 uppercase tracking-tight">
                        In partnership with Capitaire
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-gray-300/90 text-[11px] md:text-[13px] font-medium tracking-normal block">
                        Kerala's First Finance Career Program
                    </span>
                </div>
            </header>

            {/* Main Content Layout Wrapper */}
            <main className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:px-12 lg:px-16 flex flex-col space-y-12">
                
                {/* Hero Split Frame Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Frame: Message Context */}
                    <div className="lg:col-span-6 flex flex-col space-y-5">
                        
                        {/* Registration Badge Accent */}
                        <div className="inline-flex items-center space-x-2 bg-[#F2A33A] text-white px-3 py-1.5 rounded-sm max-w-fit shadow-xs">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[11px] md:text-xs font-semibold tracking-wide uppercase">
                                Registration Confirmed
                            </span>
                        </div>

                        {/* Direct Thank You Header */}
                        <div className="space-y-1">
                            <h1 className="text-[#242424] font-extrabold text-3xl md:text-[42px] leading-tight tracking-tight">
                                Thank you, <br className="hidden sm:block" />
                                <span className="text-[#242424]">Farhan</span>
                            </h1>
                            <h2 className="text-[#242424] font-bold text-2xl md:text-[34px] leading-tight tracking-tight">
                                Your seat for the upcoming session is secured.
                            </h2>
                        </div>

                        {/* Explanatory Paragraph Details */}
                        <p className="text-[#555454] text-sm md:text-[15px] leading-relaxed font-normal max-w-xl">
                            We have successfully received your registration for the <strong className="text-[#242424] font-semibold">Finance Career Transformation Program</strong>. Our admissions team will personally guide you through the next steps with the care your career deserves.
                        </p>
                    </div>

                    {/* Right Frame: Video Component Mock Container */}
                    <div className="lg:col-span-6 w-full">
                        <div className="w-full aspect-[16/9] bg-[#4C4C4C] rounded-sm relative shadow-xl flex items-center justify-center group overflow-hidden border border-gray-700/10">
                            
                            {/* Central Round Play Accent Widget */}
                            <button 
                                type="button" 
                                className="w-16 h-16 md:w-20 md:h-20 bg-[#F9A53C] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-105 active:scale-95 z-10"
                                aria-label="Play Introduction Video"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* Inner ambient glow layer subtle overlay */}
                            <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-black/0 transition-colors duration-200" />
                        </div>
                    </div>

                </div>

                {/* Bottom Frame: Meta Row Grid Section Box */}
                <div className="w-full border border-[#F2A33A]/30 bg-[#FFFBF4]/40 rounded-sm grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-xs backdrop-blur-xs">
                    
                    {/* Data Block 1: Registration ID code reference */}
                    <div className="md:col-span-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#F2A33A]/20 flex flex-col space-y-1.5">
                        <span className="text-gray-500 font-semibold text-[11px] uppercase tracking-wider">
                            Registration ID
                        </span>
                        <span className="text-[#1A4D54] font-bold text-sm md:text-base tracking-wide">
                            {data.registrationId}
                        </span>
                    </div>

                    {/* Data Block 2: Associated Program Target Variant */}
                    <div className="md:col-span-5 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#F2A33A]/20 flex flex-col space-y-1.5">
                        <span className="text-gray-500 font-semibold text-[11px] uppercase tracking-wider">
                            Program name
                        </span>
                        <span className="text-[#1A4D54] font-bold text-sm md:text-[15px] leading-snug">
                            {data.programName}
                        </span>
                    </div>

                    {/* Data Block 3: Dynamic Lead Cycle Status Tracking */}
                    <div className="md:col-span-3 p-5 md:p-6 flex flex-col space-y-1.5">
                        <span className="text-gray-500 font-semibold text-[11px] uppercase tracking-wider">
                            Status
                        </span>
                        <div className="flex items-center space-x-2 pt-0.5">
                            {/* Status Indicator Pulse Dot */}
                            <span className="w-2 h-2 rounded-full bg-[#1A4D54] animate-pulse shrink-0" />
                            <span className="text-[#1A4D54] font-bold text-sm">
                                {data.status}
                            </span>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}