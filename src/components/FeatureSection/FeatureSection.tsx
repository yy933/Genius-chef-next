import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/data/featureContent";

export default function FeatureSection() {
  return (
    <section className="w-full py-10">
      <div className="relative w-full flex-col">
        <h2 className="text-2xl md:text-4xl font-semibold text-center p-4">
          Why cook with us?
        </h2>
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
