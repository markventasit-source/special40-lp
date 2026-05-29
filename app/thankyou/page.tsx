'use client'
import { useEffect } from 'react';
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
      <ProgramDifference />
      <ThankyouAdmissionSteps />
      <ThankyouSchedule />
      <ThankyouFooter/>
    </>
  );
}