'use client'
import { useEffect, Suspense } from 'react';
import ProgramDifference from "../components/ThankyouHero";
import ThankyouAdmissionSteps from "../components/ThankyouAdmissionSteps";
import ThankyouSchedule from "../components/ThankyouSchedule";
import ThankyouFooter from "../components/ThankyouFooter"

export default function Thankyou() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <Suspense fallback={
        <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF] via-[#FFE5C2] to-[#FAEBD4] flex items-center justify-center font-semibold text-lg text-gray-700">
          Loading details...
        </div>
      }>
        <ProgramDifference />
      </Suspense>
      <ThankyouAdmissionSteps />
      <ThankyouSchedule />
      <ThankyouFooter/>
    </>
  );
}