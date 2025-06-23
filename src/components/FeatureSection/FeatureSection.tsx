import { FeatureCard } from "./FeatureCard";
import { Button } from "@/components/ui/button";
const features = [
  {
    title: "Diversity",
    description: "Hundreds of flavors cater to your needs",
    imageUrl:
      "https://images.unsplash.com/photo-1586377886286-6cd3ebb22bc6?auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Easy",
    description: "Beginner or pro, cooking is just simple",
    imageUrl:
      "https://images.unsplash.com/photo-1605433247501-698725862cea?auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Flexible",
    description: "Schedule changed? No worries!",
    imageUrl:
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=1174&q=80",
  },
];

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
