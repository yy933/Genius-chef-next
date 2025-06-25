import MainCarousel from "@/components/Carousel/Carousel";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import CommitmentSection from "@/components/CommitmentSection/CommitmentSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import { NewsletterSection } from "@/components/NewsletterSection/NewsletterSection";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <FeatureSection />
      <CommitmentSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
}
