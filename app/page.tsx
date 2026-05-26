'use client'
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import ProgramFeatures from "./components/ProgramFeatures";
import WhyWeExist from "./components/WhyWeExist";
import TargetAudience from "./components/TargetAudience";
import TheProblem from "./components/TheProblem";
import ProgramDifference from "./components/ProgramDifference";
import SelectionProcess from "./components/SelectionProcess";
import TransformationJourney from "./components/TransformationJourney";
import OutcomeComparison from "./components/OutcomeComparison";
import PlacementSupport from "./components/PlacementSupport";
import PartnershipSection from "./components/PartnershipSection";
import CareerTransformations from "./components/CareerTransformations";
import CertificatesSection from "./components/CertificatesSection";
import FaqSection from "./components/FaqSection";
import FinalCtaSection from "./components/FinalCtaSection";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal className="w-full">
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <StatsStrip />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <ProgramFeatures />
      </ScrollReveal>


      <WhyWeExist />


      <ScrollReveal className="w-full">
        <TargetAudience />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <TheProblem />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <ProgramDifference />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <SelectionProcess />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <TransformationJourney />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <OutcomeComparison />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <PlacementSupport />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <PartnershipSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <CareerTransformations />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <CertificatesSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <FaqSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <FinalCtaSection />
      </ScrollReveal>
    </>
  );
}