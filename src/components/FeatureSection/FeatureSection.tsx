import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/data/featureContent";
import { SectionTitle } from "@/components/ui/section-title";

export default function FeatureSection() {
  return (
    <section className="w-full py-10">
      <div className="relative w-full flex-col">
        <SectionTitle>Why Cook with Us?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="default" size="lg">
            <a href="/plans">Try it now!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
