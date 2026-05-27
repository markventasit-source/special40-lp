'use client'
import ProgramDifference from "../components/ThankyouHero";
import ThankyouAdmissionSteps from "../components/ThankyouAdmissionSteps";
import ThankyouSchedule from "../components/ThankyouSchedule";
import ThankyouFooter from "../components/ThankyouFooter"

export default function Thankyou() {
  return (
    <>
      <ProgramDifference />
      <ThankyouAdmissionSteps />
      <ThankyouSchedule />
      <ThankyouFooter/>
    </>
  );
}