'use client'
import HeroSection from "./components/HeroSection";
import MobileHero from "./components/MobileHero";
import MobileNav from "./components/MobileNav";
import MobileOffer from "./components/MobileOffer";
import MobileTestimonials from "./components/MobileTestimonials";
import MobileFeatures from "./components/MobileFeatures";
import MobileTargetAudience from "./components/MobileTargetAudience";
import MobileCurriculum from "./components/MobileCurriculum";
import MobileSelectionProcess from "./components/MobileSelectionProcess";
import MobilePartnership from "./components/MobilePartnership";
import MobileFaq from "./components/MobileFaq";
import MobileLeadForm from "./components/MobileLeadForm";
import MobileStickyBar from "./components/MobileStickyBar";
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
      {/* Mobile-only components (below 500px) */}
      <MobileNav />
      <MobileHero />
      {/* <MobileOffer /> */}
      <MobileTestimonials />
      <MobileFeatures />
      <MobileTargetAudience />
      <MobileCurriculum />
      <MobileSelectionProcess />
      <MobilePartnership />
      <MobileFaq />
      <MobileLeadForm />
      <MobileStickyBar />

      {/* Desktop components (500px and above) */}
      <ScrollReveal className="w-full max-[499px]:hidden">
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <StatsStrip />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <ProgramFeatures />
      </ScrollReveal>

      <div className="max-[499px]:hidden">
        <WhyWeExist />
      </div>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <TargetAudience />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <TheProblem />
      </ScrollReveal>

      <ScrollReveal className="w-full mt-8 max-[499px]:hidden">
        <ProgramDifference />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <SelectionProcess />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <TransformationJourney />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <OutcomeComparison />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <PlacementSupport />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <PartnershipSection />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <CareerTransformations />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <CertificatesSection />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <FaqSection />
      </ScrollReveal>

      <ScrollReveal className="w-full max-[499px]:hidden">
        <FinalCtaSection />
      </ScrollReveal>
    </>
  );
}
