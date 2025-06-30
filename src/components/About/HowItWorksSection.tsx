import HowItWorksStep from "@/components/About/HowItWorksStep";
import { StepProps } from "@/types";
import { SectionTitle } from "@/components/ui/section-title";

export default function HowItWorksSection({ steps }: { steps: StepProps[] }) {
  return (
    <section className="py-12">
      <div className="text-center my-8">
        <SectionTitle>How it Works</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center p-6">
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
