import { StepProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function HowItWorksSteps({
  id,
  img,
  title,
  description,
}: StepProps) {
  return (
    <Card className="w-full max-w-sm flex flex-col h-full p-0 overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={500}
        height={500}
        className="w-full h-60 object-cover rounded-t-md "
      />

      <CardContent className="flex-1 flex flex-col mb-6">
        <h3 className="text-xl font-semibold">
          Step {id}. {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-auto">{description}</p>
      </CardContent>
    </Card>
  );
}
