import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PopularCourses from "@/components/PopularCourses";
import CommunitySection from "@/components/CommunitySection";
import CTABanner from "@/components/CTABanner";
import EmpoweringLearning from "@/components/EmpoweringLearning";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustSection />
      <div id="courses">
        <PopularCourses />
      </div>
      <CommunitySection />
      <CTABanner />
      <div id="impact">
        <EmpoweringLearning />
      </div>
      <Pricing />
    </main>
  );
}



