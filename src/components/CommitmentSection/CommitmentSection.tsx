import CommitmentItem from "./CommitmentItem";
import { Button } from "@/components/ui/button";
import { commitments } from "@/data/commitmentContent";
import { SectionTitle } from "@/components/ui/section-title";

export default function CommitmentSection() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Commitments</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {commitments.map((item) => (
            <CommitmentItem key={item.title} {...item} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <a href="/menu">Check Our Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
