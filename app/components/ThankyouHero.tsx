"use client";

import React from 'react';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react';

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

    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF] via-[#FFE5C2] to-[#FAEBD4] font-inter antialiased">

            {/* Top Brand Banner Header */}
            <header className="w-full bg-[#1A4D54] px-4 py-3 md:px-12 md:py-4 flex justify-between items-center shadow-sm">
    <div className="flex flex-col">
        <div className="flex items-center">
            <Image
                src="/whitelogo.png"
                alt="Logo"
                width={191.28358459472656}
                height={21.20262336730957}
                className="w-auto object-contain h-[16px] md:h-auto"
                priority
                style={{ width: 'auto', height: 'auto' }}
            />
        </div>
        <span className="text-gray-300 font-medium text-[13px] md:text-[18px] leading-5 md:leading-6 tracking-normal opacity-90 mt-0.5 md:mt-1">
            In partnership with Capitaire
        </span>
    </div>
    <div className="text-right">
        <span className="text-[#59ABB5] font-normal text-[11px] md:text-[16px] leading-tight md:leading-6 tracking-normal mt-1 max-w-[140px] md:max-w-none block">
            Kerala's First Finance Career Program
        </span>
    </div>
</header>

        
       {/* Main Content Layout Wrapper */}
<main className="mx-auto px-6 pt-4 md:pt-12 pb-20 md:px-12 lg:px-16 flex flex-col space-y-8 md:space-y-12">

                {/* Hero Split Frame Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Frame: Message Context */}
                    <div className="lg:col-span-6 flex flex-col space-y-5">

                        {/* Registration Badge Accent */}
                        <div className="inline-flex items-center space-x-2 bg-[#F2A33A] text-white px-3 py-1.5  max-w-fit shadow-xs">
                            <Image
                                src="/check.png"
                                alt="Check mark"
                                width={14}
                                height={14}
                                className="w-3.5 h-3.5 object-contain"
                            />
                            <span className="text-[11px] md:text-xs font-semibold tracking-wide">
                                Registration Confirmed
                            </span>
                        </div>

                        {/* Direct Thank You Header */}
                       {/* Direct Thank You Header */}
<div className="space-y-1">
    <h1 className="text-[#242424] font-semibold text-3xl md:text-[48px] leading-tight md:leading-[54px] tracking-normal">
        Thank you, <br className="hidden sm:block" />
        <span className="text-[#242424]">Farhan</span>
    </h1>
    <h2 className="text-[#242424] font-semibold text-3xl md:text-[48px] leading-tight md:leading-[54px] tracking-normal">
        Your seat for the upcoming session is secured.
    </h2>
</div>

                        {/* Explanatory Paragraph Details */}
                        <p className="text-[#555454] text-[16px] leading-6 tracking-normal font-normal max-w-xl">
                            We have successfully received your registration for the <strong className="text-[#242424] font-semibold">Finance Career Transformation Program</strong>. Our admissions team will personally guide you through the next steps with the care your career deserves.
                        </p>
                    </div>

                    {/* Right Frame: Video */}
                    <div className="lg:col-span-6 w-full relative group">
                        <video
                            ref={videoRef}
                            src="/thankyoupagevideo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full aspect-[16/9] shadow-xl object-cover"
                        />
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                    </div>

                </div>

                {/* Bottom Frame: Meta Row Grid Section Box */}
                <div className="w-full border border-[#F9A53C] grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-xs backdrop-blur-xs">

                    {/* Data Block 1: Registration ID code reference */}
                    <div className="md:col-span-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#F9A53C] flex flex-col space-y-1.5">
                        <span className="text-[#555454] font-normal text-[16px] leading-6 tracking-normal">
                            Registration ID
                        </span>
                        <span className="text-[#09636E] font-medium text-[18px] leading-6 tracking-normal">
                            {data.registrationId}
                        </span>
                    </div>

                    {/* Data Block 2: Associated Program Target Variant */}
                    <div className="md:col-span-5 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#F9A53C] flex flex-col space-y-1.5">
                        <span className="text-[#555454] font-normal text-[16px] leading-6 tracking-normal">
                            Program name
                        </span>
                        <span className="text-[#09636E] font-medium text-[18px] leading-6 tracking-normal">
                            {data.programName}
                        </span>
                    </div>

                    {/* Data Block 3: Dynamic Lead Cycle Status Tracking */}
                    <div className="md:col-span-3 p-5 md:p-6 flex flex-col space-y-1.5">
                        <span className="text-[#555454] font-normal text-[16px] leading-6 tracking-normal">
                            Status
                        </span>
                        <div className="flex items-center space-x-2 pt-0.5">
                            <span className="w-2 h-2 rounded-full bg-[#1A4D54] animate-pulse shrink-0" />
                            <span className="text-[#09636E] font-medium text-[18px] leading-6 tracking-normal">
                                {data.status}
                            </span>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}