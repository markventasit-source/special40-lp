"use client";

import React, { useState } from 'react';

interface DateSlot {
    id: string;
    dayName: string;
    dayNum: string;
    month: string;
    date: Date;
}

function generateTwoWeekSlots(): DateSlot[] {
    const slots: DateSlot[] = [];
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let count = 0;
    let cursor = new Date(today);

    while (slots.length < 14) {
        const day = cursor.getDay();
        if (day !== 0 && day !== 6) { // skip weekends
            slots.push({
                id: `d${count++}`,
                dayName: dayNames[day],
                dayNum: String(cursor.getDate()).padStart(2, '0'),
                month: monthNames[cursor.getMonth()],
                date: new Date(cursor),
            });
        }
        cursor.setDate(cursor.getDate() + 1);
    }
    return slots;
}

export default function CounselorScheduler() {
    const dateSlots = React.useMemo(() => generateTwoWeekSlots(), []);

    const [selectedDateId, setSelectedDateId] = useState<string>(dateSlots[0]?.id ?? "");
    const [selectedTime, setSelectedTime] = useState<string>("02:30 PM");

    const timeSlots: string[] = [
        "10:00 AM", "11:30 AM", "01:00 PM",
        "02:30 PM", "04:00 PM", "05:30 PM"
    ];

    const activeDateObj = dateSlots.find(d => d.id === selectedDateId);
    const activeDateFormattedString = activeDateObj
        ? `${activeDateObj.dayName.charAt(0) + activeDateObj.dayName.slice(1).toLowerCase()}, ${activeDateObj.dayNum} ${activeDateObj.month.charAt(0) + activeDateObj.month.slice(1).toLowerCase()} ${activeDateObj.date.getFullYear()}`
        : "";

    const week1 = dateSlots.slice(0, 7);
    const week2 = dateSlots.slice(7, 14);

    return (
        <section className="w-full bg-white font-inter px-6 md:px-12 lg:px-16 mb-10">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col space-y-8">
                    <div className="space-y-3">
                    <span className="text-[#F9A53C] font-normal text-[15px] leading-[100%] tracking-[0.15em] uppercase block">
    SCHEDULE YOUR COUNSELOR CALL
</span><h2 className="text-[#242424] font-semibold text-[48px] leading-[57px] tracking-normal">
    Choose a time that respects your schedule.
</h2><p className="text-[#555454] font-normal text-[16px] leading-6 tracking-normal pt-2">
    Share the slot that suits you best. Your counselor will call on <span className="font-semibold text-[#242424]">(+91 9995 1235 4565)</span> at the time you select. Slots are available Monday to Friday, IST.
</p>
                    </div>
                    <div className="border border-[#F9A53C] p-6 space-y-4 max-w-md">
    <div className="flex flex-col space-y-1">
        <label className="text-[#555454] font-normal text-[16px] leading-[22px] tracking-normal ">
            Registered name
        </label>
        <input type="text" readOnly value="John Doe"
    className="bg-transparent border-0 p-0 text-[#F0A13D] font-normal text-[16px] leading-[22px] tracking-normal focus:ring-0 cursor-default focus:outline-hidden" />
    </div>
    <div className="flex flex-col space-y-1 border-t border-[#F2A33A]/10 pt-3">
        <label className="text-[#555454] font-normal text-[16px] leading-[22px] tracking-normal ">
            Email address
        </label>
        <input type="email" readOnly value="johndoe@testmail.com"
               className="bg-transparent border-0 p-0 text-[#F0A13D] font-normal text-[16px] leading-[22px] tracking-normal focus:ring-0 cursor-default focus:outline-hidden"  />
    </div>
    <div className="flex flex-col space-y-1 border-t border-[#F2A33A]/10 pt-3">
        <label className="text-[#555454] font-normal text-[16px] leading-[22px] tracking-normal ">
            WhatsApp / Phone
        </label>
        <input type="text" readOnly value="+91 9995 1235 4565"
               className="bg-transparent border-0 p-0 text-[#F0A13D] font-normal text-[16px] leading-[22px] tracking-normal focus:ring-0 cursor-default focus:outline-hidden" />
    </div>
    <div className="flex flex-col space-y-1 border-t border-[#F2A33A]/10 pt-3">
        <label className="text-[#555454] font-normal text-[16px] leading-[22px] tracking-normal ">
            Time zone
        </label>
        <input type="text" readOnly value="Asia / Kolkata (IST)"
                className="bg-transparent border-0 p-0 text-[#F0A13D] font-normal text-[16px] leading-[22px] tracking-normal focus:ring-0 cursor-default focus:outline-hidden" />
    </div>
</div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 md:p-8 rounded-sm w-full flex flex-col space-y-8">

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-[#242424] font-bold text-base md:text-lg">Select a date</h3>
                            <span className="text-[#09636E] font-normal text-[14px] leading-[100%] tracking-normal">
    Next 2 weeks
</span>
                        </div>

                        {/* Week 1 */}
                        <div className="grid grid-cols-7 gap-2">
                            {week1.map((slot) => {
                                const isSelected = selectedDateId === slot.id;
                                return (
                                    <button
                                        key={slot.id}
                                        type="button"
                                        onClick={() => setSelectedDateId(slot.id)}
                                        className={`flex flex-col items-center justify-center py-2.5 px-1 border transition-all rounded-xs text-center ${isSelected
                                            ? "bg-[#09636E] border-[#1A4D54] text-white"
                                            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                                            }`}
                                    >
                                        <span className={`text-[10px] tracking-tight font-medium ${isSelected ? "text-gray-300" : "text-gray-400"}`}>
                                            {slot.dayName}
                                        </span>
                                        <span className="text-base font-bold my-0.5 leading-none">{slot.dayNum}</span>
                                        <span className={`text-[9px] font-semibold tracking-wide ${isSelected ? "text-[#F9A53C]" : "text-gray-400"}`}>
                                            {slot.month}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Week 2 */}
                        <div className="grid grid-cols-7 gap-2">
                            {week2.map((slot) => {
                                const isSelected = selectedDateId === slot.id;
                                return (
                                    <button
                                        key={slot.id}
                                        type="button"
                                        onClick={() => setSelectedDateId(slot.id)}
                                        className={`flex flex-col items-center justify-center py-2.5 px-1 border transition-all rounded-xs text-center ${isSelected
                                            ? "bg-[#09636E] border-[#1A4D54] text-white"
                                            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                                            }`}
                                    >
                                        <span className={`text-[10px] tracking-tight font-medium ${isSelected ? "text-gray-300" : "text-gray-400"}`}>
                                            {slot.dayName}
                                        </span>
                                        <span className="text-base font-bold my-0.5 leading-none">{slot.dayNum}</span>
                                        <span className={`text-[9px] font-semibold tracking-wide ${isSelected ? "text-[#F9A53C]" : "text-gray-400"}`}>
                                            {slot.month}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[#242424] font-bold text-base">Available time</h3>
                            <div className="flex items-center space-x-1 text-gray-400 text-xs font-medium">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>IST</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {timeSlots.map((time) => {
                                const isTimeSelected = selectedTime === time;
                                return (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 text-center text-xs md:text-sm font-semibold border transition-all rounded-xs ${isTimeSelected
                                            ? "bg-[#09636E] border-[#1A4D54] text-white shadow-xs"
                                            : "bg-white border-gray-200 text-[#242424] hover:bg-gray-50"
                                            }`}
                                    >
                                        {time}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                        <div className="text-sm">
                            <span className="text-gray-500 font-medium">Your slot · </span>
                            <span className="text-[#1A4D54] font-bold">
                                {activeDateFormattedString} - {selectedTime}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="bg-[#F9A53C] hover:bg-[#e0912f] active:scale-[0.99] text-white font-bold text-sm py-3 px-8 shadow-sm transition-all text-center tracking-wide"
                        >
                            Confirm slot
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}