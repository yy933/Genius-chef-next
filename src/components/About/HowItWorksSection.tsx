import HowItWorksStep from "@/components/About/HowItWorksStep";
import { StepProps } from "@/types";

export default function HowItWorksSection({ steps }: { steps: StepProps[] }) {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">How it Works</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center p-6">
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
