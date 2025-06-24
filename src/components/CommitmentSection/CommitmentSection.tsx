import CommitmentItem from "./CommitmentItem";
import { Button } from "@/components/ui/button";
import { commitments } from "@/data/commitmentContent";


export default function CommitmentSection() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {commitments.map((item) => (
            <CommitmentItem key={item.title} {...item} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <a href="/menu">Check Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
