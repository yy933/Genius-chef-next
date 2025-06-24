import { FeatureCardProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function FeatureCard({
  title,
  description,
  imageUrl,
}: FeatureCardProps) {
  return (
    <Card className="w-full max-w-sm pt-0">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        className="w-full h-60 object-cover rounded-t-md"
      />

      <CardContent>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
